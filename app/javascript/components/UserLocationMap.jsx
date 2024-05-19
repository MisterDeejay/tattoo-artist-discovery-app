import React, { useState, useEffect } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '400px',
  height: '400px'
};

function UserLocationMap() {
  const [location, setLocation] = useState({ lat: -34.397, lng: 150.644 }); // Default location

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude
          });
        },
        () => {
          alert('Geolocation failed, using default location.');
        }
      );
    } else {
      alert('Browser does not support Geolocation, using default location.');
    }
  }, []);

  return (
    <LoadScript
      googleMapsApiKey="AIzaSyBH1U5tM0UQOtVVJVj0FC_nQkshmQceSiU">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={location}
        zoom={10}
      >
        {/* Marker at user's location */}
        <Marker position={location} />
      </GoogleMap>
    </LoadScript>
  );
}

export default UserLocationMap;
