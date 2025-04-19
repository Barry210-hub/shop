import React, { useContext } from 'react'
import "./CSS/ShopCategory.css"
import all_product from '../assets/all_product'
import { ShopContext } from '../Context/ShopContext'
import drop_down from '../assets/dropdown_icon.png'
import Item from '../Components/Items/Item'

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext)

  return (
    <div className='shop-category' >
      <img className='shopcat-ban' src={props.banner} alt="" />

      <div className="shopcat-exp">
        <div className="shop-lef">

          <span >
            Showing 1-12  </span> <span className='shopifu' >
            out of 36 products
          </span>

        </div>
        <div className="shopcat-inf">
          <span className='shop-sort'>
            Sort By
          </span>
          <img src={drop_down} alt="" />
        </div>
      </div>

      <div className="shopcat-item">
        {all_product.map((item, i) => {
          if (props.category === item.category) {

            return <Item key={i} id={item.id} name={item.name} img={item.image} new_price={item.new_price} old_price={item.old_price} />
          }
          else {
            return null;
          }

        })}
      </div>


<div className="shopcat-explore">

 <p>Explore More</p>

</div>




    </div>
  )
}

export default ShopCategory
