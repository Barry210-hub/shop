import React from 'react'
import './Newsletter.css'
const NewsLetter = () => {
  return (
    <div className='newsletter' >
        <h1>Get Exclusive Offers On your email</h1>
        <p>Subscribe to our newletter and stay updated</p>

        <div className="news-search">
            <input type="text" placeholder='Your Email Id' />
            <button>Subscribe</button>
        </div>
      
    </div>
  )
}

export default NewsLetter
