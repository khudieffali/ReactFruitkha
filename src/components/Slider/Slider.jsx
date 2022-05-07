import React, { useEffect, useState } from 'react'
import '../Slider/slider.scss'
import straw from'../../assets/strawberry.jpg'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y,Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Link } from 'react-router-dom';

const Slider = () => {
  const [products,setProducts]=useState([]);
    useEffect(()=>{
      fetch('https://fakestoreapi.com/products')
      .then(res=>res.json())
      .then(products=>
        setProducts(products))
      },[]); 

  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y,Autoplay]}
      spaceBetween={0}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={{delay:4000}}
    >
    {products.slice(0,5).map(products=>(
      <SwiperSlide key={products.id}>
        <div className="single-slider">
          <div className="singleImage">
              <img className='img-fluid' src={products.image} alt=''/>
          </div>
          <div className='singleTextButton'>
          <div className='singleText'>
            <h4>{products.category}</h4>
            <h1>{products.title}</h1>
          </div>
          <div className='singleButton d-flex align-items-center'>
                 <Link to='/' className='btnCollection'>Clothes Collection</Link>
                 <Link to='/' className='btnContact'>Contact Us</Link>
          </div>
          </div>
        </div>
      </SwiperSlide>
    ))}
    </Swiper>
  )
}
export default Slider
