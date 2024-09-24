import * as React from 'react';
import { Status } from '../helper/interfaces';
import { pretifyMeters, pretifySeconds } from '../helper/utils';
import ValueWithLabel from './UIElements.tsx/ValueWithLabel';

interface ITreadmillStatus {
  time: number
}

const CurrentTimeComponent = (props:ITreadmillStatus) => {

    return (
      <ValueWithLabel
      unit="H"
      value={pretifySeconds(props.time)}
      description="Time"
      />
    )
}

export default CurrentTimeComponent;