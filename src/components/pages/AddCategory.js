import React, { useState } from 'react'
import { addCategory } from '../../API/CategoryApi'
import Footer from '../layout/Footer'
import Navbar from '../layout/Navbar'
import AdminSidebar from './AdminSidebar'

const AddCategory = () => {
    const [category, setCategory] = useState("")

// for success or error 
const [success,setSuccess] = useState("")
const [error,setError] = useState("")




    const submitHandler = (e)=>{
        e.preventDefault()
        addCategory(category)
        .then(data=>{
            if(data.error){
                
                setError(data.error)
                setSuccess("")

            }
            else{
                setSuccess("the category has been added")
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
      <Navbar/>

      {showError()}
      {showSuccess()}

      <div className='row'>
        <div className='col col-md-3'>
        <AdminSidebar/>

          
        </div>
        <div className='col col-md-9'>
          <h3>welcome to adding category</h3> 

          <form>
            
            <input className='form-control mx-auto w-50 mb-3' type={"text"} onChange={e=>setCategory(e.target.value)}/><span><button type='submit' className='btn btn-success mx-auto' onClick={submitHandler}>Add Category</button></span>
          </form>
         
        </div>

      </div>


      <Footer/>


    </div>
  )
}

export default AddCategory