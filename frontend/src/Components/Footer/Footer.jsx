import React from 'react'
import './Footer.css'
import big_logo from '../../assets/logo_big.png'
import instagram_icon from '../../assets/instagram_icon.png'
import whatsapp_icon from '../../assets/whatsapp_icon.png'
import pintester_icon from '../../assets/pintester_icon.png'

const Footer = () => {
  return (
    <div className='footer' >
        <div className="fot-img">
            <img src={big_logo} alt="" />
            <h1>SHOPPER</h1>

        </div>
        <div className="fot-exp">
            <ul>
                <li>Company</li>
                <li>Products</li>
                <li>Offices</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </div>
        <div className="fot-icon">
            <img src={instagram_icon} alt="" />
            <img src={pintester_icon} alt="" />
            <img src={whatsapp_icon} alt="" />
        </div>
      <hr />

      <div className="fot-copy">
        <p>Copyright @ 2024- All Right Reserved</p>
      </div>

    </div>
  )
}

export default Footer
