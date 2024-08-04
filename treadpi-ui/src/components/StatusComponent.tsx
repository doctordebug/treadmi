import * as React from 'react';
import { Status } from '../helper/interfaces';
import { pretifyMeters, pretifySeconds } from '../helper/utils';
import CurrentSpeedComponent from './CurrentSpeedComponent';
import CurrentTimeComponent from './CurrentTimeComponent';
import CurrentDistanceComponent from './CurrentDistanceComponent';

interface ITreadmillStatus {
  treadmillStatus: Status
}

const StatusComponent = (props:ITreadmillStatus) => {

    return (
      <>
        <CurrentSpeedComponent speed={props.treadmillStatus?.speed}/>
        <CurrentDistanceComponent distance={props.treadmillStatus?.meters}/>
        <CurrentTimeComponent time={props.treadmillStatus?.time_in_millis}/>
      </>
    )
}

export default StatusComponent;