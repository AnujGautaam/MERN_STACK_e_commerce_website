import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { findCategory, updateCategory } from '../../API/CategoryApi'
import Footer from '../layout/Footer'
import Navbar from '../layout/Navbar'
import AdminSidebar from './AdminSidebar'

const EditCategory = () => {

const params = useParams()
const element_id = params.element_id


const [old,setOld] = useState("")
const [newer , setNewer] = useState("")


// setting up states for error and success 
const [error,setError] = useState("")
const [success,setSuccess] = useState("")

useEffect(()=>{
  findCategory(element_id)
  .then(data=>{
      if(data.error){
          console.log(data.error)
      }
      else{
          console.log(data)
          setOld(data)
      }
  })

},[])


// for fetching the category update function 
const submitHandler = (event) =>{
event.preventDefault()

updateCategory(element_id,newer)
.then(data=>{
  if(data.error){
    setError("could not update the name")
    setSuccess("")
  }
  else{
    setSuccess("the category has been updated successfully")
    setError("")
    console.log(data)
  }
})
.catch(err=>console.log(err))
} 

const showSuccess = ()=>{
  if(success){
    return <div className='alert alert-success'>{success}</div>
  }
  
}

const showError = ()=>{
  if(error){
    return <div className='alert alert-danger'>{error}</div>
  }
  
}






  return (

    <div>

      {showSuccess()}
      {showError()}
      <Navbar/>

      <div className='row'>
        <div className='col col-md-3'>
        <AdminSidebar/>

          
        </div>
        <div className='col col-md-9'>
          <h3>This is for editing the category</h3> 

          <div className='form-control mt-5 w-50 mx-auto'>

            <div className='mt-3 mb-3'>

                <label htmlFor='old_category' className='p-2'>Old Category</label>
            <input type={"text"} readOnly className='shadow-lg disabled' value={old.category_name}/><br/>
            </div>


            <div className='mt-3 mb-3'>

<label htmlFor='new_category' className='p-2'>New Category</label>
            <input type={"text"} className='shadow-lg' onChange={e=>setNewer(e.target.value)}/> 

            </div>

            

            <button className='btn btn-success' onClick={submitHandler}>Update Category</button>
          </div>
         
        </div>

      </div>


      <Footer/>


    </div>
  )
}

export default EditCategory