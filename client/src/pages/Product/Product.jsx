import { useState } from 'react'
import React from 'react'
import './Product.scss'

//Icons
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BalanceIcon from '@mui/icons-material/Balance';

//hooks
import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cartReducer';

const Product = () => {
  const params = useParams().id;
  const [selected, setSelected] = useState("img")
  const [quantity, setQuantity] = useState(1)
  const dispatch = useDispatch();

  const {data,loading,error} = useFetch(`/products/${params}?populate=*`)
  
  
  // console.log(data);


  return (
    <div className='product'>
      {loading ? 
      (
        "Loading..."
      ) :(
        <>
          <div className='left'>
        <div className="images">
          <img 
          className="image" 
          src={
            process.env.REACT_APP_UPLOAD_URL + 
            data?.attributes.img.data.attributes.url
          }
             alt="image1" onClick={e=> setSelected("img")}/>
          <img 
          className="image" 
          src={
            process.env.REACT_APP_UPLOAD_URL +
            data?.attributes.img2.data.attributes.url
          } 
            alt="image2" onClick={e=> setSelected("img2")}/>
        </div>
        <div className="mainImg">
          <img src={process.env.REACT_APP_UPLOAD_URL +
            data?.attributes[selected].data?.attributes?.url} alt="mainImg" />
        </div>
      </div>
      <div className="right">
        <h1>{data?.attributes?.title}</h1>
        <span>{data?.attributes?.price}</span>
        <p>
          {data?.attributes?.desc}
        </p>
        <div className='quantity'>
          <button className="qnt" onClick={()=> setQuantity(prev => prev === 1? 1 : prev - 1)}>-</button>
          <span>{quantity}</span>
          <button className="qnt" onClick={()=> setQuantity((prev) => prev + 1 )}>+</button>
          <button className='add' onClick={()=> dispatch(addToCart({
            id: data?.id,
            title: data?.attributes?.title,
            img: data?.attributes?.img.data.attributes.url,
            desc: data?.attributes?.desc,
            newprice: data?.attributes?.price,
            quantity
          }))}>
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
        </>
      )}
    </div>
  )
}

export default Product
