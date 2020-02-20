import React, { Component } from "react";
import image1 from "../../images/room-12.jpeg";
import image2 from "../../images/room-11.jpeg";
import image3 from "../../images/room-3.jpeg";
import image4 from "../../images/room-1.jpeg";
import image8 from "../../images/room-8.jpeg";
import "./Rooms.css";
import "../../App.css";
import Room from "./Room";

class Rooms extends Component {
  state = {
    images: [
      { img: image1, name: "Single Deluxe", price: "100" },
      { img: image2, name: "Family Deluxe", price: "200" },
      { img: image3, name: "Basic", price: "300" },
      { img: image4, name: "Family Basic", price: "400" }
    ]
  };

  render() {
    return (
      <div>
        <div className="header">
          <p>Hotel La Vista</p>
          <a href="#home">Home</a>
          <a href="#rooms">Rooms</a>
          <a href="#about">About Us</a>
        </div>
        <div>
          <div className="logo">
            <img src={image8} alt="Images" />
            <div className="centered">
              Our Rooms
              <hr />
            </div>
          </div>
          {this.state.images.map((item, index) => (
            <div className="rooms">
              {/* <img src={item.img} alt="Images" /> */}
              <Room key={index} room={item} />
              {/* <p>{item.name}</p> */}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Rooms;
