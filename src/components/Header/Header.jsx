import React, { useState } from 'react'
import './header.scss'
import Logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'
import SearchArea from '../Search-Area/SearchArea';
function Header() {
    const [bckColor,setBckColor]=useState("");
    const [openSearch,setOpenSearch]=useState("")
    window.addEventListener("scroll", function(){
        if(this.scrollY>100){
            setBckColor("active-header")
        }else{
            setBckColor("")
        }
    })
    return (
        <header className={`headerNavbar ${bckColor}`} >
            <div className="container">
                <div className="row">
                    <div className="myNavbar d-flex align-items-center justify-content-around">
                        <div className="logo">
                            <Link to='/'>
                                <img className='img-fluid' src={Logo} alt='' />
                            </Link>
                        </div>
                        <div className="myNavItem">
                            <ul className='d-flex'>
                                <li><Link to='/' style={{ color: "#F28123" }}>Home

                                </Link></li>
                                <li>
                                    <Link to='/about'>About</Link>
                                </li>
                                <li>
                                    <Link to='/'>Pages</Link>
                                    <ul className='subMenu'>
                                        <li>
                                            <Link to='/'>404 Page</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>About</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Cart</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Check Out</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Contact</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>News</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Shop</Link>
                                        </li>
                                    </ul>
                                </li>
                                <li><Link to='/'>News</Link>
                                <ul className='subMenu'>
                                        <li>
                                            <Link to='/'>News</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Single News</Link>
                                        </li>
                                    </ul>
                                </li>
                                <li><Link to='/contact'>Contact</Link></li>
                                <li><Link to='/'>Shop</Link>
                                <ul className='subMenu'>
                                        <li>
                                            <Link to='/'>Shop</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Check Out</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Single Product</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Cart</Link>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <div className="rightPanel">
                            <Link to='/'>
                                <i className='bi bi-cart-fill'></i>
                            </Link>
                            <i onClick={e=>setOpenSearch("active-search")} className='bi bi-search'></i>
                        </div>
                    </div>
                </div>
            </div>
    <SearchArea data={openSearch} setData={setOpenSearch}/>
        </header>
    )
}

export default Header