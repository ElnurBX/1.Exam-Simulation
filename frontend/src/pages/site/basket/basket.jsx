
import React, { useContext } from 'react'
import { Helmet } from 'react-helmet'
import MainContext from '../../../context/context'


const Basket = () => {
    const {basket ,addBasket,delBasket} = useContext(MainContext)
    return (
    <>
            <Helmet>
                <title>Basket</title>
            </Helmet>
            <div className='container mt-5 pt-5 '>
            <table class="table">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">image</th>
                    <th scope="col">title</th>
                    <th scope="col">add</th>
                    <th scope="col">count</th>
                     <th scope="col">del</th>
                    </tr>
                </thead>
                <tbody>
                 {
                    basket.map((item,index)=>{
                        return(
                            <tr>
                            <th scope="row">{index}</th>
                            <td>{item.item.title}</td>
                            <td><img src={item.item.image} width={"60px"} height={"60px"} alt="" /></td>
                            <td><button  className='btn btn-danger' onClick={()=>delBasket(item.item)}>-</button></td>
                            <td>{item.count}</td>
                            <td><button className='btn btn-primary' onClick={()=>addBasket(item.item)}>+</button></td>
                            </tr>
                           
                        )
                    })
                 }
                </tbody>
                </table>
            </div>
    </>
    )
}

export default Basket
    