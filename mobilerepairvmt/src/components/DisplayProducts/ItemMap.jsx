import React from "react";
import { useHistory } from "react-router-dom";

const ItemMap = ({ item, addToCart }) => {
    const history = useHistory();
  return (
    <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4">
      <div className="card p-0 overflow-hidden h-100 shadow">
        <img
          src="images\NarakuBigBoreAndStroker.jpg"
          className="card-img-top img-fluid"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{item.name}</h5>
          <h4 className="item price" style={{color:"red"}} >${item.price}</h4>
          <p className="card-text">
            {item.description}
            
          </p>
          <button className="btn btn-primary" onClick={() => addToCart(item,history)}>
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemMap;
