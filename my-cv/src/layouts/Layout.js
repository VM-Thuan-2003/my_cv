import React from 'react'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import Route from '../routes/Route'
const Layout = () => {
  return (
    <div id="layout">
        <Header/>
        <Route/>
        <Footer/>
    </div>
  )
}

export default Layout