import * as React from 'react';
import Button from '../elements/Button';

const StartStopComponent = () => {
    //TODO: Build conveniience function for post calls
    const start = ()=> {
        const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ })
    };
    fetch('http://127.0.0.1:5000/api/start', requestOptions)
    }
    const pause = ()=> {
        const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ })
    };
    fetch('http://127.0.0.1:5000/api/pause', requestOptions)

    }
    const stop = ()=> {
        const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ })
    };
    fetch('http://127.0.0.1:5000/api/stop', requestOptions)

    }

    return (
        <div className='row center'>
            <Button onClick={pause}>Pause</Button>
            <Button onClick={start} type='primary'>Start</Button>
            <Button onClick={stop}>Stop</Button>
        </div>
    )
}

export default StartStopComponent;