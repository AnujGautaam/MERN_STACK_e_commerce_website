import React from 'react'
import Footer from '../layout/Footer'
import Navbar from '../layout/Navbar'
import Carousel from './Carousel'
import Products from './Products'

const Home = () => {
  return (
    <>
    <Navbar/>

<Carousel/>


    <Products/>
    <Footer/>
    
    </>
  )
}

export default Home