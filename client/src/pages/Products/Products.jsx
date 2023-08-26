import React, { useState } from 'react'
import './Products.scss'
import List from '../../components/List/List'
import { useParams } from 'react-router-dom'
import useFetch from '../../hooks/useFetch'

const Products = () => {

  const catId = parseInt(useParams().id);
  const [maxPrice, setMaxPrice] = useState(1000);
  const [sort, setSort] = useState(null);
  const [selectedSubCats, setSelectedSubCats] = useState([]); 

  const {data,loading,error} = useFetch(`/sub-categories?[filters][categories][id][$eq]=${catId}`)


  const handleChange = (e) => {
    const value = e.target.value;
    const isChecked = e.target.checked;

    setSelectedSubCats(
      isChecked
        ?[...selectedSubCats,value]
        :selectedSubCats.filter((item)=>item!==value));
  };

  // console.log(selectedSubCats);


  return (
    <div className='products'>
      <div className="left">
        <div className="filterItem">
          <h1>Product categoties</h1>
          {data?.map((item)=>(
          <div className="itemInput" key={item.id}>
            <input type="checkbox" id={item.id} value={item.id} onChange={handleChange}/>
            <label htmlFor={item.id}>{item.attributes.title}</label>
          </div>)
          )}
        </div>
        <div className="filterItem">
          <h1>Filter by Price</h1>
          <div className="itemInput">
            <span>0</span>
            <input type="range" min={0} max={10000} onChange={(e)=>setMaxPrice(e.target.value)}/>
            <span>{maxPrice}</span>
          </div>
        </div>
        <div className="filterItem">
          <h1>Sort by</h1>
          <div className="itemInput">
            <input type="radio" id="asc" value="asc" name='price' onChange={e=>setSort("asc")}/>
            <label htmlFor="asc">Price(Lowest First)</label>
          </div>
          <div className="itemInput">
            <input type="radio" id="desc" value="desc" name='price' onChange={e=>setSort("desc")}/>
            <label htmlFor="desc">Price(Highest First)</label>
          </div>
        </div>
      </div>
      <div className="right">
        <div className="productItem">
          <img className="front" src="/images/mainImg.svg" alt="" />
          <List catId={catId} maxPrice={maxPrice} sort={sort} subCats={selectedSubCats}/> 
        </div>
      </div>
    </div>
  )
}

export default Products
