import React from "react";
import { useHistory } from "react-router-dom";

const ServiceMap = ({ service, addToCart }) => {
  const history = useHistory();
  return (
    <div className="col-11 col-md-5 col-lg-3 mx-5 mb-3">
      <div className="card p-1 overflow-hidden h-10 shadow">
        <img
          src="images\scooter2.jpg"
          className="card-img-top img-fluid"
          alt="..."
        />
        <div className="card-body">
          <h4 className="card-title">{service.name}</h4>
          <h5 className="item price" style={{ color: "red" }}>
            ${service.price}
          </h5>
          <p className="card-text" style={{ color: "blue" }}>
            {service.description}
          </p>
          <button
            className="btn btn-primary"
            onClick={() => addToCart(service, history)}
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceMap;
