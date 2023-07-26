import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import './Cart.scss'

const Cart = () => {
    const cartData = [
        {
            id: 1,
            title: "Sunglasses",
            img: "/images/1.jpg",
            desc: "computer glasses",
            oldprice: "Rs. 1000",
            newprice: "Rs. 500",
            isNew: true,
        },
        {
          id: 2,
          title: "Hoddie",
          img: "/images/2.jpg",
          desc: "hoodie ",
          oldprice: "Rs. 7999",
          newprice: "Rs. 5999",
          isNew: true,
        }
    ]
     
  return (
    <div className='cart'>
      <h1>Product in your cart</h1>
      {cartData?.map((item) => (
        <div className="item" key={item.id}> 
            <img src={item.img} alt={item.title} />
            <div className="details">
                <h1>{item.title}</h1>
                <p>{item.desc}</p>
                <div className='price'>1 x {item.newprice}</div>
            </div>
            <DeleteIcon className='delete'/>
        </div>
      ))}
      <div className="total">
        <span>SUBTOTAL</span>
        <span>Rs. 123</span>
      </div>
      <button>PROCEED TO CHECKOUT</button>
      <span className="reset">Reset</span>
    </div>
  )
}

export default Cart
