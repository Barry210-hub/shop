import React, { useState } from 'react'
import './Addproduct.css'
import upload_area from '../../assets/upload_area.svg' 




const Addproduct = () => {
  const [image, setImage] = useState(false);
const [productDetails , setProductDetails ] = useState({
       name:"",
       image:"",
       category:"women",
       new_price:"",
       old_price:"",
})
  


  const imageHandler = (e)=>{
  
  setImage(e.target.files[0]);
  }

  const changeHandler = (e)=>{
          setProductDetails({...productDetails,[e.target.name]:e.target.value})
  }

  const Add_Product = async ()=>{
console.log(productDetails)
let responseData;
let product = productDetails;

let formData = new FormData();
formData.append('product',image);
await fetch('http://localhost:4000/upload',{
  method: 'POST',
  headers:{
    Accept:'application/json'
  },
  body:formData
}).then((resp)=> resp.json()).then((data)=>{responseData=data})

if(responseData.success){
  product.image = responseData.image_url;
  console.log(product);
  
  await fetch('http://localhost:4000/addproduct',{
    method:'POST',
    headers:{
      Accept:'application/json',
      'Content-Type':'application/json',
    },
    body:JSON.stringify(product),

  }).then((resp)=>resp.json()).then((data)=>{
    data.success?alert("Product Added"):alert("Failed")  })
}



  }

  return (
    <div className='add-product' >
      <div className="adp-itemfeild">
        <p>Product title</p>
        <input type="text" onChange={changeHandler} name='name' placeholder='Type here' />
    
              </div>
      <div className="adp-price">
      <div className="adp-itemfeild">
        <p>Price</p>
        <input value={setProductDetails.old_price} onChange={changeHandler} type="text" name='old_price' placeholder='Type here' />
              </div>
              <div className="adp-itemfeild">
        <p>Offer Price</p>
        <input value={setProductDetails.new_price} onChange={changeHandler} type="text" name='new_price' placeholder='Type here' />
              </div>
      </div>
      <div className="adp-itemfeild">
        <p>Product Category</p>
      <select value={setProductDetails.category} onChange={changeHandler} name="category" className='adp-selector'  id="">
        <option value="women">Women</option>
        <option value="men">Men</option>
        <option value="kid">Kid</option>
      </select>
              </div>

              <div className="adp-itemfeild">
      <label htmlFor="file-input">
        <img className='addp-thumbnails' src={image?URL.createObjectURL(image):upload_area} alt="" />
      </label>
      <input onChange={imageHandler} type="file" name='image' id='file-input' hidden />
              </div>
              <button onClick={()=>{Add_Product()}} className='addp-btn'>Add</button>
    </div>
  )
}

export default Addproduct
