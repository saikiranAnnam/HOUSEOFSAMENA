import React from 'react'
import { useParams } from 'react-router-dom'
import List from '../../Components/List/List'
import { useState } from 'react'
import "./Products.scss"
import Contact from "../../Components/Contact/Contact"

const Products = () => {

  const catId = parseInt(useParams().id)
  const [maxPrice,setMaxPrice] = useState(1000)
  const [sort,setSort] = useState(null)
  return (
    <div className='products'>

      {/* product page is breakdown into 2 sectors -left and right */}
        <div className="left">
          {/* left break down into 3 parts */}

          {/* filter items by product categories */}
          <div className="filterItem">
            <h2>Product Categories</h2>
            <div className="inputItem">
              <input type="checkbox" id="1" value ={1} className="checkbox"/>
              <label htmlFor="1">Women</label>
            </div>
            <div className="inputItem">
              <input type="checkbox" id="2" value ={1} className="checkbox"/>
              <label htmlFor="2">Men</label>
            </div>
            <div className="inputItem">
              <input type="checkbox" id="3" value ={1} className="checkbox"/>
              <label htmlFor="3">Children</label>
            </div>
          </div>

          {/* filter product items by price */}
          <div className="filterItem">
            <h2>Filter by price</h2>
            <div className="inputItem">
              <span>0</span>
              <input type="range" name="" id="" min={0} max={1000} onChange={(e) => setMaxPrice(e.target.value)} />
              <span>{maxPrice}</span>
            </div>
          </div>

          {/* sort items based on lowest to highest price */}
          <div className="filterItem">
            <h2>Sort Item</h2>
            <div className="inputItem">
              <input type="radio" name="price" id="asc" value="asc" onChange={(e) =>setSort("asc")} />
              <label htmlFor="asc">Price (lowest first)</label>
            </div>
            <div className="inputItem">
              <input type="radio" name="price" id="desc" value="desc" onChange={(e)=> setSort("desc")} />
              <label htmlFor="desc">Price (Highest first)</label>
            </div>

          </div>
        </div>

        {/* product page right side sector */}
        <div className="right">
        <img
          className="catImg"
          src="https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt=""
        />
        <List catId={catId} maxPrice={maxPrice} sort={sort}/>
      </div>
        
        
    </div>
  )
}

export default Products