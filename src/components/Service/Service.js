import React, { Component } from "react";
import LocalBarIcon from "@material-ui/icons/LocalBar";
import AirportShuttleIcon from "@material-ui/icons/AirportShuttle";
import LocalParkingIcon from "@material-ui/icons/LocalParking";
import WifiIcon from "@material-ui/icons/Wifi";

import "./Service.css";

class Service extends Component {
  state = {
    serviceData: [
      {
        id: 1,
        icon: <LocalBarIcon />,
        title: "Free Drinks",
        content:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero"
      },
      {
        id: 2,
        icon: <AirportShuttleIcon />,
        title: "Free Pick and Drop",
        content:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero"
      },
      {
        id: 3,
        icon: <LocalParkingIcon />,
        title: "Ample parking Space ",
        content:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero"
      },
      {
        id: 4,
        icon: <WifiIcon />,
        title: "Free Wifi",
        content:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero"
      }
    ]
  };

  render() {
    return (
      <div className="services">
        <div className="title">
          <h1> Services </h1>
        </div>
        <div className="data">
          {this.state.serviceData.map(data => {
            return (
              <div>
                <article key={data.id}>
                  <span>{data.icon}</span>
                  <h4> {data.title} </h4>
                  <p> {data.content} </p>
                </article>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Service;
