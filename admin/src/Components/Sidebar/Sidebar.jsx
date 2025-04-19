import React from 'react'
import './Sidebar.css'
import {Link} from 'react-router-dom'
import Product_Cart from '../../assets/Product_Cart.svg'
import Product_list_icon from '../../assets/Product_list_icon.svg'


const Sidebar = () => {
  return (
    <div className='sidebar' >
      <Link to={'/addproduct'} style={{textDecoration:"none"}} > 
      <div className="sidebar-items">
        <img src={Product_Cart} alt="" />
        <p>Add product</p>
              </div>
      </Link> <Link to={'/listproduct'} style={{textDecoration:"none"}} > 
      <div className="sidebar-items">
        <img src={Product_list_icon} alt="" />
        <p>Product list</p>
              </div>
      </Link>
    </div>
  )
}
import './Sidebar.css'
export default Sidebar
