import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import ScrollToTopButton from '../components/ScrollToTopButton'
// import Header from '../components/Header'

const UserLayout: React.FC = () => {
  return (
    <>
      {/* <Header /> */}

      <Outlet />

      <Footer />

      <ScrollToTopButton />
    </>
  )
}

export default UserLayout