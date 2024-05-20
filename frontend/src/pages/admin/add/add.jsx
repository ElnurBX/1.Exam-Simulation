
    import React, { useContext } from 'react'
    import { Helmet } from 'react-helmet'
    import MainContext from '../../../context/context'
    import { Formik } from 'formik';
    import axios from 'axios';
    const Add = () => {
        const {data,setdata} = useContext(MainContext)
        const deletItem =(id)=>{
          axios.delete(`http://localhost:8080/api/Prods/${id}`).then((res)=>
            setdata([...res.data])
          )
        }
        return (
        <>
                <Helmet>
                    <title>Add</title>
                </Helmet>
                <main>
                    <section className='mt-5 pt-5 '>


<div className="container">


    <Formik
      initialValues={{ title: '', image: '',price:'', discrip:''}}
      validate={values => {
       
      }}
      onSubmit={(values) => {
        axios.post('http://localhost:8080/api/Prods/',values).then((res)=>{
            setdata([...res.data])
        })
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
      }) => (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="title"
            placeholder='title'
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.title}
          />
          {errors.title && touched.title && errors.title}
          <input
            type="text"
            name="image"
            placeholder='image'
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.image}
          />
          {errors.image && touched.image && errors.image}
          <input
            type="text"
            name="discrip"
            placeholder='discrip'
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.discrip}
          />
          {errors.discrip && touched.discrip && errors.discrip}
          <input
            type="numnber"
            name="price"
            placeholder='price'
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.price}
          />
          {errors.price && touched.price && errors.price}
          <button type="submit">
            Submit
          </button>
        </form>
      )}
    </Formik>
  </div>
  <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">title</th>
      <th scope="col">image</th>
      <th scope="col">price</th>
      <th scope="col">discrip</th>
      <th scope="col">delete</th>
    </tr>
  </thead>
  <tbody>
    {
      data.map((item,index)=>{
        return(
          <tr>
          <th scope="row">{index}</th>
          <td>{item.title}</td>
          <td><img src={item.image} width={"50px"} height={"50px"} alt="" /></td>
          <td>{item.price}</td>
          <td>{item.discrip}</td>
          <td><button   className='btn btn-danger' onClick={()=>deletItem(item._id)}> delete</button></td>
        </tr>
        )
      })
    }
  
  </tbody>
</table>
                    </section>
                </main>
        </>
        )
    }
    
    export default Add
        