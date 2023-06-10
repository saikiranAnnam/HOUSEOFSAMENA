import React from 'react'
import { useState } from 'react';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

import { Link } from 'react-router-dom';

import Cart from '../Cart/Cart';

import "./Navbar.scss";



const Navbar = () => {

  // state hook for the cart to open or close
  const [open,setOpen] = useState(false);


  return (
    <div>
      {/* navbar */}
      <div className="navbar">
        {/* navbar componets are wrapperd into a wrapper container */}
        <div className="wrapper">

          {/* navbar left component */}
          <div className="left">  
            {/* navbar left subets item */}
            <div className="item">
              <img src="/img/en.png" alt="american flag" srcset="" />
              <KeyboardArrowDownOutlinedIcon/>
            </div>
            <div className="item">
              <span>USD</span>
              <KeyboardArrowDownOutlinedIcon/>
            </div>
            <div className="item">
              <Link className="link" to="/products/1">Women</Link>
            </div>
            <div className="item">
              <Link className="link" to="/products/2">Men</Link>
            </div>
            <div className="item">
              <Link className="link" to="/products/3">Children</Link>
            </div>
          </div>
          
          {/* navbar center componet */}
          <div className="center">
            <Link className="link" to="/">HOUSE OF SAMENA</Link>
          </div>


          {/* navbar right componet */}
          <div className="right">

            {/* not created this pages , just for the UI purpose */}
            <div className="item">
              <Link className="link" to="/">HomePage</Link>
            </div>

            <div className="item">
              <Link className="link" to="/">About</Link>
            </div>

            <div className="item">
              <Link className="link" to="/">Contact</Link>
            </div>

            <div className="item">
              <Link className="link" to="/">Stores</Link>
            </div>


            {/* right most icons */}
            <div className="icons">
              <SearchOutlinedIcon/>
              <PersonOutlineOutlinedIcon/>
              <FavoriteBorderOutlinedIcon/>

              {/* number of items added to the cart */}
              <div className="cartIcon" onClick={()=>setOpen(!open)}>
                <ShoppingCartOutlinedIcon/>
                <span>0</span>
              </div>

            </div>


          </div>
        </div>
      </div>
      {open && <Cart/>}
    </div>
  );
}

export default Navbar