
import React from 'react'
import "./footer.scss"
import { Link } from 'react-router-dom'
const Footer = () => {
return (
    <footer className='mt-5'>
            <div className="footer__ust pb-5 pt-5   ">
                <div className="container pb-5 pt-5  ">
                <div className="row  pb-5 pt-5   justify-content-center ">
                    <div className="col-lg-4 col-md-12">
                        <h3>SPECIALS SIGN UP</h3>
                    </div>
                    <div className="col-lg-4 col-md-12 d-flex justify-content-center   align-items-center">
                       <input className=' p-1 rounded-3 border ' placeholder='Email Adress' type="text" name="" id="" />
                    </div>
                    <div className="col-lg-4 col-md-12">
                        <button className='btn btn-dark'> Sing up</button>
                    </div>
                </div>
               </div>
            </div>
            <div className="footer__orta">
                <div className="container">
                <div className="row">
                <div className="col-lg-4 col-md-12">
                        <h3>CONTACT US</h3>
                        <ul>
                            <li>
                            <i class="fa-solid fa-location-dot"></i>8th floor, 379 Hudson St, New York, NY 10018
                            </li>
                            <li>
                            <i class="fa-solid fa-phone"></i> (+1) 96 716 6879
                            </li>
                            <li>
                            <i class="fa-solid fa-envelope"></i>contact@site.com
                            </li>                        
                            </ul>
                            <h3>OPENING TIMES</h3>
                            <ul>
                                <li>09:30 AM – 11:00 PM</li>
                                <li>Every Day</li>
                            </ul>
                    </div>
                    <div className="col-lg-4 col-md-12">
                    <h3>LATEST TWITTER</h3>
                        <ul>
                            <li>
                            <i class="fa-brands fa-twitter"></i>@colorlib
                            </li>
                            <li>
                            Activello is a good option. It has a slider built into that displays the featured image in the slider. https://buff.ly/2zaSfAQ
                            </li>
                            <li>
                            21 Dec 2017
                            </li>                        
                           
                            <li>
                            <i class="fa-brands fa-twitter"></i>@colorlib
                            </li>
                            <li>
                            Activello is a good option. It has a slider built into that displays the featured image in the slider. https://buff.ly/2zaSfAQ
                            </li>
                            <li>
                            21 Dec 2017
                            </li>     
                            </ul>
                    </div>
                    <div className="col-lg-4 col-md-12">
                         <h1>GALLERY</h1>
                         <div className="row">
                            <div className="col-3">
                                <img src="https://preview.colorlib.com/theme/pato/images/photo-gallery-01.jpg.webp" className='w-100' alt="" />
                            </div>
                            <div className="col-3">
                                <img src="https://preview.colorlib.com/theme/pato/images/photo-gallery-02.jpg.webp" className='w-100' alt="" />
                            </div>
                            <div className="col-3">
                                <img src="https://preview.colorlib.com/theme/pato/images/photo-gallery-03.jpg.webp" className='w-100' alt="" />
                            </div>
                            <div className="col-3">
                                <img src="https://preview.colorlib.com/theme/pato/images/photo-gallery-04.jpg.webp" className='w-100' alt="" />
                            </div>
                            <div className="col-3">
                                <img src="https://preview.colorlib.com/theme/pato/images/photo-gallery-05.jpg.webp" className='w-100' alt="" />
                            </div>
                            <div className="col-3">
                                <img src="https://preview.colorlib.com/theme/pato/images/photo-gallery-06.jpg.webp" className='w-100' alt="" />
                            </div>
                            <div className="col-3">
                                <img src="https://preview.colorlib.com/theme/pato/images/photo-gallery-07.jpg.webp" className='w-100' alt="" />
                            </div>
                            <div className="col-3">
                                <img src="https://preview.colorlib.com/theme/pato/images/photo-gallery-08.jpg.webp" className='w-100' alt="" />
                            </div>
                            <div className="col-3">
                                <img src="https://preview.colorlib.com/theme/pato/images/photo-gallery-09.jpg.webp" className='w-100' alt="" />
                            </div>
                            <div className="col-3">
                                <img src="https://preview.colorlib.com/theme/pato/images/photo-gallery-10.jpg.webp" className='w-100' alt="" />
                            </div>
                            <div className="col-3">
                                <img src="https://preview.colorlib.com/theme/pato/images/photo-gallery-11.jpg.webp" className='w-100' alt="" />
                            </div>
                            <div className="col-3">
                                <img src="https://preview.colorlib.com/theme/pato/images/photo-gallery-12.jpg.webp" className='w-100' alt="" />
                            </div>
                         </div>
                    </div>
                </div>
                </div>
            </div>
            <div className="footer__alt">
                <div className="container pt-3 pb-3">
                    <div className="row">
                        <div className="col-6 text-left">
                        <div className="icons d-flex gap-3 col-1 justify-content-end  align-items-center">
                         <Link to={"/"}  className="nav-link text-dark active" aria-current="page" ><i className="fa-brands fa-twitter"></i></Link>
                         <Link to={"/"}  className="nav-link text-dark active" aria-current="page" > <i className="fa-brands fa-facebook-f"></i></Link>
                         <Link to={"/"}  className="nav-link text-dark active" aria-current="page" ><i className="fa-brands fa-instagram"></i></Link>
                            </div>   
                        </div>
                        <div className="col-6 text-right">
                            <p className='text-right'>@ 2017 Colorlib. Get The Theme</p>
                        </div>
                    </div>
                </div>
            </div>
    </footer>
)
}

export default Footer
                    