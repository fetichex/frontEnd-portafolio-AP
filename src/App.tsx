import React from 'react'
import { Route } from 'wouter'
import Layout from './react-components/Layout'
import SideBar from './react-components/SideBar'
import Buttons from './react-components/Buttons'
import { ROUTES } from './tools'

const App: React.FC = () => {
  return (
    <>
      <SideBar />
      <Layout>
        {ROUTES.map(({ path, component }, i) => (
          <Route key={i} path={path} component={component}></Route>
        ))}
      </Layout>
      <Buttons />
    </>
  )
}

export default App
