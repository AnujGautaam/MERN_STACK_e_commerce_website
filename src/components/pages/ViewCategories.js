import React, { useEffect, useState } from 'react'
import { deleteCategory, viewingCategory } from '../../API/CategoryApi'
import Navbar from "../layout/Navbar"
import Footer from "../layout/Footer"
import AdminSidebar from './AdminSidebar'
import { Link } from 'react-router-dom'


const ViewCategories = () => {
    const [error,setError] = useState("")
    const [success,setSuccess] = useState("")


    // since the categories is being collected as an array, the useState is used for an array
    const [category,setCategory] = useState([])
 


    useEffect(()=>{

        viewingCategory()
        .then(data=>{
            if(data.error){
                // setError("there is something wrong here")
                // setSuccess("")
            }
            else{
                // setSuccess("everything went well")
                // setError("")
                setCategory(data)
                console.log(data)
            }
        })
    },[success])

// the purpose of adding success in the array is to ensure that after the deletion of the items, the page is re-rendered with the deleted items not in sight



const deleteHandler = (e,element_id)=>{
    e.preventDefault()
    deleteCategory(element_id)
    .then(data=>{
        if(data.error){
            setError(data.error)
            setSuccess("")
        }
        else{
            setSuccess(data.m)
            setError("")
        }
    })
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
  return (<>

<Navbar/>
{showSuccess()}
{showError()}

<div className='row'>
    <div className='col col-md-3'>
        <AdminSidebar/>

    </div>
    <div className='col col-md-9'>
    <div className='container'>





        
{/*  first let's try to display all the categories that we have */}

{/* {category.map(element=><ul><li>{element.category_name}</li></ul>)} */}
<header><h1 className='text-success'>Categories</h1></header>
<table className='table table-striped text-center '>
    <thead>
        <tr>
            <th>S.No</th>
            <th>Categories</th>
            <th>Action</th>

        </tr>
    </thead>

{category.map((element,i)=>



    <tbody className='text-center'>
        <tr>
            <td>{i+1}</td>
            <td>{element.category_name}</td>
            <td>
                <Link to={`/category/edit/${element._id}`}>
                <button className='btn btn-warning'>Update</button></Link>

                <button className='btn btn-danger' onClick={e=>deleteHandler(e,element._id)}>Delete</button>

            </td>



        </tr>
    </tbody>
)}

</table>




    </div>
    </div>

</div>



    <Footer/>
    </>
  )
}

export default ViewCategories