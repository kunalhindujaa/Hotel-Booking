import React, { Component } from "react";
import Home from "./components/Homepage/Homepage";
import Service from "./components/Service/Service";
import Rooms from "./components/Rooms/Rooms";
import "./styles.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Home />
        <Service /> */}
        <Rooms />
      </div>
    );
  }
}

export default App;

//https://api.myjson.com/bins/19unyw
