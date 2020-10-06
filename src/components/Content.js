import React, { useState } from 'react';

function Content() {

    const [pos, setPos] = useState(0);

    function getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
        } else {
            alert("Geolocation is not supported by this browser.");
        }
    }

    getLocation();

    function showPosition(position) {
        setPos(position.coords);
    }

    return (
        <div>
        <h2>Latitude: {pos.latitude}</h2>
        <h2>Longitude: {pos.longitude}</h2>
        </div>
    )
}

export default Content;
