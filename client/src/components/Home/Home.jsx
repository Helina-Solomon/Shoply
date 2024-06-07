import React from 'react'
import Header from "../common/Header"
import Products from './Products'
import Contacts from './contact'
import Hero from './Hero'
import Footer from '../common/Footer'
const Home = () => {
  return (
    <div>
      <Header />
      <Hero/>
      <Products/>
      <Contacts/>
      <Footer/>
    </div>
  )
}

export default Home
