import React, { useEffect, useState } from 'react'
import { getProducts } from '../../API/ProductsApi'
import Footer from '../layout/Footer'
import Navbar from '../layout/Navbar'
import AdminSidebar from './AdminSidebar'

const ProductsAdmin = () => {
    const [products,setProducts] = useState([])
useEffect(()=>{
    getProducts()
    .then(data=>{
        if(data.masamune){
            console.log(data.masamune)
        }
        else{
            setProducts(data)
            console.log(data)
        }
    })
},[])
  return (
    <div>
      <Navbar/>

      <div className='row'>
        <div className='col col-md-2'>
        <AdminSidebar/>

          
        </div>
        <div className='col col-md-10'>
          <h3>This is for the viewing of the  products</h3> 
          <table className='table table-striped table-bordered'>
            <thead>
                <tr>
                    <th>S.No</th>
                    <th>Product Name</th>
                    <th>Product Image</th>
                    <th>
                      
                      
                      Product Description
                      
                      </th>
                    <th>Count in Stock</th>
                    <th>Category</th>

                </tr>
            </thead>
            <tbody>
                 
          {
            products.map((element,i)=>{return <tr key={i}>
                <td>{i+1}</td>
                <td>{element.product_name}</td>
                <td>
                  <img src={`http://localhost:5000/${element.product_image}`} alt={element.product_name}/>
                </td>
                <td>
                  <h4>{element.product_price}</h4>
                  <h5>{element.product_description}</h5>
                  
                  </td>
                <td>{element.count_in_stock}</td>
                <td>{element.category.category_name}</td>


            </tr>})
          }
            </tbody>




         




         </table>
        </div>

      </div>


      <Footer/>


    </div>
  )
}

export default ProductsAdmin