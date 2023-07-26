import React from 'react'
import './Card.scss'
import { Link } from 'react-router-dom'

const Card = ({item}) => {


  return (
    <Link className='Link' to={`/product/${item.id}`}>
      <div className="Card">
        <div className="img">
          {item?.attributes.isNew && <span className='new'>New Season</span>}
          <img src={process.env.REACT_APP_UPLOAD_URL + item?.attributes?.img?.data?.attributes?.url} alt='FeaturedImg' />
        </div>
        <h2>{item?.attributes.title}</h2>
        <div className="prices">
          <h3>Rs {item.oldPrice || item?.attributes.price+20}</h3>
          <h3>{item.attributes.price}</h3>
        </div>
      </div>
    </Link>
    
  )
}

export default Card
