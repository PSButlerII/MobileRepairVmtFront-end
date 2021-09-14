import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const NavBar = (props) => {
  const handleMenuClose = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  return (
    <div>
      {props.isLoggedIn ? (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <ul className="navbar-nav  ">
              <li className="nav-item">
                <Link to="/" className="nav-link active">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/ShopServices" className="nav-link active">
                  ShopServices
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/CreateLTI" className="nav-link active">
                  LTI's
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/MyLTIs" className="nav-link active">
                  My LTI's
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/Profile" className="nav-link active">
                  Profile
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/Schedule" className="nav-link active">
                  Schedule
                </Link>
              </li>
              
              <li className="nav-item">
                <Link to="/ShoppingCart" className="cart-link">
                  <i className="fas fa-shopping-cart"></i>
                  Shopping Cart
                  <span className="cartlogo__badge">
                    {props.shoppingCart.length >= 1
                      ? props.shoppingCart.length
                      : 0}
                  </span>
                </Link>
              </li>
              {/* <li className="nav-item">
                <Link to="/ServiceReview" className="nav-link active">
                  Reviews
                </Link>
              </li> */}
              <li className="nav-item">
                <Link to="/Maps" className="nav-link active">
                  Maps
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/Help" className="nav-link active">
                  Help
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/login"
                  className="nav-link active"
                  onClick={handleMenuClose}
                >
                  Log Out
                </Link>
              </li>
            </ul>
            {/* <div className="hamburger__menu">
              <div></div>
              <div></div>
              <div></div>
            </div> */}
          </div>
        </nav>
      ) : (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <ul className="navbar-nav  ">
              <li className="nav-item">
                <Link to="/login" className="nav-link active">
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/register" className="nav-link active">
                  Register
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      )}
    </div>
  );
};

export default NavBar;
