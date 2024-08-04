import * as React from 'react';
import { Status } from '../helper/interfaces';
import { pretifyMeters, pretifySeconds } from '../helper/utils';
import ValueWithLabel from './UIElements.tsx/ValueWithLabel';

interface ITreadmillStatus {
  speed: number
}

const CurrentSpeedComponent = (props:ITreadmillStatus) => {

    return (
        <ValueWithLabel 
        unit="KMH"
        value={pretifyMeters(props.speed)}
        description="Speed"
        />
    )
}

export default CurrentSpeedComponent;