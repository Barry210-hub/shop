import React, { useEffect, useState } from 'react'
import './Listproduct.css'
import cross_icon from '../../assets/cross_icon.png'

const Listproduct = () => {

   const [allproducts , setAllProducts] = useState([]);

   const fetchinfo = async ()=>{
            await fetch('http://localhost:4000/allproducts')
            .then((res)=>res.json())
            .then((data)=>{setAllProducts(data)});
   }
useEffect(() => {
  fetchinfo()

 
}, [])

const remove_product = async (id)=>{
await fetch('http://localhost:4000/removeproduct' , {
  method:'POST',
  headers:{
    Accept:'application/json',
    'Content-Type':'application/json',
  },
  body:JSON.stringify({id:id})
})
 await fetchinfo();

}

  return (
    <div className='list-product' >
      <h1>All Product</h1>
      <div className="lp-for-main">
        <p>Product</p>
        <p>Title</p>
        <p>Old price</p>
        <p>New price</p>
        <p>Category</p>
        <p>Remove</p>
      </div>
      <div className="lp-allproducts">
        <hr />
{allproducts.map((product,index)=>{
  return <>
  <div key={index} className="lp-for-main format " >
    <img src={product.image} className='lp-p-icon' alt="" />
  <p>{product.name}</p>
  <p>{product.new_price}</p>
  <p>{product.old_price}</p>
  <p>{product.category}</p>
  <img  onClick={()=>{remove_product(product.id)}} src={cross_icon} className='lp-remove' alt="" />
  
  </div>
<hr />
  </> 

})
}
      </div>
    </div>
  )
}
import './listproduct.css'
export default Listproduct
