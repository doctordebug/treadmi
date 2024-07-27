import * as React from 'react';
import Button from '../elements/Button';

const StartStopComponent = () => {

    const start = ()=> {alert("start")}
    const pause = ()=> {alert("pause")}
    const stop = ()=> {alert("stop")}

    return (
        <div className='row center'>
            <Button onClick={pause}>Pause</Button>
            <Button onClick={start} type='primary'>Start</Button>
            <Button onClick={stop}>Stop</Button>
        </div>
    )
}

export default StartStopComponent;