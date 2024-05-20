
    import React, { useContext } from 'react'
    import { Helmet } from 'react-helmet'
    import MainContext from '../../../context/context'
    import Banner from '../../../components/Banner/Banner'
import Welcome from '../../../components/Welcome/Welcome'
import CrudItems from '../../../components/CrudItems/CrudItems'


    
    const Home = () => {
        const {data,setdata ,addBasket,loading} = useContext(MainContext)
        return (
        <>
                <Helmet>
                    <title>Home</title>
                </Helmet>
                <div>
                    <Banner/>
                    <Welcome/>
                    <CrudItems data={data} addBasket={addBasket} loading={loading}/>

                    <section className='welcome text-center bg-gradient'> 
                                <div className="container  ">
                                    <div className="row">
                                        <div className="col-12text-center    ">
                                            <h3 className='fs-1 text-danger  pb-5'>Latest News </h3>
                                            <h2 className='display-1 fw-bold  pb-5'>THE BLOG</h2>
                                           
                                        
                                        </div>

                                    </div>
                                </div>
                            </section>
                    
                    <CrudItems data={data.slice(3, 6)} addBasket={addBasket} loading={loading}/>
                </div>
        </>
        )
    }
    
    export default Home
        