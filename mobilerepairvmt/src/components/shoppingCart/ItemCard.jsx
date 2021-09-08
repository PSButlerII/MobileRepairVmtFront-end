import React from "react";

import ItemMap from "../DisplayProducts/ItemMap";

const ItemCard = ({ items, addToCart }) => {
  return (
    <React.Fragment>
      {console.log(items)}
      <div className="card-group">
        {items?.map((item) => (
          <React.Fragment key={item.ProductId}>
            <ItemMap item={item} addToCart={addToCart}/>
          </React.Fragment>
        ))}
      </div>

      {/*
      <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4">
        <div className="card p-0 overflow-hidden h-100 shadow">
          <img
            src="images\NarakuBigBoreAndStroker.jpg"
            className="card-img-top img-fluid"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{props.name}Card title</h5>
            <h7 className="item price">{props.price}price</h7>
            <p className="card-text">
              {props.description}
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <button className="btn btn-primary">Add To Cart</button>
          </div>
        </div>
      </div>
    </div> */}
      {/* <div className="card 1">
      <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4">
        <div className="card p-0 overflow-hidden h-100 shadow">
          <img src={props.img} className="card-img-top img-fluid" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{props.name}Card title</h5>
            <p className="card-text">
              {props.description}
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <button className="btn btn-primary">Add To Cart</button>
          </div>
        </div>
      </div>
    </div>
    <div className="card 1">
      <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4">
        <div className="card p-0 overflow-hidden h-100 shadow">
          <img src={props.img} className="card-img-top img-fluid" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{props.name}Card title</h5>
            <p className="card-text">
              {props.description}
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <button className="btn btn-primary">Add To Cart</button>
          </div>
        </div>
      </div>
    </div>
    <div className="card 1">
      <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4">
        <div className="card p-0 overflow-hidden h-100 shadow">
          <img src={props.img} className="card-img-top img-fluid" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{props.name}Card title</h5>
            <p className="card-text">
              {props.description}
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <button className="btn btn-primary">Add To Cart</button>
          </div>
        </div>
      </div>
    </div>
    <div className="card 1">
      <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4">
        <div className="card p-0 overflow-hidden h-100 shadow">
          <img src={props.img} className="card-img-top img-fluid" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{props.name}Card title</h5>
            <p className="card-text">
              {props.description}
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <button className="btn btn-primary">Add To Cart</button>
          </div>
        </div>
      </div>
    </div>
    <div className="card 1">
      <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4">
        <div className="card p-0 overflow-hidden h-100 shadow">
          <img src={props.img} className="card-img-top img-fluid" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{props.name}Card title</h5>
            <p className="card-text">
              {props.description}
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <button className="btn btn-primary">Add To Cart</button>
          </div>
        </div>
      </div>
    </div> */}
    </React.Fragment>
  );
};

export default ItemCard;
