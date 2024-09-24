import * as React from 'react';
import { Status } from '../helper/interfaces';
import { pretifyMeters, pretifySeconds } from '../helper/utils';
import CurrentSpeedComponent from './CurrentSpeedComponent';
import CurrentTimeComponent from './CurrentTimeComponent';
import CurrentDistanceComponent from './CurrentDistanceComponent';
import Row from './UIElements.tsx/Row';
import { setSpeed } from '../helper/api';
import Button from '../elements/Button';

interface ISetSpeedProps {
  speed: number
}

const SetSpeedComponent = (props:ISetSpeedProps) => {

    return (
      <Row justifyContent='center'>
        <Button onClick={() => setSpeed(props.speed)} type='primary' variant='small'>{props.speed + ""}</Button>
      </Row>
    )
}

export default SetSpeedComponent;