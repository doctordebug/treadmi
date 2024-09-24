import * as React from 'react';
import { Status } from '../helper/interfaces';
import { pretifyMeters, pretifySeconds } from '../helper/utils';
import CurrentSpeedComponent from './CurrentSpeedComponent';
import CurrentTimeComponent from './CurrentTimeComponent';
import CurrentDistanceComponent from './CurrentDistanceComponent';
import Row from './UIElements.tsx/Row';
import SetSpeedComponent from './SetSpeedComponent';

interface ITreadmillStatus {
  treadmillStatus: Status
}

const ControllComponent = (props:ITreadmillStatus) => {

    return (
      <Row justifyContent='center'>
        <SetSpeedComponent speed={6}/>
        <SetSpeedComponent speed={8}/>
        <SetSpeedComponent speed={10}/>
        <SetSpeedComponent speed={12}/>
        <SetSpeedComponent speed={14}/>
        <SetSpeedComponent speed={16}/>
        <SetSpeedComponent speed={18}/>
        <SetSpeedComponent speed={20}/>
      </Row>
    )
}

export default ControllComponent;