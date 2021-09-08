import React from "react";
import { useHistory } from "react-router-dom";

const ItemMap = ({ item, addToCart }) => {
    const history = useHistory();
  return (
   
      <div className="col-10 col-md-5 col-lg-3 mx-4 mb-3">
        <div className="card p-1 overflow-hidden h-10 shadow">
          <img
            src="images\NarakuBigBoreAndStroker.jpg"
            className="card-img-top img-fluid"
            alt="..."
          />
          <div className="card-body">
            <h4 className="card-title">{item.name}</h4>
            <h5 className="item price" style={{ color: "red" }}>
              ${item.price}
            </h5>
            <p className="card-text" style={{ color: "blue" }}>
              {item.description}
            </p>
            <button
              className="btn btn-primary"
              onClick={() => addToCart(item, history)}
            >
              Add To Cart
            </button>
          
        </div>
      </div>
    </div>
  );
};

export default ItemMap;
