import React, { useRef, useState } from 'react'
import logo from '../../assets/logo.png'
import cart_icon from '../../assets/cart_icon.png'
import nav_dropdown from "../../assets/nav_dropdown.png"

import "./Navbar.css"
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { ShopContext } from '../../Context/ShopContext'

const Navbar = () => {


    const { GetTotalCartItems } = useContext(ShopContext);
    const [menu, setMenu] = useState("shop")
    const menuRef = useRef();

    const dropdown_toggle = (e) => {
        menuRef.current.classList.toggle('nav-menu-visible');
        e.target.classList.toggle('open')
    }

    return (

        <div className=' nav h-20 flex items-center justify-around ' >
            <div className='logo-navbar flex items-center justify-center'>

                <img src={logo} alt="" />
                <h2 className='hello' >SHOPPER</h2>
            </div>

            <div>
                <div className='level'>
                    <img src={nav_dropdown} className='nav-dropdown' onClick={dropdown_toggle} alt="" />

                    <ul ref={menuRef} className=' navbar-main flex items-center justify-center gap-11 text-x cursor-pointer ' >
                        <li onClick={() => setMenu("shop")} > <Link to='/' >Shop</Link>  {menu === 'shop' ? <hr className='bg-orange-400 h-1 mt-2 ' /> : <></>}   </li>
                        <li onClick={() => setMenu("men")} > <Link to='/mens'>Men</Link> {menu === 'men' ? <hr className='bg-orange-400 h-1 mt-2' /> : <></>} </li>
                        <li onClick={() => setMenu("womens")} > <Link to='/womens'>Women</Link> {menu === 'womens' ? <hr className='bg-orange-400 h-1 mt-2 ' /> : <></>} </li>
                        <li onClick={() => setMenu("kids")} ><Link to='kids'>Kids</Link>{menu === 'kids' ? <hr className='bg-orange-400 h-1 mt-2 ' /> : <></>} </li>
                    </ul>
                </div>
            </div>

            <div className='flex items-center justify-center gap-5'>
                {localStorage.getItem('auth-token') ? <button  style={{ paddingTop: "0.5vw", paddingBottom: "0.5vw", border: "1px solid black" }} className='levelonw  border-black border-solid border-spacing-1 rounded-2xl px-7 hover:bg-gray-100'  onClick={() => { localStorage.removeItem('auth-token'); window.location.replace('/') }} >Logout</button> :
                 <Link to='/login'> <button style={{ paddingTop: "0.5vw", paddingBottom: "0.5vw", border: "1px solid black" }} className='levelonw  border-black border-solid border-spacing-1 rounded-2xl px-7 hover:bg-gray-100' >Login</button></Link> }


               
                <div  >

                    <Link to='/cart'>  <  img src={cart_icon} alt="" className='leveltwo' /></Link>
                    <div className='count' > {GetTotalCartItems()}</div>
                </div>
            </div>


        </div>


    )
}

export default Navbar
