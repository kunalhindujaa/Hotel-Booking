import React, { Component } from "react";
// import image1 from "../../images/room-12.jpeg";
// import image2 from "../../images/room-11.jpeg";
// import image3 from "../../images/room-3.jpeg";
// import image4 from "../../images/room-1.jpeg";
// import image1 from "../../images/room-12.jpeg";
// import image2 from "../../images/room-11.jpeg";
// import image3 from "../../images/room-3.jpeg";
// import image4 from "../../images/room-1.jpeg";
// import image8 from "../../images/room-8.jpeg";
import { Link, BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Room.css";
import axios from "axios";
// class Room extends Component {
// state = {
//   images: [{ image1 }, { image2 }, { image3 }, { image4 }]
// };
// state = {
//   images: [
//     { img: image1, name: "Single Deluxe" },
//     { img: image2, name: "Family Deluxe" },
//     { img: image3, name: "Basic" },
//     { img: image4, name: "Family Basic" }
//   ]
// };
const Room = ({ room }) => {
  axios.get("https://api.myjson.com/bins/19unyw").then(response => {
    console.log(response.data);
  });
  console.log(room);
  const { name, img, price } = room;
  // render() {
  return (
    <article className="room">
      <div className="img-container">
        <img src={img} alt="Single Deluxe" />
        <div className="price-top">
          <h6>${price}</h6>
          <p>per night</p>
        </div>
        <BrowserRouter>
          <Link to={`/rooms/`} className="btn-primary room-link">
            Features
          </Link>
        </BrowserRouter>
      </div>
      <p className="room-info">{name}</p>
    </article>
  );
};
//}

export default Room;

// componentDidMount() {
//   const users = axios
//     .get("https://jsonplaceholder.typicode.com/users")
//     .then(response => {
//       const users = response.data.splice(0, 5);
//       this.setState({ users: response.data });
//       //console.log(response);
//     });
// }
