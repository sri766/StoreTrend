import React from 'react';
import './Categories.scss';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Categories = () => (
  <div className="categories">
    <div className="col">
      <LazyLoadImage src="/images/categories1.jpg" alt="Shoes" width={250} height={250} />
      <Link to="/products/1" className="buttonLink">Shoes</Link>
    </div>
    <div className="col">
      <LazyLoadImage src="/images/categories2.jpg" alt="Watches" width={250} height={250} />
      <Link to="/products/2" className="buttonLink">Watches</Link>
    </div>
    <div className="col">
      <LazyLoadImage src="/images/categoriesa1.jpg" alt="Accessories" width={250} height={250} />
      <Link to="/products/4" className="buttonLink">Accessories</Link>
    </div>
    <div className="col">
      <LazyLoadImage src="/images/categories5.jpg" alt="Electronics" width={250} height={250} />
      <Link to="/products/7" className="buttonLink">Trending</Link>
    </div>
    <div className="col col-l">
      <LazyLoadImage className="image6" src="/images/fashion.jpg" alt="Mens" width={250} height={250} />
      <Link to="/products/6" className="buttonLink">Mens</Link>
    </div>
    <div className="col">
      <LazyLoadImage src="/images/categoriesa2.jpg" alt="Season" width={250} height={250} />
      <Link to="/products/5" className="buttonLink">Season</Link>
    </div>
    <div className="col row-l">
      <LazyLoadImage src="/images/categories3.jpg" alt="Women" width={250} height={250} />
      <Link to="/products/3" className="buttonLink">Women</Link>
    </div>
  </div>
);

export default Categories;
