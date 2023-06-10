import React from 'react'
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import './Cart.scss'
const Cart = () => {

    const data = [
        {
            id: 1,
            img: "https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinys rgb&w=1600",
            img2: "https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinys rgb&w=1600",
            title: "Long Sleeve Graphic T-shirt",
            desc : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, libero excepturi nesciunt animi veniam ipsam earum assumenda corrupti provident perspiciatis, repudiandae eum incidunt dicta cum ex mollitia eos consectetur quasi aperiam natus, et dolorum culpa praesentium quas. Culpa, et consequuntur?",
            isNew:true,
            oldPrice: 19,
            price: 12,
        },
        {
                id: 2,
                img: "https://images.pexels.com/photos/1759622/pexels-photo-1759622.jpeg?auto=compress&cs=tinysrgb&w=1600",
                title: "Coat",
                desc : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, libero excepturi nesciunt animi veniam ipsam earum assumenda corrupti provident perspiciatis, repudiandae eum incidunt dicta cum ex mollitia eos consectetur quasi aperiam natus, et dolorum culpa praesentium quas. Culpa, et consequuntur?",
                isNew:true,
                oldPrice: 19,
                price: 12,
        },
        
    ]

  return (
    <div className='cart'>
      <h1>Products in your cart</h1>
      {
        data?.map(item =>(
            <div className="item" key={item.id}>
                <img src={item.img} alt="product" />
                <div className="details">
                    <h1>{item.title}</h1>
                    <p>{item.desc.substring(0,100)}</p>
                    <div className="price">1  x ${item.price}</div>
                </div>
                <DeleteOutlinedIcon className='delete'/>
            </div>
        ))}

        {/* total price */}
        <div className='total'>
            <span>SubTotal</span>
            <span>$123</span>
        </div>
        <button>PROCEED TO CHECKOUT </button>
        <span className="reset">Reset Cart</span>
    </div>
  )
}

export default Cart
