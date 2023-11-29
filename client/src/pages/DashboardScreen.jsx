import React from 'react'
import Layout from './layouts/Layout'
import Navbar from '../components/Navbar'
import SubNavbar from '../components/SubNavbar'
import HeroSection from '../components/HeroSection'

const DashboardScreen = () => {
  return (
    <>
        <Layout>
            <Navbar/>
            <SubNavbar/>

            {/* Hero Section */}
            <HeroSection/>
        </Layout>
    </>
  )
}

export default DashboardScreen
