import React, { useEffect } from 'react'
import { useState } from 'react';
import { PRODUCTS } from '../products';
import Product from './Product';
import "../styles/Product.scss"
const Home = () => {

  return (
    <div className="container">
    <div className="home">
      <div className="shoptitle">
        <h1><span> Shop</span>from<span>HASBI</span></h1>
      </div>
      <div className="products">
        {" "}
      {
        PRODUCTS.map((product)=>(
          //Sending data package data to Product component later we will fecth it as props
          <Product data={product} key={product.id}/>
        ))}
      </div>
    </div>
    </div>
  )
}

export default Home