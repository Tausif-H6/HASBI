import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext';

function CartItem(props) {
    const {id,productName,price,productImage}= props.data;
    const {addTocart,cartItem,removeFromCart, updateCartItemCount}= useContext(ShopContext);

  return (
    <div className="cartitem">
    <img src={productImage} alt="" />
    <div className="description">
        <p><b>{productName}</b></p>
        <p>Tk {price}</p>
    </div>
    <div className="countHandler">
      <button onClick={()=>removeFromCart(id)}>-</button>
      <input value={cartItem[id]} onChange={(e)=> updateCartItemCount(Number(e.target.value),id)}/>
      <button onClick={()=>addTocart(id)}>+</button>
    </div>
    
   </div>
  )
}

export default CartItem