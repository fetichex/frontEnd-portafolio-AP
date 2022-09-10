import React from 'react'
import NavBar from './react-components/NavBar'
import Layout from './react-components/Layout'
import Hero from './react-components/Hero'
import About from './react-components/About'

const App: React.FC = () => {
  return (
    <>
      <NavBar />
      <Layout>
        <>
          <Hero />
          <About/>
        </>
      </Layout>
    </>
  )
}

export default App
