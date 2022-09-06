import React from 'react'
import NavBar from './react-components/NavBar'
import Layout from './react-components/Layout'
import Hero from './react-components/Hero'

const App: React.FC = () => {
  return (
    <>
      <NavBar />
      <Layout>
        <Hero />
      </Layout>
    </>
  )
}

export default App
