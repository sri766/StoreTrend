import React from 'react'
import './Contact.scss'
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

const Contact = () => {
  return (
    <div className='contact'>
      <div className="wrapper">
        <span>BE IN TOUCH WITH US:</span>
        <div className='mail'>
            <input type="text" placeholder='Enter your Email'/>
            <button>JOIN US</button>
        </div>
        <div className="icons">
            <InstagramIcon />
            <TwitterIcon />
            <LinkedInIcon />
        </div>
      </div>
    </div>
  )
}

export default Contact
