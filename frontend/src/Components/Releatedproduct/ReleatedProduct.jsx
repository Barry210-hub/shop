import React from 'react'
import './Releatedproduct.css'
import data_product from "../../assets/data"
import Item from '../Items/Item'

const ReleatedProduct = () => {
  return (
    <div className='rp' >
      <h1>Releated Product</h1>
      <hr />

      <div className="rp-items">
        {data_product.map((item,i)=>{
            return <Item key={i} id={item.id} name={item.name} img={item.image} new_price={item.new_price} old_price={item.old_price} />
        })}
      </div>
    </div>
  )
}

export default ReleatedProduct
