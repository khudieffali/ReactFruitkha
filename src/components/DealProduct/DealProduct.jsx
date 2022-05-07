import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './dealProduct.scss'
import strawberry from '../../images/a.jpg'

const DealProduct = () => {
    return (
        <section className="cart-banner pt-100 pb-100">
            <div className="container">
                <div className="row clearfix">
                    <div className="image-column col-lg-6">
                        <div className="image">
                            <div className="price-box">
                                <div className="inner-price">
                                    <span className="price">
                                        <strong>30%</strong> <br /> off per kg
                                    </span>
                                </div>
                            </div>
                            <img className='img-fluid' src={strawberry} alt="" />
                        </div>
                    </div>
                    <div className="content-column col-lg-6">
                        <h3><span className="orange-text">Deal</span> of the month</h3>
                        <h4>Hikan Strwaberry</h4>
                        <div className="text">Quisquam minus maiores repudiandae nobis, minima saepe id, fugit ullam similique! Beatae, minima quisquam molestias facere ea. Perspiciatis unde omnis iste natus error sit voluptatem accusant</div>
                        <div className="time-counter">
                            <div className="time-countdown clearfix" data-countdown="2020/2/01">
                                <div className="counter-column">
                                    <div className="inner">
                                        <span className="count">00</span>Days</div>
                                </div>
                                <div className="counter-column">
                                    <div className="inner">
                                        <span className="count">00</span>Hours</div>
                                </div> 
                                 <div className="counter-column">
                                    <div className="inner"><span className="count">00</span>Mins</div>
                                </div>
                                <div className="counter-column">
                                    <div className="inner"><span className="count">00</span>Secs</div>
                                </div>
                            </div>
                        </div>
                        <Link to="/" className="cart-btn mt-3"><i className='bi bi-cart-fill me-2'></i> Add to Cart</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DealProduct