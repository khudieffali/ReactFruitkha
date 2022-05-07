import React from 'react'
import Products from '../Products/Products'
import './ourProducts.scss'
const OurProducts = () => {
  return (
    <div className='ourProducts text-center'>
        <div className="text-products mb-5">
            <h3>
             <span>Our</span>
             Products
            </h3>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, fuga quas itaque eveniet beatae optio.
            </p>
        </div>
        <Products/>
        </div>
  )
}

export default OurProducts