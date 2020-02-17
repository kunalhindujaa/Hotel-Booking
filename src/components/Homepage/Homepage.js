import React from "react";
import beachImg from "../../images/beach-home-page.jpg";
import "./Homepage.css";

const Home = props => {
  return (
    <div>
      <div className="header">
        <p>Hotel La Vista</p>
        <a href="#home">Home</a>
        <a href="#news">Rooms</a>
        <a href="#about">About Us</a>
      </div>
      <img src={beachImg} alt="Beach-Home-Page" />
      {/* <div style={{ position: "relative;" }}>
        Content of bottom div goes here.
      </div>
      <div style={{ position: "absolute;top:0;bottom:0;left:0;right:0;" }}>
        Content of overlay div.
      </div> */}
    </div>
  );
};

export default Home;
