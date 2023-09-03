import React from 'react'
//styles
import './Home.scss'
//components
import Slider from '../../components/Slider/Slider'
import Featured from '../../components/Featured/Featured'
import Categories from '../../components/Categories/Categories'
import Contact from '../../components/Contact/Contact'
const Home = () => {
  return (
    <>
      <div className="home">
        <Slider />
        <Featured type="featured"/>
        <Categories />
        <Featured type="Trending"/>
        <Contact />
      </div>
    </>
  )
}

export default Home
