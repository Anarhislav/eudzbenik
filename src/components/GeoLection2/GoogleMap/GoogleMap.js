import { Map, GoogleApiWrapper } from 'google-maps-react';
import React, { Component } from 'react';

const mapStyles = {
    position: "absolute",
    width: "88%",
    height: "87%",
    padding: "10px",
    border: "4px solid black"
  };

class mapContainer extends Component {
    render() { 
        return (
            <Map
              google={this.props.google}
              zoom={11}
              style={mapStyles}
              width={400}
              height={350}
              initialCenter={{ lat: 44.804351, lng: 20.463750}}
            />
        );
    }
}
 
export default GoogleApiWrapper({
    apiKey: 'AIzaSyB3E1EvncsekoXCgU50qxEuvWjGbqZVlRI'
  })(mapContainer);