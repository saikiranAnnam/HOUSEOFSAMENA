import React from 'react'
import "./Footer.scss";
const Footer = () => {
  return (
    <div>
      <div className="footer">
        
        {/* footer has 2 subcomponets - top, bottom */}
        {/* footer top componet */}
        <div className="top">
          
          {/* footer-top-left */}
          <div className="item">
            <h1>Categories</h1>
            <span>Women</span>
            <span>Men</span>
            <span>Children</span>
            <span>Shoes</span>
            <span>Accessories</span>
            <span>New Arrivals</span>
          </div>

          {/* footer-top-center */}
          <div className="item">
            <h1>Links</h1>
            <span>FAQ</span>
            <span>Pages</span>
            <span>Stores</span>
            <span>Compare</span>
            <span>Cookies</span>
          </div>

          {/* footer-top-right - About */}
          <div className="item">
            <h1>About</h1>
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae fugiat dignissimos iusto voluptas illum exercitationem debitis aspernatur hic beatae ab, 
              ipsum tempora, eligendi, voluptate fugit consequuntur aliquam optio quisquam illo.
            </span>
          </div>


          <div className="item">
          <h1>Contact</h1>
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae fugiat dignissimos iusto voluptas illum exercitationem debitis aspernatur hic beatae ab, 
              ipsum tempora, eligendi, voluptate fugit consequuntur aliquam optio quisquam illo.
            </span>
          </div>
      
          


        </div>


        {/* footer bottom componet */}
        <div className="bottom">


          {/* bottom left component */}
          <div className="left">
            <span className="logo">HOUSE OF SAMENA</span>
            <span className='copright'>
              ®Copyright 2023. All Rights Reserved
            </span>
          </div>

          {/* bottom right component */}
          <div className="right">
            <img src="/img/payment.png" alt="payments Available" srcset="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer