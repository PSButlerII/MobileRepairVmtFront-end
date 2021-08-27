import React from "react";

import { useState } from "react";

const DisplayService = (props) => {
  const [search, setSearch] = useState("");
  const filterServices = props.services.filter(
    (services) =>
      services.name.toLowerCase().includes(search.toLowerCase()) ||
      services.description.toLowerCase().includes(search.toLowerCase()) ||
      services.price.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <React.Fragment>
      <h1>Services</h1>
      {/* <input
        placeholder="search..."
        onChange={(event) => setSearch(event.target.value)}
      ></input> */}
      <table responsive className="table table-striped">
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
          {filterServices.map((service) => {
            return (
              <tr key={service.ServiceId}>
                <td>{service.name}</td>
                <td>{service.description}</td>
                <td>${service.price}</td>
                <td>
                  <button onClick={() => props.addToCart(service)}>
                    Add to Cart
                  </button>
                </td>
                <td></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </React.Fragment>
  );
};

export default DisplayService;
