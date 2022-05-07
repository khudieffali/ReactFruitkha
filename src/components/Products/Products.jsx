import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import "../Products/products.scss"

const Products = () => {
  const [products, setProducts] = useState([])
  const getProduct = () => {
    fetch('https://fakestoreapi.com/products')
      .then(e => e.json())
      .then(res => setProducts(res))
  }
  useEffect(() => {
    getProduct();
  }, [])
  return (
    <section className='proList'>
      <div className="container">
        <div className="row">
          {
            products.slice(0,3).map(pro => (
              <div className="col-lg-4 col-md-6" key={pro.id}>
                <div className="proOne">
                  <div className="top-img d-flex justify-content-center mb-5">
                    <img className='img-fluid' width={150} src={pro.image} alt="" />
                  </div>
                  <div className="bottom-text text-center">
                    <h4>
                      {pro.title}
                    </h4>
                    <p className='mt-3'>
                      Per kg
                    </p>
                    <h2>
                      {pro.price}$
                    </h2>
                  </div>
                  <div className="bottom-btn text-center mt-3">
                    <Link to='/'>
                      <button className='btn-cart'>
                      <i className='bi bi-cart-fill me-2'></i>
                        Add To Cart</button>

                    </Link>
                  </div>
                </div>
              </div>
            ))
          }

        </div>
      </div>
    </section>
  )
}

export default Products