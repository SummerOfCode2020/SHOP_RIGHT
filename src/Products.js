import React from 'react';

export default function Products () {
    return (
        <>
      <h1> PRODUCT </h1>
      <div className= "products"> 
      {products.map((product, idx) => (
        <div className ="product" key ={idx}> 
          <h3> {product.name} </h3>
          <h4> {product.price} </h4>
          <img src = {product.img} alt ={ product.name}/>
          <button onClick ={() => addToCart(product)}> ADD TO CART</button>
        </div>
      ))}
   
      </div>
      </>
    );
    
}