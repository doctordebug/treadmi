import * as React from 'react';
import { useState, useEffect } from "react";

const SpeedComponent = () => {

    const [currentKmh, setCurrentKmh] = useState(0)

    const updateStatus = ()=> {
        const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    };
    fetch('http://127.0.0.1:5000/api/status', requestOptions)
        .then(response => response.json())
        .then(data => setCurrentKmh(data.speed));
    }

    useEffect(() => {

        updateStatus()
    }, [currentKmh])

    
    
    return (
        <h1>{currentKmh} KMH</h1>
    )
}

export default SpeedComponent;