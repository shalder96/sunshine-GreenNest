import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Outlet } from 'react-router-dom'
import AuthProvider from './contexts/AuthProvider'

const Layout = () => {
  return (
    <AuthProvider>
      <Navbar />
      <main className='min-h-screen'>
        <Outlet />
      </main>
      <Footer />
    </AuthProvider>
  )
}

export default Layout