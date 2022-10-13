import React, { useEffect, useState } from 'react'
import { viewingCategory } from '../../API/CategoryApi'
import { addProducts } from '../../API/ProductsApi'
import Footer from '../layout/Footer'
import Navbar from '../layout/Navbar'
import AdminSidebar from './AdminSidebar'

const AddProduct = () => {
  // the general rule is to include all the states htmlFor storing the values of the fields

  // this time the states will be created using an object notation 
  const [categories, setCategories] = useState([])

const [product,setProduct] = useState({
  product_name:"",
  product_description:"",
  product_price:"",
  product_image:"",
  count_in_stock:"",
  category:"",
  success:false,
  error:"",
  formdata : ""

})


// this is for destructuring the data 
const {product_name,product_description,product_image,product_price,count_in_stock,category,success,error,formdata} = product

  // this is going to be use effect for gathering categories and displaying them as options
  useEffect(() => {
    viewingCategory()
      .then(data => {
        if (data.error) {
          console.log(data.error)
        }
        else {
          setCategories(data)
          console.log(data)
          setProduct({formdata:new FormData})
        }
      })
      .catch(erronous => console.log(erronous))

  }, [])


  const handleChange=name=>event=>{
    let value = name==="product_image"?event.target.file[0]:event.target.value
    // what this means is that in case the product_image is passed in the handleChange function, upload the single file in the array hence the [0]th index. if that is not the case take the event.target.value approach like other onchange functions for a form
    setProduct({...product,[name]:value})
    // what this means is  that if the name is product_image, value is the file itself and for other keys, the value is event.target.value
    formdata.set(name,value)
  }

  const submitHandler = (event) => {
    event.preventDefault()
    
    addProducts(formdata)
      .then(data => {
        if (data.error) {
          console.log(data.error)
          setProduct({...product,error:data.error,success:false})
        }
        else {
          console.log("the work has been executed successfully")
          setProduct({success:true})
        }
      })
      .catch(erronous => console.log(erronous))
  }

  const showSuccess=()=>{
    if(success){
      return <div className='alert alert-success'>product has been added successfully</div>
    }
  }

  const showError=()=>{
    if(error){
      return <div className='alert alert-danger'>there seems to be some kind of error</div>
    }
  }


  return (
    <div>
      <Navbar />

      <div className='row'>
        <div className='col col-md-3'>
          <AdminSidebar />


        </div>
        <div className='col col-md-9 form-control w-50 d-flex flex-column mx-auto text-start'>
          <h3>this is For addition of products</h3>
          {
            showError()
          }
          {
            showSuccess()
          }


          <form className='md-1'>
            {/* <div> */}

            <label htmlFor="product_name ">Product Name  </label><br />
            <input type="text" className='m-2 form-control' id='product_name' onChange={handleChange("product_name")} value={product_name} />
            <br />
            {/* </div> */}


            {/* <div> */}

            <label htmlFor="product_price">Product Price  </label><br />
            <input type="number" className='m-2 form-control' id='product_price' onChange={handleChange("product_price")} value={product_price} /><br />


            {/* </div> */}


            {/* <div> */}

            <label htmlFor="product_description">Product Description  </label><br />
            {/* <input type="text" className='m-2' id='' /> */}

            <textarea id='product_description' rows={5} onChange={handleChange("product_description")} value={product_description} className="form-control" /><br />


            {/* </div> */}


            {/* <div> */}

            <label htmlFor="count_in_stock">Count in stock  </label>
            <input type="number" className='m-2' id='count_in_stock' onChange={handleChange("count_in_stock")} value={count_in_stock} /><br />


            {/* </div> */}


            {/* <div> */}

            <label htmlFor="product_image">Product image  </label>
            <input type="file" className='m-2' id='product_image' onChange={handleChange("product_image")} /><br />


            {/* </div> */}

            {/* <div> */}

            <label htmlFor="category">category </label>

            <select id='category' className='form-control' onChange={handleChange("category")}>
              {
                categories.map((element, i) => <option key={i} value={element._id}>{element.category_name}

                </option>)


              }



            </select>




            {/* </div> */}


          </form>









          <button className='btn btn-success mt-3' onClick={submitHandler}>Add Product</button>




        </div>


      </div>


      <Footer />


    </div>
  )
}

export default AddProduct