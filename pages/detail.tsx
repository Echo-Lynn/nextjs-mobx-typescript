import * as React from 'react'
import Layout from '../components/Layout'
import {User} from '../interfaces'
import {findData} from '../utils/sample-api'
import ListDetail from '../components/ListDetail'
import {inject, observer} from 'mobx-react'
import UserStore from '../stores/user'

type Props = {
  item?: User
  userStore: UserStore
  errors?: string
}

@inject('userStore')
@observer
class InitialPropsDetail extends React.Component<Props> {
  static getInitialProps = async ({query, mobxStore}: any) => {
    mobxStore.userStore.setName('set by server')
    try {
      const {id} = query
      const item = await findData(Array.isArray(id) ? id[0] : id)
      return {item}
    } catch (err) {
      return {errors: err.message}
    }
  }

  render() {
    const {item, errors} = this.props

    if (errors) {
      return (
        <Layout title={`Error | Next.js + TypeScript Example`}>
          <p>
            <span style={{color: 'red'}}>Error:</span> {errors}
          </p>
        </Layout>
      )
    }

    return (
      <Layout
        title={`${item ? item.name : 'Detail'} | Next.js + TypeScript Example`}
      >
        {item && <ListDetail item={item}/>}
        <p>
          Name: {this.props.userStore.name}
        </p>
        <button onClick={() => {
          this.props.userStore.setName('set by client')
        }}>click to set name
        </button>
      </Layout>
    )
  }
}

export default InitialPropsDetail
