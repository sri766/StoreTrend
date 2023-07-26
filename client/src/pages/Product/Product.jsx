import { useState } from 'react'
import React from 'react'
import './Product.scss'

//Icons
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BalanceIcon from '@mui/icons-material/Balance';

const Product = () => {

  const [selected, setSelected] = useState(0)
  const [quantity, setQuantity] = useState(1)

  const images =[
    "/images/product1.jpg",
    "/images/product2.jpg",
  ]
  return (
    <div className='product'>
      <div className='left'>
        <div className="images">
          <img className="image" src={images[0]} alt="" onClick={e=> setSelected(0)}/>
          <img className="image" src={images[1]} alt="" onClick={e=> setSelected(1)}/>
        </div>
        <div className="mainImg">
          <img src={images[selected]} alt="" />
        </div>
      </div>
      <div className="right">
        <h1>Title</h1>
        <span>$199</span>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet, unde! Cupiditate perferendis voluptas omnis? Quaerat, corporis eos? Modi dolores dolorum maxime, totam, molestias alias libero deleniti asperiores earum quam enim!
        </p>
        <div className='quantity'>
          <button className="qnt" onClick={()=> setQuantity(prev => prev === 1? 1 : prev - 1)}>-</button>
          <span>{quantity}</span>
          <button className="qnt" onClick={()=> setQuantity((prev) => prev + 1 )}>+</button>
          <button className='add'>
            <AddShoppingCartIcon/> 
            <span>ADD TO CART</span>
          </button>
          <div className="link">
            <button className='item'>
              <FavoriteBorderIcon/> ADD TO WISH LIST
            </button>
            <button className='item'>
              <BalanceIcon/> COMPARE 
            </button>
          </div>
        </div>
        <div className="info">
          <span>Vendor: Polo</span>
          <span>Product Type: T-shirt</span>
          <span>Tag: T-shirt</span>
          <hr/>
          <div className='info'>
            <span>DESCRIPTION</span>
            <hr />
            <span>ADDITIONAL INFO.</span>
            <hr />
            <span>FAQS</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product
