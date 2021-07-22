import React from 'react'
import Logo1 from '../images/logo1.png'

function TopNav({cartLen}) {
           
    
    return (
        <>
            <nav>
        <div className="logo">
          <img src={Logo1} alt="" />
          <h5>Mystic<span>कला</span></h5>
        </div>
        <div className="links">
          <a href="/">Home</a>
          <a href="/c/:id">Shop Now</a>
          <a href="product.html">About</a>
          <a href="/signup">Register</a>
          <a href="/cart"><span id="cart"> <i className="ri-handbag-line"></i>{cartLen} </span></a>
        </div>
      </nav>        
        </>
    )
}

export default TopNav
