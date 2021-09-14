import React from "react";

const Home = () => {
  return (
    <React.Fragment>
      <div>
        <h1> MOBILE REPAIR VMT</h1>
      </div>
      <h5>
        WELCOME TO MOBILE VMT. A HOBBYSHOP WERE YOU CAN CHOOSE TO DIY, OR HAVE OUR SERVICE
        DO THE DIRTY WORK FOR YOU.
      </h5>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <div
          style={{
            justifyContent: "center",
            alignItems: "center",
            height: "19vh",
          }}
        >
          <img src="images/scooters.jpg" alt="scooters" />
        </div>
        <div
          style={{
            justifyContent: "center",
            alignItems: "center",
            height: "40vh",
          }}
        >
          <h2>Calendar</h2>
        </div>
        <div
          style={{
            justifyContent: "center",
            alignItems: "center",
            height: "10vh",
          }}
        >
          <h2>Products</h2>
        </div>
        <div
          style={{
            justifyContent: "center",
            alignItems: "center",
            height: "40vh",
          }}
        >
          <h2>Services</h2>
        </div>
        <div
          style={{
            justifyContent: "center",
            alignItems: "center",
            height: "10vh",
          }}
        >
          <h2>LTI Form</h2>
        </div>
        <div
          style={{
            justifyContent: "center",
            alignItems: "center",
            height: "40vh",
          }}
        >
          <h2>Chat</h2>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;
