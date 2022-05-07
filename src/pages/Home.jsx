import React from 'react'
import AboutSection from '../components/AbtSection/AboutSection'
import DealProduct from '../components/DealProduct/DealProduct'
import OurProducts from '../components/OurProducts/OurProducts'
import Products from '../components/Products/Products'
import SearchArea from '../components/Search-Area/SearchArea'
import Slider from '../components/Slider/Slider'
import SliderUser from '../components/SliderUser/SliderUser'
import Support from '../components/Support/Support'

const Home = () => {
  return (
    <>
    <Slider/>
    <Support/>
    <OurProducts/>
    <DealProduct/>
    <SliderUser/>
    <AboutSection/>
    </>
  )
}

export default Home