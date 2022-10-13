import React from "react";
import { Link } from "react-router-dom";

const Footer = ()=>{
    return (<>
    
    <div className="container-fluid">
  <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
    <p className="col-md-4 mb-0 text-muted">&copy; 2022 Company, Inc</p>

    <Link to="/" className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
    </Link>

    <ul className="nav col-md-4 justify-content-end">
      <li className="nav-item"><Link to="#" className="nav-link px-2 text-muted"><i className="bi bi-github"></i></Link></li>
      <li className="nav-item"><Link to="#" className="nav-link px-2 text-muted"><i className="bi bi-instagram"></i></Link></li>
      <li className="nav-item"><Link to="#" className="nav-link px-2 text-muted"><i className="bi bi-linkedin"></i></Link></li>
     
    </ul>
  </footer>
</div>
    
    
    
    </>

    )
}

export default Footer