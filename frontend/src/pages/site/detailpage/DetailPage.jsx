import './DetailPage.scss'
import { useParams } from 'react-router'
import axios from 'axios'
import React, { useContext, useEffect } from 'react'
import { Helmet } from 'react-helmet'
import MainContext from '../../../context/context'
const DetailPage = () => {
    const {id} =useParams()
    const {data,setdata ,addBasket} = useContext(MainContext)
    useEffect(() => {
        axios.get(`http://localhost:8080/api/Prods/${id}`).then((res) => {
            setdata({...res.data})
        })
    }, []);     
    console.log(data)
  return (
    <>
    <Helmet>
    <title>{data.title}</title>
    </Helmet>
    <main>
        <div className="container mt-5 pt-5">
            <div className="row">
                <div className="col-6">
                  <img src={data.image} className='w-100' alt="" />
                </div>
                <div className="col-6">
                    <h1>{data.title}</h1>
                    <p>{data.discrip}</p>
                    <span className='mb-5 d-block'>{data.price}</span>
                    <button onClick={()=>addBasket(data)} className='btn btn-primary'> addBasket</button>
                </div>
            </div>
        </div>
    </main>
    </>
  )
}

export default DetailPage