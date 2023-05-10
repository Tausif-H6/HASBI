import { Button } from '@mui/material';
import React from 'react'

function Product(props) {
    const {productName,price,productImage}= props.data;
  return (
   <div className="product">
    <img src={productImage} alt="Image error" />
    <div className="description">
        <p><b>{productName}</b></p>
        <p>${price}</p>
        <Button variant='contained'>Add to cart</Button>
    </div>
    
   </div>
  )
}

export default Product