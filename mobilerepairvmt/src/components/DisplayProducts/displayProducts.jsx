import React from "react";

import { useState } from "react";

const DisplayProducts = (props) => {
  
  const filterItems = props.items.filter(
    (items) =>
      items.name.toLowerCase() ||
      items.description.toLowerCase() ||
      items.price.toLowerCase()
  );
  return (
    <React.Fragment>
      <h1>Parts and Products List</h1>
      
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
          {filterItems.map((item) => {
            return (
              <tr key={item.ProductId}>
                <td>{item.name}</td>                
                <td>{item.description}</td>
                <td>${item.price}</td>
                <td>
                  <button onClick={() => props.addToCart(item)}>
                    Add to Cart
                  </button>
                </td>
                <td>                  
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      
    </React.Fragment>
  );
};

export default DisplayProducts;
