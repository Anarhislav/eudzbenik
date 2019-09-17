import React, { Component } from "react";
import "./GeoLection2.css";
import GoogleApiWrapper from "./GoogleMap/GoogleMap";

class GeoLectionTwo extends Component {
  render() {
    return (
      <div className="pozadina2">
        <div className="title-bg2">На Овој Мапи можеш детаљно да истразиш улице Београда</div>
        <GoogleApiWrapper></GoogleApiWrapper>
      </div>
    );
  }
}

export default GeoLectionTwo;