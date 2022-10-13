import userEvent from '@testing-library/user-event'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { isAuthenticated, logOut } from '../../API/UserApi'

const AdminSidebar = () => {
    const user = isAuthenticated()
    const navigate = useNavigate()
    
    const submitHandler = ()=>{

        logOut()
        .then(data=>{
          console.log(data.message)
          navigate("/")
        })
    }



  return (
    <>


        <h1>this is supposed to be the admin sidebar</h1>

        <div className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark mx-auto" style={{"width": "280px;"}}>
    <Link to="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
      <span className="fs-4">Dashboard</span>
    </Link>
    <hr/>
    <ul className="nav nav-pills flex-column mb-auto">
      <li className="nav-item">
        <Link to="/" className="nav-link active" aria-current="page">
          Home
        </Link>
      </li>
      <li>
        <Link to="/viewcategories" className="nav-link text-white">
          View Categories
        </Link>
      </li>
      <li>
        <Link to="/addcategory" className="nav-link text-white">
          Add Categories
        </Link>
      </li>
      <li>
        <Link to="/admin/products" className="nav-link text-white">
          View Products
        </Link>
      </li>
      <li>
        <Link to="/admin/addproduct" className="nav-link text-white">
          Add Products
        </Link>
      </li>

      <li>
        <Link to="#" className="nav-link text-white">
          Users
        </Link>
      </li>
    </ul>
    <hr/>
    <div className="dropdown">
      <Link to="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
        <img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2"/>
        <strong>mdo</strong>
      </Link>
      <ul className="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
        <li><Link className="dropdown-item" to="#">{user.user_info.email}</Link></li>
        <li><Link className="dropdown-item" to="#">{user.user_info.name}</Link></li>
        <li><hr className="dropdown-divider"/></li>
        <li><Link className="dropdown-item" to="#" onClick={submitHandler}>Sign out</Link></li>
      </ul>
    </div>
  </div>
  





    </>
  )
}

export default AdminSidebar