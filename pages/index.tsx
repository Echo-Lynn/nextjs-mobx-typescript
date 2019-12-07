import * as React from 'react'
import Link from 'next/link'
import Layout from '../components/Layout'
import { NextPage } from 'next'
import getConfig from 'next/config'

const {publicRuntimeConfig, serverRuntimeConfig} = getConfig()

const IndexPage: NextPage = () => {
  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <h1>Hello Next.js 👋</h1>
      <p>Public config JSON string: {JSON.stringify(publicRuntimeConfig)}</p>
      <p>Server side config JSON string: {JSON.stringify(serverRuntimeConfig)}</p>
      <p>
        <Link href="/about">
          <a>About </a>
        </Link>
      </p>
    </Layout>
  )
}

export default IndexPage
