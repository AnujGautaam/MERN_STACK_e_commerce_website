import React from "react";
import  "./Carousel.css"

const Carousel = ()=>{
    return(
    <>

<div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
  <div className="carousel-inner h-100">
    <div className="carousel-item active">
      <img src="https://wallpaperaccess.com/full/139787.jpg" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://m.media-amazon.com/images/I/41+2tWGDs3L._AC_SY679_.jpg"className="d-block w-100" alt="..." height={"500px"}/>
    </div>
    <div className="carousel-item">
      <img src="https://btplanet.com.np/storage/backend/assets/images/product/16273763224pmS-3501-1.jpg" className="d-block w-100" alt="..." height={"500px"}/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    
    
    
    
    
    </>
    
    
    )
}

export default Carousel 