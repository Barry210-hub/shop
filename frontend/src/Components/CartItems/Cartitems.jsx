import React, { useContext } from 'react'
import "./Cartitems.css"
import cart_cross_icon from "../../assets/cart_cross_icon.png"

import { ShopContext } from '../../Context/ShopContext'

const Cartitems = () => {
  const { all_product, cartItems, removeToCart, GetTotalCartAmount } = useContext(ShopContext)

  return (
    <div className='ct' >
      <div className="ct-format">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr /> 
      {all_product.map((e) => {
        if (cartItems[e.id] > 0) {
          return <div key={e.id}>
            <div className="ct-format-main ct-format">
              <img  src={e.image} alt="" className='ct-f-img' />
              <p>{e.name}</p>
              <p>${e.new_price}</p>
              <button className='ct-quantity' >{cartItems[e.id]}</button>
              <p>${e.new_price * cartItems[e.id]}</p>
              <img className='img-cross'  src={cart_cross_icon} onClick={() => { removeToCart(e.id) }} alt="" />
            </div>
            <hr />
          </div>
        }
        return null;
      })}

      <div className="cart-down">
        <div className="cart-f">
          <h1>Cart Total</h1>
          <div className="ct-total">
            <p>SubTotal</p>
            <p>${GetTotalCartAmount()}</p>
          </div>
          <hr />
          <div className="ct-fee">
            <p>Shipping Fee</p>
            <p>Free</p>

          </div>
          <hr />
          <div className="ct-total-fee">
            <p>Total</p>
            <p>${GetTotalCartAmount()}</p>
          </div>
          <button className='ct-btnnnnn' >PROCEED TO CHECKOUT</button>

        </div>
        <div className="cart-s">
          <p>If You have a promo code , Enter here</p>
          <div className="ct-submit">
            <input type="text" placeholder='Promo code' />
            <button>Submit</button>
          </div>
        </div>
      </div>




    </div>
  )
}

export default Cartitems
