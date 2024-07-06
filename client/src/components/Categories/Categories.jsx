import React from 'react'
import "./Categories.scss"
import { Link } from 'react-router-dom'
import { LazyLoadImage } from "react-lazy-load-image-component";

const Categories = () => {

  return (
    <div className='categories'>
      <div className="col">
        <div className="row">
          <LazyLoadImage src="/images/categories1.jpg" alt="image1" />
          <button>
            <Link to="/products/1" className="buttonLink" style={{ textDecoration: 'none'}}>Shoes</Link>
          </button>
        </div>
        <div className="row">
          <LazyLoadImage src="/images/categories2.jpg" alt="image2" />
          <button>
            <Link to="/products/2" className="buttonLink" style={{ textDecoration: 'none'}}>Watches</Link>
          </button>
        </div>
      </div>
      <div className="col">
        <div className="row">
          <LazyLoadImage src="/images/categories3.jpg" alt="" />
          <button>
            <Link to="/products/3" className="buttonLink" style={{ textDecoration: 'none'}}>Women</Link>
          </button>
        </div>
      </div>
      <div className="col-l">
        <div className="row">
            <div className="col">
                <div className="row">
                  <LazyLoadImage src="/images/categoriesa1.jpg" alt="" />
                  <button>
                    <Link to="/products/4" className="buttonLink" style={{ textDecoration: 'none'}}>Acessories</Link>
                  </button>
                </div>
            </div>
            <div className="col">
                <div className="row">
                  <LazyLoadImage src="/images/categoriesa2.jpg" alt="" />
                  <button>
                    <Link to="/products/5" className="buttonLink" style={{ textDecoration: 'none'}}>Season</Link>
                  </button>
                </div>
            </div>
        </div>
        <div className="row">
          <LazyLoadImage className="image6" src="/images/fashion.jpg" alt="" />
          <button>
            <Link to="/products/6" className="buttonLink" style={{ textDecoration: 'none'}}>Mens</Link>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Categories
