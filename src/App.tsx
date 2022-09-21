import React from 'react'
import { Route } from 'wouter'
import Layout from './react-components/Layout'
import Hero from './react-components/Hero'
import About from './react-components/About'
import Tools from './react-components/Tools'
import Projects from './react-components/Projects'

const App: React.FC = () => {
  return (
    <Layout>
      <>
        <Route path="/" component={Hero}></Route>
        <Route path="/about" component={About}></Route>
        <Route path="/tools" component={Tools}></Route>
        <Route path="/projects" component={Projects}></Route>
      </>
    </Layout>
  )
}

export default App
