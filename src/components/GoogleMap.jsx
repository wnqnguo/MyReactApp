
import React, { Component } from'react';
import ReactDOM from 'react-dom';
export default class GoogleMap extends Component {
  componentDidMount(){
  	var mapOptions = {
          center: { lat: -34.397, lng: 150.644},
          zoom: 8
        };
  	new google.maps.Map(ReactDOM.findDOMNode(this.refs.map_canvas),
  		mapOptions);
  }

  render() {
  	 var container={
  	width: '100%',
  	height:'300px'
   }
   var mapStyle={
   	width: '100%',
   	width: '100%'
   }
    return (
      <div className= "map_container" style={container}>
        <div className ="map"ref="map_canvas" style={mapStyle} ></div>
      </div>
    );
  }
}