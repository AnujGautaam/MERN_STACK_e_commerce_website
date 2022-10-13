import React, { useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import { authenticate, isAuthenticated, signInUser } from '../../API/UserApi'
import Footer from '../layout/Footer'
import Navbar from '../layout/Navbar'
import "./Signin.css"

const Signin = () => {

  // states for taking in the values of email and password from the front end
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")

  // for extracting the data stored after signing in 

  const user = isAuthenticated()

 


  
  //for the display of error and success
  const [success,setSuccess] = useState(false) 
  const [error,setError] = useState("")





  // there has to be a function for handling the submission of the form 
  const submitHandler = (event)=>{
    event.preventDefault()
   

    signInUser(email,password)
    .then(data=>{
      if(data.error){
        setError(data.error)
      }
      else{
        setSuccess(true)
        authenticate(data)

       
      }
    })
    .catch(err=>console.log(err))

  }

  // functions to show success or erronous values 
  const showSuccess = ()=>{
    if(success){
      if(user && user.user_info.role===0){
             return <Navigate to='/'></Navigate>

      }
      if(user && user.user_info.role===1){
        return <Navigate to='/admin/dashboard'></Navigate>
      }
     
    }
  }

  const showError=()=>{
    if(error){
      return <div className='alert alert-danger'>{error}</div>
    }
  }
console.log(email,password)


  return (
    <>
    <Navbar/>

    {showSuccess()}
    {showError()}
        
<main className="form-signin w-50 mx-auto p-5">
  <form>
    <img className="mb-4 w-80 h-250" src="https://reactjs.org/static/1e34460fee229cb3a8f4726957e38c2c/2233a/acdlite.jpg" alt="" width="72" height="57"/>
    <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

    <div className="form-floating mb-3">
      <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" onChange={e=>setEmail(e.target.value)} value={email}/>
      <label for="floatingInput">Email address</label>
    </div>
    <div className="form-floating">
      <input type="password" className="form-control" id="floatingPassword" placeholder="Password" onChange={e=>setPassword(e.target.value)} value={password}/>
      <label for="floatingPassword">Password</label>
    </div>

    <div className="checkbox mb-3">
      <label>
        <input type="checkbox" value="remember-me"/> Remember me
      </label>
    </div>
    <button className="w-100 btn btn-lg btn-primary" type="submit" onClick={submitHandler}>Sign in</button>
    Don't have an account? <Link to="/signup">Click here to signup</Link>
  </form>
</main>


<Footer/>






    </>
  )
}

export default Signin