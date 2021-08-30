import React from "react";
import { Link } from "react-router-dom";

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
                <Link to="/LTI" className="nav-link active">
                  LTI's
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
                <Link
                  to="/login"
                  className="nav-link active"
                  onClick={handleMenuClose}
                >
                  Log Out
                </Link>
              </li>
            </ul>
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
