import React, { useContext } from 'react'

import { useParams } from 'react-router-dom';
import Breadcrum from '../Components/Breadcrum/Breadcrum';
import { ShopContext } from '../Context/ShopContext';
import ProductDisplay from '../Components/Productdisplay/ProductDisplay';
import Descriptionbox from '../Components/Descriptionbox/Descriptionbox';
import ReleatedProduct from '../Components/Releatedproduct/ReleatedProduct';

const Product = () => {
  const { all_product } = useContext(ShopContext)
const {productId} = useParams();


const product = all_product.find((e)=> e.id === Number(productId));

    
  return (
    <div>
      <Breadcrum product={product} />
      <ProductDisplay product={product}  />
      <Descriptionbox/>
      <ReleatedProduct/>
    </div>
  )
}

export default Product
