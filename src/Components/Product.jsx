import { Button } from '@mui/material';
import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext';
function Product(props) {
    const {id,productName,price,productImage}= props.data;
    const {addTocart,cartItem}= useContext(ShopContext);
    const cartItemAmount = cartItem[id];
  return (
   <div className="product">
    <img src={productImage} alt="" />
    <div className="description">
        <p><b>{productName}</b></p>
        <p>Tk {price}</p>
        <Button variant='contained' onClick={()=>addTocart(id)}>
          Add to cart
          {cartItemAmount > 0 && <>({cartItemAmount})</> }
          
          </Button>
    </div>
    
   </div>
  )
}

export default Product