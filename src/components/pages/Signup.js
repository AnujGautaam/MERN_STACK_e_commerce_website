import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { userRegistering } from '../../API/UserApi'

const Signup = () => {
  // all the usestates will be defined here 
  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")

  // for the display of error or success
  const [error,setError] = useState("")
  const [success,setSuccess] = useState("")



  // onsubmit function 
  const submitHandler = (event)=>{

    event.preventDefault()
    userRegistering(name,email,password)
    .then(data=>{
      if(data.error){
        setError("there is some error")
        setSuccess("")

      }
      else{
        setSuccess("the account has been created. Log in to the email to verify the account")
        setError("")
      }
      
    }
      
      
      
      )
    .catch(err=>console.log(err))
  }

  console.log(name,email,password)


  // for the youtube video
  // const submitHandler = (e)=>{
  //   e.preventDefault()
  //   if(name=="admin"){
  //     if(email=="admin@admin.com"){
  //       if(password=="admin123"){
  //         return <div className='alert alert-warning'>it is a successful login dear admin</div>
  //       }
  //     }
  //   }
  //   else{
  //     return <div className='alert alert-warning'>it is not a successful login try again with another login id</div>

  //   }
  // }
  console.log(name,email,password)

  // two more functions to play around with the error and success states 
  const showError=()=>{
    if(error){
      return <div className='btn btn-danger'>{error}</div>

    }
  }

  const showSuccess=()=>{
    if(success){
      return <div className='btn btn-success'>{success}</div>

    }
  }

  return (
    <>

    {showError()}
    {showSuccess()}
<main className="form-signin w-50 mx-auto p-5">
  <form>
    <img className="mb-4 w-80 h-250" src="https://reactjs.org/static/1e34460fee229cb3a8f4726957e38c2c/2233a/acdlite.jpg" alt="" width="72" height="57"/>
    <h1 className="h3 mb-3 fw-normal">Register</h1>

    <div className="form-floating mb-3">
      <input type="text" className="form-control" id="name" placeholder="enter the full name here" onChange={e=>setName(e.target.value)} value={name}/>
      <label for="name">Name</label>
    </div>

    <div className="form-floating mb-3">
      <input type="email" className="form-control" id="email" placeholder="enter the email address" onChange={e=>setEmail(e.target.value)} value={email}/>
      <label for="email">Email address</label>
    </div>
    <div className="form-floating">
      <input type="password" className="form-control" id="password" placeholder="Password" onChange={e=>setPassword(e.target.value)} value={password}/>
      <label for="password">Password</label>
    </div>

    <div className="checkbox mb-3">
      <label>
        <input type="checkbox" value="remember-me"/> Register
      </label>
    </div>
    <button className="w-100 btn btn-lg btn-primary" type="submit" onClick={submitHandler}>Sign Up</button>
    Already have an account? Go to the signin page <Link to="/signin">Click here to signin</Link>
  </form>
</main>






    </>
  )
}

export default Signup