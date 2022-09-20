import React from 'react'
import { Route } from 'wouter'
import Layout from './react-components/Layout'
import Hero from './react-components/Hero'
import About from './react-components/About'

const App: React.FC = () => {
  return (
    <Layout>
      <>
        <Route path="/" component={Hero}></Route>
        <Route path="/about" component={About}></Route>
      </>
    </Layout>
  )
}

export default App
