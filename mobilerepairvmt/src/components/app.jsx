import React, { Component } from "react";
import axios from "axios";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
  
} from "react-router-dom";
import jwtDecode from "jwt-decode";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./Login/login";
import NavBar from "./NavBar/navbar";
import Register from "./Register/register";
import Home from "./Home/home";
// import DisplayService from "./ShopServices/shopServices";
import Lti from "./DisplayLTI/longFormLti";
import ProfileView from "./Customer Profile/myProfile";
// import Calendar from "./Calendar/calendar";
import "./app.css";
import ItemCard from "./shoppingCart/ItemCard";
import ShoppingCart from "./shoppingCart/ShoppingCart";
// import ReviewForm from "./reviewForm/reviewForm";
import MapView from "./Maps/MapView";
import MainChatApp from "./ChatBox/MainChatApp";
import Calendar from "./Scheduler/components/calendar";
import ServiceCard from "./shoppingCart/ServiceCard";
import DisplayLTI from "./DisplayLTI/LTIViews/CustomerLTIView/CustomerLTIViewer";

class App extends Component {
  constructor(props) {
    const tokenFromStorage = localStorage.getItem("token");
    localStorage.removeItem("token");
    super(props);
    this.state = {
      users: [],
      userInfo: [],
      shoppingCart: [],
      items: [],
      services: [],
      userid: "",
      reviews: [],
      rating: [],
      reviewsById: [],
      redirect: null,
      isLoggedIn: false,
      ownerStatus: false,
      EmployeeLti:[],      
      CustomerLti: [],
      allUsers: [],
    };
  }
  componentDidMount() {
    this.getAllItems();
    this.getAllServices();
    this.getAllCustomerLtis();
    this.checkOwnerStatus();    
    this.getAllEmployeeLtis();

    const jwt = localStorage.getItem("token");
    try {
      const users = jwtDecode(jwt);
      this.setState({ users });
console.log(this.state.ownerStatus);
console.log(this.state.CustomerLti);
console.log(this.state.EmployeeLti);
console.log(this.state.services);
console.log(this.state.userInfo);
console.log(this.state.allUsers);

      console.log(this.state.users.id);
    } catch {}
  }

  checkOwnerStatus = () => {
    let valueArr = Object.values(this.state.users);
    console.log(valueArr);
    if (valueArr.includes("Admin")) {
      this.setState({
        ownerStatus: true,
      });
      console.log(this.state.ownerStatus);
    } else if (valueArr.includes("User")) {
      this.setState({
        ownerStatus: false,
      });
      console.log(this.state.ownerStatus);
    }
  };
  getAllReviews = async () => {
    var res = await axios(`https://localhost:44394/api/review`);
    return this.setState({
      reviews: res.data,
    });
  };

  getReviewsbyId = async (ProductId) => {
    var res = await axios(`https://localhost:44394/api/review`, ProductId);
    return this.setState({
      reviewsById: res.data,
    });
  };

  getAllItems = async () => {
    var res = await axios(`https://localhost:44394/api/Products`);
    var tempItem = res.data;
    return this.setState({
      items: tempItem,
    });
  };

  getAllServices = async () => {
    var res = await axios(`https://localhost:44394/api/ShopService`);
    var tempService = res.data;
    return this.setState({
      services: tempService,
    });
  };

  newUser = async (event) => {
    try {
      var res = await axios.post(
        `https://localhost:44394/api/authentication`,
        event
      );
      console.log(res);
      return res.status;
    } catch (err) {
      alert(err);
    }
  };
  getAllUser = async (event) => {
    var res = await axios.post(
      `https://localhost:44394/api/examples/user`,
      event
    );
    let token = res.data.token;
    localStorage.setItem("token", token);
    console.log(res.data.token);
    this.checkOwnerStatus();
    this.setState({
      allUsers: [res.data],
    });
    console.log(this.state.allUsers);
  };

  getUser = async (event) => {
    var res = await axios.post(
      `https://localhost:44394/api/authentication/login`,
      event
    );
    let token = res.data.token;
    localStorage.setItem("token", token);
    console.log(res.data.token);
    this.getUserInfo();
    this.checkOwnerStatus();
    this.setState({
      user: [res.data],

      isLoggedIn: true,
    });
    console.log(res.data);
  };

  getUserInfo = async (event) => {
    const jwt = localStorage.getItem("token");
    var response = await axios.get(
      `https://localhost:44394/api/examples/user`,
      { headers: { Authorization: "Bearer " + jwt } }
    );
    console.log(response.data);
    this.setState({
      userid: response.data.id,
      userInfo: [response.data],
    });
  };
  getAllCustomerLtis = async (event) => {
    var res = await axios.get(`https://localhost:44394/api/customerLTI`);
    var tempLTI = res.data;
    console.log(res.data);
    return this.setState({
      CustomerLti: tempLTI,
    });
    
  };
  
