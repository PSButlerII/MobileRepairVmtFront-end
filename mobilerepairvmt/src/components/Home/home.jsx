import React from "react";


const Home = () => {
  return (
    <React.Fragment>
      <div>
        <h1> MOBILE REPAIR VMT</h1>
      </div>
      <p>
        WELCOME TO MOBILE VMT. WERE YOU CAN CHOOSE TO DIY, OR HAVE OUR SERVICE
        DO THE DIRTY WORK FOR YOU.
      </p>
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
          <h2></h2>
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
          <h2>Product</h2>
        </div>
        <div
          style={{
            justifyContent: "center",
            alignItems: "center",
            height: "40vh",
          }}
        >
          <h2>Service</h2>
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
      </div>
    </React.Fragment>
  );
};

export default Home;
