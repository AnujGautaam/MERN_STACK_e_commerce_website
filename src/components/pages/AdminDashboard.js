import React from 'react'
import Footer from '../layout/Footer'
import Navbar from '../layout/Navbar'
import AdminSidebar from './AdminSidebar'

const AdminDashboard = () => {
  return (
    <div>
      <Navbar/>

      <div className='row'>
        <div className='col col-md-3'>
        <AdminSidebar/>

          
        </div>
        <div className='col col-md-9'>
          <h3>welcome to this side of the admin sidebar</h3> 
         
        </div>

      </div>


      <Footer/>


    </div>
  )
}

export default AdminDashboard