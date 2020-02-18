import React, { Component } from "react";
import Home from "./components/Homepage/Homepage";
import Service from "./components/Service/Service";
import "./styles.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Home />
        <Service />
      </div>
    );
  }
}

export default App;
