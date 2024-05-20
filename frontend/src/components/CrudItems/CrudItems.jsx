import React from 'react'
import { Link } from 'react-router-dom'
import "./CrudItem.scss"
const CrudItems = ({ data, addBasket ,loading }) => {
  return (
    <section className='CrudItems'>
      <div className="container">

        <div className="CrudItems__cards   row">
          { data.slice(0, 3).map((item, index) => {
              return (
                <div className="col-lg-4 col-md-12">
                  <div key={index} className="CrudItems__cards__card">
                    <div className="CrudItems__cards__card__img">
                      <img src={item.image} className='w-100' alt="" />
                    </div>
                    <div className=" ">
                      <Link to={`/det/${item._id}`} className='h2 mb-4'>{item.title}</Link>
                      <p >{item.discrip}</p>
                      <button onClick={() => addBasket(item)} className='btn ' >Add to basket <i class="fa-solid fa-arrow-right"></i></button>
                    </div>
                  </div>
                </div>
              )
            }) 
          }
        </div>
      </div>
    </section>
  )
}

export default CrudItems