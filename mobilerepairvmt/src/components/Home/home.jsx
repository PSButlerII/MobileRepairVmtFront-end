import React from "react";


const Home = () => {
  return (
    <React.Fragment>
      <div>
          
        <h1>Home</h1>
      </div>
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
          
          <h2>picture or something</h2>
          <img src="images/scooters.jpg" />
        </div>
        <div
          style={{
            justifyContent: "center",
            alignItems: "center",
            height: "40vh",
          }}
        >
          <h2>Reviews***</h2>
        </div>
        <div
          style={{
            justifyContent: "center",
            alignItems: "center",
            height: "10vh",
          }}
        >
          <h2>Product***</h2>
        </div>
        <div
          style={{
            justifyContent: "center",
            alignItems: "center",
            height: "40vh",
          }}
        >
          <h2>Service***</h2>
        </div>
        <div
          style={{
            justifyContent: "center",
            alignItems: "center",
            height: "10vh",
          }}
        >
          <h2>Contact***</h2>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;
