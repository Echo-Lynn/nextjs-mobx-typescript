// pages/_app.tsx
import App, {AppContext} from 'next/app'
import React from 'react'
import {initializeStore, Store} from '../stores'
import {Provider} from 'mobx-react'

class MyMobxApp extends App {

  mobxStore: Store

  // Fetching serialized(JSON) store state
  static async getInitialProps(appContext: AppContext): Promise<any> {
    const ctx: any = appContext.ctx
    // 见代码注释1
    ctx.mobxStore = initializeStore()
    const appProps = await App.getInitialProps(appContext)

    return {
      ...appProps,
      initialMobxState: ctx.mobxStore
    }
  }

  constructor(props: any) {
    super(props)
    // 见代码注释2
    const isServer = typeof window === 'undefined'
    this.mobxStore = isServer ? props.initialMobxState : initializeStore(props.initialMobxState)
  }

  render() {
    const {Component, pageProps}: any = this.props
    return (
      // 见代码注释3
      <Provider {...this.mobxStore}>
        <Component {...pageProps} />
      </Provider>
    )
  }
}

export default MyMobxApp