  getAllEmployeeLtis = async (event) => {
    const jwt = localStorage.getItem("token");
    var res = await axios(`https://localhost:44394/api/EmployeeLTI`, {
      headers: { Authorization: "Bearer " + jwt },
    });
    var tempLTI = res.data;
    console.log(res.data);
    return this.setState({
      EmployeeLti:tempLTI,
    });
  };
  createEmployeeLti = async (event) => {
    const jwt = localStorage.getItem("token");
    try {
      var res = await axios.post(
        `https://localhost:44394/api/EmployeeLTI`,
        event,
        { headers: { Authorization: "Bearer " + jwt } }
      );
      console.log(res);
      return res.status;
    } catch (err) {
      alert(err);
    }
  };
  createCustomerLti = async (event) => {
    const jwt = localStorage.getItem("token");
    try {
      var res = await axios.post(
        `https://localhost:44394/api/customerLTI`,
        event,
        { headers: { Authorization: "Bearer " + jwt } }
      );
      console.log(res);
      return res.status;
    } catch (err) {
      alert(err);
    }
  };

  addToCart = async (item, router) => {
    this.state.shoppingCart.push(item);
    let tempCart = this.state.shoppingCart;
    this.setState({
      shoppingCart: tempCart,
    });

    router.push("/ShoppingCart");

    // const jwt = localStorage.getItem("token");
    // let response = await axios
    //   .post("https://localhost:44394/api/shoppingcart", cart, {
    //     headers: { Authorization: "Bearer " + jwt },
    //   })
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch((err) => alert("Already in your cart."));

    // if (response === undefined) {
    //   this.setState({});
    // } else {
    //   this.setState({
    //     cart: response.data,
    //   });
    // }
  };
  

  deleteFromCart = async (index, router) => {
    // let tempCart = this.state.shoppingCart.filter((item) => incomingItem !== incomingItem[index])
    let tempCart = [];
    for (let i = 0; i < this.state.shoppingCart.length; i++) {
      if (this.state.shoppingCart[i] !== this.state.shoppingCart[index]) {
        tempCart.push(this.state.shoppingCart[i]);
      }
    }

    this.setState({
      shoppingCart: tempCart,
    });
    router.push("/ShoppingCart");

    // try {
    //   await axios.delete(`https://localhost:44394/api/cart/remove/${id}/`);
    // } catch (err) {
    //   console.log(err);
    // }
  };

  logoutUser = async (event) => {
    localStorage.removeItem("token");
  };
  render() {
    return (
      <React.Fragment>
        {console.log(this.state.services)}
        {console.log(this.state.CustomerLti)}
        <NavBar
          isLoggedIn={this.state.isLoggedIn}
          shoppingCart={this.state.shoppingCart}
        />

        {this.state.isLoggedIn === false ? (
          <Switch>
            {this.tokenFromStorage ? (
              <Route
                path="/"
                exact
                component={() => <Redirect to="/Profile" />}
              />
            ) : (
              <Route path="/" exact component={Home}></Route>
            )}
            <Route
              path="/login"
              render={(props) => <Login {...props} getUser={this.getUser} />}
            />

            <Route
              path="/register"
              render={(props) => (
                <Register
                  {...props}
                  newUser={this.newUser}
                  Redirect
                  to="/login"
                />
              )}
            />
          </Switch>
        ) : (
          <Switch>
            <Route path="/" exact component={Home}>
              {/* <DisplayProducts items={this.state.items} /> */}
              <ItemCard items={this.state.items} addToCart={this.addToCart} />
            </Route>
            <Route
              path="/ShopServices"
              exact
              render={(props) => (
                <ServiceCard
                  {...props}
                  services={this.state.services}
                  addToCart={this.addToCart}
                />
              )}
            />
            {this.state.ownerStatus === false ? (
              <Route
                path="/CreateLTI"
                exact
                render={(props) => (
                  <Lti {...props} createCustomerLti={this.createCustomerLti} />
                )}
              />
            ) : (
              <Route
                path="/CreateEmployeeLTI"
                exact
                render={(props) => (
                  <Lti {...props} createEmployeeLti={this.createEmployeeLti} />
                )}
              />
            )}
            <Route
              path="/Profile"
              exact
              render={(props) => (
                <ProfileView
                  {...props}
                  users={this.state.userInfo}
                  isOwner={this.checkOwnerStatus}
                />
              )}
            />
            <Route
              path="/MyLTIs"
              exact
              render={(props) => (
                <DisplayLTI
                  {...props}
                  CustomerLti={this.state.CustomerLti}
                  getLti={this.getAllCustomerLtis}
                />
              )}
            />
            <Route path="/Schedule" exact component={Calendar} />

            <Route
              path="/ShoppingCart"
              exact
              render={(props) => (
                <ShoppingCart
                  {...props}
                  shoppingCart={this.state.shoppingCart}
                  deleteFromCart={this.deleteFromCart}
                />
              )}
            />
            <Route path="/Maps" exact>
              <MapView />
            </Route>
            <Router>
              <Route path="/Help" exact />
              <MainChatApp />
            </Router>
            {/* <Route
              path="/ServiceReview"
              exact
              render={(props) => (
                <ReviewForm
                  {...props}
                  services={this.state.services}
                  items={this.state.items}
                  users={this.state.userInfo}
                />
              )}
            /> */}
            <Redirect to="not-found" />
          </Switch>
        )}
      </React.Fragment>
    );
  }
}

export default App;
