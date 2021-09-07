import React, { Component } from "react";
import Map from "./Maps";

class Home extends Component {
  render() {
    return (
      <div style={{ margin: "100px" }}>
        <Map
          google={this.props.google}
          center={{ lat: 43.303841, lng: -70.975677 }}
          height="300px"
          zoom={10}
        />
      </div>
    );
  }
}

export default Home;
