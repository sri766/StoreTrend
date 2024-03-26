import React from 'react'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useState } from 'react'
import "./Slider.scss"
import { Typewriter } from "react-simple-typewriter";
const Slider = () => {


  const [currSlide, setCurrSlide] = useState(0);

  const prevSlide = () => {
    setCurrSlide(currSlide === 0 ? 4 : (prev) => prev - 1);
  }

  const nextSlide = () => {
    setCurrSlide(currSlide === 4 ? 0 : (prev) => prev + 1);
  }
  return (
    <div className='slider'>
      <div className="type">
        <Typewriter 
            words={['BE THE FASHION ICON','STYLE IS FOREVER',"Don't Be Into Trends. Make Your Own","Make Them Take A Second Glance","Feel Confident In The Clothes You Wear"]}
            loop={5}
            cursor
            cursorStyle ="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
      </div>
      <div className="container" style={{transform:`translateX(-${currSlide * 100}vw)` }}>
        <img src="/images/sliderImg3.png" alt="image3"/>
        <img src="/images/sliderImg1.png" alt="image1" />
        <img src="/images/sliderImg4.png" alt="image4" />
        <img src="/images/sliderImg5.png" alt="image5" />
        <img src="/images/sliderImg6.png" alt="image6"/>
      </div>
      <div className="icons">
        <div className="icon" onClick={prevSlide}>
          <ArrowBackIosNewIcon />
        </div>
        <div className="icon" onClick={nextSlide}>
          <ArrowForwardIosIcon />
        </div>
      </div>
    </div>
  )
}

export default Slider
