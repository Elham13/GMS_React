import React, { useEffect } from 'react'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
 

const MapContainer = (props) =>  {

    const containerStyle = {
        position: 'relative',  
        width: '100%',
        height: '400px'
    }

    useEffect(() => {
        
    }, [])
    return (
        <Map 
            google={props.google} 
            containerStyle={containerStyle}
            zoom={17}
            initialCenter={{
                lat: 17.3603581,
                lng: 78.5236466
            }}
        >
 
        {/* <Marker onClick={this.onMarkerClick} */}
        <Marker 
           title={'Global Marketing Solutions'}
           name={'GMS'}
        />
 
        {/* <InfoWindow onClose={this.onInfoWindowClose}> */}
        <InfoWindow visible={true}>
        </InfoWindow>
      </Map>
    );
}
 
export default GoogleApiWrapper({
  apiKey: ("AIzaSyCUQNJ85alx1VIjIjvY04p3i3HYgpHDtqg")
})(MapContainer)