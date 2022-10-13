import React from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { isAuthenticated, logOut } from "../../API/UserApi";


const Navbar = ()=>{
  const user = isAuthenticated()
  const navigate = useNavigate()




  const submitHandler = ()=>{

logOut()
.then(data=>{
  console.log(data.after_deleting_cookie)
  navigate("/")
})


}

    return <>
    <div className="row bg-dark">
    <div className="col-md-6 d-flex justify-content-center align-items-center">
        
    <Link className="navbar-brand text-light fs-4" to="#">Shopoholic</Link>
        
        
         </div>

    <div className="col-md-3 p-3">
    <form className="container  d-flex justify-content-start" role="search">
        <input className="form-control me-2 bg-warning align-items-center p-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success text-light bg-primary align-items-center p-2" type="submit">Search</button>
      </form>
    </div>
    <div className="col-md-3 text-light d-flex justify-content-evenly text-decoration-none mb-2" >
      {
        (!user)?<>
        <h4 className="p-3">guest</h4>
        
        </>:
        <h4 className="p-3">{user.user_info.name}</h4>
        

      }

    

        {/* <Link className="text-white p-3 fs-4" to="/signin">
        <i class="bi bi-box-arrow-in-right"></i></Link> */}



        {
          !user && 
          <>
          <Link className="text-white p-3 fs-4" to="/signin">
        <i class="bi bi-person-plus"></i></Link>
          
          
          
          </>
        }

{

(!user) || (user && (user.user_info.role===0)) &&
<>
<Link className=" text-white p-3 fs-4" to="#"><i class="bi bi-cart"></i></Link>

</>
}





{

          user && (user.user_info.role===0) &&
          <>
          {/* <Link  className=" text-white p-3 fs-4" to="#"><i class="bi bi-box-arrow-right"></i></Link>
          <Link className=" text-white p-3 fs-4" to="#"><i class="bi bi-cart"></i></Link> */}
            {/* <Link className=" text-white p-3 fs-4" to="/"><i class="bi bi-box-arrow-right"></i></Link> */}



          <Link className="text-white p-3 fs-4" to="#"><i class="bi bi-person-circle"></i></Link>
          </>
        }


        {

          user && (user.user_info.role===1)&&
          <>
          <Link className="text-white p-3 fs-4" to="/admin/dashboard"><i class="bi bi-speedometer"></i></Link>

          {/* <Link  className=" text-white p-3 fs-4" to="#"><i class="bi bi-box-arrow-right"></i></Link> */}

          </>
        }

{
  user&&
 

<i class="bi bi-box-arrow-right text-white p-3 fs-4" onClick={submitHandler}></i>


  
  
  
}

        
        


        



    </div>



    </div>

    <nav className="navbar navbar-expand-lg bg-secondary">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="#">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="#">Link</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="#">Products</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="#">Blog</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="#">Contact</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="#">Services</Link>
        </li>
        
        
      </ul>
      
    </div>
  </div>
</nav>
    
    
    
    
    </>

}

export default Navbar