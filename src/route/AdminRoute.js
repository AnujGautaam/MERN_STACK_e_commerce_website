import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { isAuthenticated } from '../API/UserApi'

const AdminRoute = () => {
    const user = isAuthenticated()
    const navigate = useNavigate()
  return (
  <>

  {
    (user&& user.user_info.role===1)?<Outlet/>:navigate("/signin")
  }
        
        




    </>
  )
}

export default AdminRoute