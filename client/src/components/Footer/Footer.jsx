import React from 'react'
import "./Footer.scss"
const Footer = () => {
  return (
    <div className='footer'>
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>
        <div className="item">
          <h1>Links</h1>
          <span>Track Order</span>
          <span>Returns</span>
          <span>Shipping</span>
          <span>FAQs</span>
        </div>
        <div className="item">
          <h1>About</h1>
          <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati libero modi alias dolorem similique eaque repellat sunt. Corporis rerum ratione cumque laudantium odit dignissimos at fugit harum distinctio, provident exercitationem.</span>
        </div>
        <div className="item">
          <h1>Contact</h1>
          <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus at, quia, nulla blanditiis nam esse non nihil sit aut a est modi eveniet ducimus commodi fugit aliquam, minima illum placeat.</span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <div className="logo">StoreTrends</div>
          <div className="copyright">© Copyright 2023. All right reserved </div>
        </div>
        <div className="right">
          <img src="/images/Frame 1.png" alt="payment" />
        </div>
      </div>
    </div>
  )
}

export default Footer
