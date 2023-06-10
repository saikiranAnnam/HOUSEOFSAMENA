import React from 'react'
import "./Product.scss"
import { useState } from 'react';
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";

const Product = () => {

  const [selectedImg, setSelectedImg] = useState(0);
  const [quantity, setQuantity] = useState(1);




  // load fake images 
  const images = [
    "https://images.pexels.com/photos/10026491/pexels-photo-10026491.png?auto=compress&cs=tinys rgb&w=1600&lazy_load",
    "https://images.pexels.com/photos/12179283/pexels-photo-12179283.jpeg?auto=compress&cs=tinys rgb&w=1600&lazy_load",
  ];
  
  return (
    <div className='product'>

      {/* product page is breakdown into 2 sectors - left, images */}
      <div className="left">
        <div className="images">
          <img src={images[0]} alt="" srcset="" onClick={e=>setSelectedImg(0)} />
          <img src={images[1]} alt="" srcset="" onClick={e=>setSelectedImg(1)} />
        </div>

        <div className="mainImg">
          <img src={images[selectedImg]} alt="" srcset="" />
        </div>
      </div>

      {/* right sector */}
      <div className="right">
          <h1>Title</h1>
          <span className='price'>$188</span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Neque delectus quos repellendus sed velit officia earum, magni eveniet at quas omnis autem aliquid natus expedita cumque modi voluptate, eius sit quo?
            Tempora, at quod maxime eligendi similique accusantium soluta quidem?
          </p>
          <div className="quantity">
            <button onClick={()=>setQuantity((prev)=>prev ===1 ? 1:prev-1)}>-</button>
            {quantity}
            <button onClick={()=>setQuantity(prev=>prev+1)}>+</button>
          </div>
          <button className='add'>
            <AddShoppingCartIcon/> ADD TO CART
          </button>


          <div className="links">
            <FavoriteBorderIcon/> Add to wishlist
          </div>

          <div className="item">
            <BalanceIcon/> Add to Compare
          </div>

          <div className="info">
            <span>Vendor: Polo</span>
            <span>Product Type: T-Shirt</span>
            <span>Tag: T-Shirt, Women, Top</span>
            <hr/>
          </div>
          <div className="details">
            <span>DESCRIPTION</span>
            <hr />
            <span>ADDITIONAL INFORMATION</span>
            <hr/>
            <span>FAQ</span>
          </div>

      </div>
    </div>
  )
}

export default Product