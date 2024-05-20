
import React, { useContext, useState } from 'react'
import { Helmet } from 'react-helmet'
import MainContext from '../../../context/context'
import { Link } from 'react-router-dom'


const ShopPage = () => {
    const {data,setdata ,addBasket,loading} = useContext(MainContext)
    const [sorted,setSorted]=useState(null)
    const sorting=(str)=>{
        let change=[]
        switch (str) {
            case "A-Z":
                change=[...data.sort((a, b) => a.title.localeCompare(b.title))
]
              break;
            case "Z-A":
              change = [...data.sort((a, b) => b.title.localeCompare(a.title))
];
              break;
            case "Low":
                change = [...data.sort((a, b)=> a.price-b.price)];
                break;

            case "High":
                change = [...data.sort((a, b)=> b.price-a.price)];
                break;
            default:
              change = [...data.sort()];
          }
          setSorted(change)
          console.log(sorted)
    }
    const Search = (str) => {
        const filteredData = str === '' ? data : data.filter(item => item.title.toLowerCase().includes(str.toLowerCase()));
        setSorted(filteredData);
    };
    
    return (
    <>
            <Helmet>
                <title>ShopPage</title>
            </Helmet>
            <div>
            <section className='CrudItems mt-5 pt-5'>
                <div className="container">
                    <div className="sortbar mb-3">
                        <select onClick={(e)=>{
                            sorting(e.target.value)
                        }} >
                            <option value="A-Z">A-Z</option>
                            <option value="Z-A">Z-A</option>
                            <option value="High">Azalan sira</option>
                            <option value="Low">Artan sira</option>
                        </select>
                    </div>
                    <div className="searcbar mb-5">
                        <input type="text" onChange={(e)=>{
                            Search(e.target.value)
                        }} />
                    </div>
                    <div className="CrudItems__cards   row">
                    { (sorted === null ? data : sorted).map((item, index) => {
                        return (
                            <div className="col-4">
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
            </div>
    </>
    )
}

export default ShopPage
    