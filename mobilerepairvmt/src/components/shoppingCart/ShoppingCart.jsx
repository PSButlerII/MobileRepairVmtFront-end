import React from "react";
import Cartscreen from "./Cartscreen";




export default function ShoppingCart({shoppingCart, deleteFromCart}) {

  return (
    <div>
      <h1>Your Cart</h1>
      <table className="table table-striped">
        <thead>
          <tr></tr>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
          </tr>
          <tr></tr>
        </thead>
        <tbody>
          {shoppingCart?.map((cartItem, index) => (
            <React.Fragment key={index}>
              <Cartscreen cartItem={cartItem} deleteFromCart={deleteFromCart} index={index} />
              {console.log(index)}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
}


     
        
      