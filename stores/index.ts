import {useStaticRendering} from 'mobx-react'
import config from './config'

const isServer = typeof window === 'undefined'
// 见代码注释1
useStaticRendering(isServer)

export class Store {
  [key: string]: any

  // 见代码注释2
  constructor(initialState: any = {}) {
    for (const k in config) {
      if (config.hasOwnProperty(k)) {
        this[k] = new config[k](initialState[k])
      }
    }
  }
}

let store: any = null

// 见代码注释3
export function initializeStore(initialState = {}) {
  if (isServer) {
    return new Store(initialState)
  }
  if (store === null) {
    store = new Store(initialState)
  }

  return store
}

