import * as React from 'react';
import Button from '../elements/Button';
import { pause, start, stop } from '../helper/api';

const StartStopComponent = () => {

    return (
        <div className='row center'>
            <Button onClick={pause}>Pause</Button>
            <Button onClick={start} type='primary'>Start</Button>
            <Button onClick={stop}>Stop</Button>
        </div>
    )
}

export default StartStopComponent;