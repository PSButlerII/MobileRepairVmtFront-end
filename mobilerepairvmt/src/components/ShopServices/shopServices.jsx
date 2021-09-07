import React from "react";



const DisplayService = (props) => {
  
  const filterServices = props.services.filter(
    (services) =>
      services.name.toLowerCase() ||
      services.description.toLowerCase()||
      services.price.toLowerCase()
  );
  console.log(filterServices);
  return (
    <React.Fragment>
      <h1>Services</h1>
      
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
