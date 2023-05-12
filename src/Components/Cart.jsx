import React, { useContext } from "react";
import { PRODUCTS } from "../products";
import { ShopContext } from "../context/ShopContext";
import CartItem from "./CartItem";
import "../styles/CartItem.scss";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

function Cart() {
  const navigate = useNavigate();
  const { cartItem, getTotalAmount } = useContext(ShopContext);

  const totalAmount = getTotalAmount();
  return (
    <div className="cart">
      {totalAmount>0?(
         <h1>
         <span> Your </span>Shopping<span>Cart</span>
       </h1>
      ):(
        <h1>
         <span> Your </span>Cart is <span>Empty</span>
       </h1>
      )}
        
      
      <div className="cartItems">
        {
          //For each specific product if it inside cartItems then we will hsow cards
          PRODUCTS.map((product) => {
            if (cartItem[product.id] !== 0) {
              return <CartItem data={product} key={product.id}/>;
            }
          })
        }
      </div>
      {totalAmount > 0 ? (
        <div className="checkout">
          <p> Subtotal: Tk {totalAmount} </p>
          <Button variant="contained" color="secondary" size="MEDIUM" onClick={() => navigate("/")}>Continue Shopping</Button>
          <Button variant="contained" color="secondary">Checkout</Button>
        </div>
      ) : (
        <h1></h1>
      )}
    </div>
  );
}

export default Cart;
