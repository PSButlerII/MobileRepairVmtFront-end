import React from "react";
import { useHistory } from "react-router-dom";

const Cartscreen = ({ cartItem, deleteFromCart, index }) => {
  const history = useHistory();
  return (
    <React.Fragment>
      <tr key={index}>
        <td>{cartItem.name}</td>
        <td>{cartItem.description}</td>
        <td>${cartItem.price}</td>
        <td>
          <button onClick={() => deleteFromCart(index, history)}>
            
            Delete From Cart
          </button>
        </td>
        <td></td>
      </tr>
    </React.Fragment>
  );
};

export default Cartscreen;
