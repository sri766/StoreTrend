import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import './Cart.scss'
import { useSelector } from 'react-redux';
import { removeItem, resetCart } from '../../redux/cartReducer';
import { useDispatch } from 'react-redux';


const Cart = () => {

    const products = useSelector((state) => state.cart.products);
    const dispatch = useDispatch();


    const totalPrice = () =>{
      let total = 0;
      products.forEach((item) => (total += item.newprice * item.quantity));
      return total.toFixed(2);
    }
  return (
    <div className='cart'>
      <h1>Product in your cart</h1>
      {products?.map((item) => (
        <div className="item" key={item.id}> 
            <img src={process.env.REACT_APP_UPLOAD_URL + item?.img} alt={item.title} />
            <div className="details">
                <h1>{item.title}</h1>
                <p>{item.desc}</p>
                <div className='price'>{item.quantity} x {item.newprice}</div>
            </div>
            <DeleteIcon className='delete' onClick={()=>dispatch(removeItem(item.id))}/>
        </div>
      ))}
      <div className="total"> 
        <span>SUBTOTAL</span>
        <span>Rs.{totalPrice()}</span>
      </div>
      <button>PROCEED TO CHECKOUT</button>
      <span className="reset" onClick={()=>dispatch(resetCart())}>Reset</span>
    </div>
  )
}

export default Cart
