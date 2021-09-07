import React from "react";
import { useHistory } from "react-router-dom";

const ProfileMap = ({ user}) => {
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
          <h5 className="card-title">{user.name}Card title</h5>
          <h7 className="item price">{user.price}price</h7>
          <p className="card-text">
            {item.description}
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
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

export default ProfileMap;
