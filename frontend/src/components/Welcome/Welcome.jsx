import React from 'react'
import { Link } from 'react-router-dom'
import "./welcome.scss"
const Welcome = () => {
  return (
    <section className='welcome bg-light bg-gradient mb-5
    '> 
        <div className="container bg-s ">
            <div className="row">
                <div className="col-lg-6 col-md-12 text-center pt-5 pb-5 ">
                    <h3 className='fs-1 text-danger  pb-5'>Italian Restaurant  </h3>
                    <h2 className='display-1 fw-bold  pb-5'>WELCOME</h2>
                    <h4 className='text-body-secondary   pb-5 fw-light'>Donec quis lorem nulla. Nunc eu odio mi. Morbi nec lobortis est. Sed fringilla, nunc sed imperdiet lacinia, nisl ante egestas mi, ac facilisis ligula sem id neque.</h4>
                    <Link className='btn' to={"/"}>OUR STORY <i className="fa-solid fa-arrow-right"></i> </Link>
                </div>
                <div className="col-lg-6 col-md-12 hover-img rounded-5">
                    <img src="https://preview.colorlib.com/theme/pato/images/our-story-01.jpg.webp" className='w-100' alt="" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Welcome