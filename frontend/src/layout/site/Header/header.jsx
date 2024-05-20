
import React from 'react'
import "./header.scss"
import { Link } from "react-router-dom"
const Header = () => {
    return (
        <header className='headerSite bg-light'>
            <div className="container bg-light">
                <nav className="navbar  bg-light fixed-top">
                    <div className="container d-flex">
                        <a className="navbar-brand      col-1" ><img src="https://preview.colorlib.com/theme/pato/images/icons/logo2.png.webp" alt="" /> </a>


                        <ul className="nav mb-2 mb-lg-0 col-8 d-flex 	d-none d-xxl-flex d-xl-flex d-lg-flex">
                            <li className="nav-item  ">
                               <Link to={"/"}  className="nav-link text-dark active" aria-current="page" >Home</Link>
                            </li>
                            <li className="nav-item ">
                                <Link to={"/admin/add"}  className="nav-link text-dark" >Add</Link>
                            </li>
                            <li className="nav-item ">
                                <Link to={"/basket"} className="nav-link text-dark  ">Basket</Link>
                            </li>
                            <li className="nav-item ">
                                <Link to={"/basket"} className="nav-link text-dark  ">Basket</Link>
                            </li> <li className="nav-item ">
                                <Link to={"/store"} className="nav-link text-dark  ">Store</Link>
                            </li>
                        </ul>

                         <div className="icons d-flex gap-3 col-1 justify-content-end  align-items-center d-none d-xxl-flex d-xl-flex">
                         <Link to={"/"}  className="nav-link text-dark active" aria-current="page" ><i className="fa-brands fa-twitter"></i></Link>
                         <Link to={"/"}  className="nav-link text-dark active" aria-current="page" > <i className="fa-brands fa-facebook-f"></i></Link>
                         <Link to={"/"}  className="nav-link text-dark active" aria-current="page" ><i className="fa-brands fa-instagram"></i></Link>
                            </div>   
                        <button className="navbar-toggler  text-dark" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon text-dark"></span>
                        </button>
                        <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                            <div className="offcanvas-header">
                                <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Offcanvas</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                            </div>
                            <div className="offcanvas-body">
                                <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                                    <li className="nav-item">
                                        <a className="nav-link active" aria-current="page" >Home</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" >Link</a>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle"  role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Dropdown
                                        </a>
                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item" >Action</a></li>
                                            <li><a className="dropdown-item" >Another action</a></li>
                                            <li>
                                                <hr className="dropdown-divider" />
                                            </li>
                                            <li><a className="dropdown-item" >Something else here</a></li>
                                        </ul>
                                    </li>
                                </ul>
                                <form className="d-flex mt-3" role="search">
                                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                    <button className="btn btn-outline-success" type="submit">Search</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Header
