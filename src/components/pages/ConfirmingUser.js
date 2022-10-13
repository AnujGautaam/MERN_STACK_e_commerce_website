import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { confirmation, confirmationUser } from '../../API/UserApi'
import Footer from '../layout/Footer'
import Navbar from '../layout/Navbar'

const ConfirmingUser = () => {

// for attaining vlaues from the url
const params = useParams() 
const token = params.token
console.log(params)
// for showing error or success
const [error,setError] = useState("")
const [ success,setSuccess] = useState("")


const submitHandler  = ()=>{
    confirmationUser(token)
    .then(data=>{
        if(data.error){
            setError(data.error)
            setSuccess("")


        }
        else{
            setSuccess(data.message)
            setError("")
            

        }
    })
    .catch(err=>console.log(err))

}

// the rule is that in the case of signin, the parameters off of the api is to be loaded right after clicking on the submit button of the form. whereas in this case, it ought to be called right after loading of the screen and that means the use of useEffect in this one

// useEffect(()=>{
//     // confirmation(token)
//     confirmationUser(token)
//     .then(data=>{
//         if(data.error){
//             setError(data.error)


//         }
//         else{
//             setSuccess(data.message)
            

//         }
//     })
//     .catch(err=>console.log(err))



// },[params])

const showError=()=>{
    if(error){
        return<>
        <div className='alert alert-danger'>{error}</div>
        </> 

    }
}


const showSuccess=()=>{
    if(success){
        return<>
        
        <div className='alert alert-success'>{success}</div>
        <h1>HEY HEY HEY this is a success you see</h1>
        </> 

    }
    
}



  return (
    <div>
        <Navbar/>

        {showError()}
        {showSuccess()}

        <button className='btn btn-warning' onClick={submitHandler}>Click here ensure the verification of the user</button>

        <Footer/>
        
        
        </div>
  )
}

export default ConfirmingUser