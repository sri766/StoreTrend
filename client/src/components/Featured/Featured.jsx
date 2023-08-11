import React from 'react'
import './Featured.scss'
import Card from '../Card/Card'
import useFetch from '../../hooks/useFetch'


const Featured = ({ type }) => {

  const {data,loading,error} = useFetch(`/products?populate=*`);
  
  return (
    <div className='featuredProducts'>
      <div className="top">
        <h1>{type} Products</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum distinctio voluptatem minima perferendis. Eos assumenda nulla reiciendis eum porro nemo. Unde aut amet consequuntur sapiente aliquid inventore obcaecati voluptatibus cum.</p>
      </div>
      <div className="bottom">
        {error?
        "Something went wrong":
        (loading
          ?"loading"
          :data?.map((item) => (
            <Card item={item} key={item.id} />
          ))
        )}
      </div>
    </div>
  )
}

export default Featured
