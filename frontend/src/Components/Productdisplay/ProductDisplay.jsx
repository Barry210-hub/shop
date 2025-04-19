import React, { useContext } from 'react'
import "./Productdisplay.css"
import star_icon from '../../assets/star_icon.png'
import star_dull_icon from "../../assets/star_dull_icon.png"
import { ShopContext } from '../../Context/ShopContext'


const ProductDisplay = (props) => {
    const { product } = props;
const {addToCart} = useContext(ShopContext);

    return (
        <div className='productdisplay' >
            <div className="pd-left">
                <div className="pd-img-list">
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />

                </div>
                <div className='pd-main-img' >
                    <img src={product.image} alt="" />
                </div>
            </div>
            <div className="pd-right">
                <h1>{product.name}</h1>
                <div className="pd-right-star">
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_dull_icon} alt="" />
                    <p>(163)</p>
                </div>
                <div className="pd-r-prices">
                    <div className="pd-r-priceold">
                        ${product.old_price}
                    </div>
                    <div className="pd-r-pricenew">
                        ${product.new_price}
                    </div>
                </div>
<div className="pd-description">
    A lightweight usually kjnitted , pullover shirt, close-fitting and fully round neckline and short sleeves , worn as an undershiert or outer garments
</div>
<div className="pd-r-size">
    <h1>Select Size</h1>
    <div className="pd-r-sizes">
        <div  className='pd-btnn'   >S</div>
        <div className='pd-btnn' >M</div>
        <div className='pd-btnn' >L</div>
        <div className='pd-btnn' >XL</div>
        <div className='pd-btnn'   >XXL</div>
    </div>

</div>

<button onClick={()=>{addToCart(product.id)}} className='pd-btnnn' >ADD TO CART</button>
<p className='pd-r-category' ><span>Category :</span>Women , T-Shirt, Crop Top </p>
<p className='pd-r-category' ><span>Tags :</span>Modern , Latest</p>
            </div>
        </div>
    )
}

export default ProductDisplay
