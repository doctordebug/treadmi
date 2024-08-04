import * as React from 'react';
import { useState, useEffect } from "react";
import { useQuery } from "react-query";
import StatusComponent from './StatusComponent';
import StartStopComponent from './StartStopComponent';
import { updateStatus } from '../helper/api';

const AppLayout = () => {


  const {data} = useQuery("status", updateStatus, {
    refetchInterval: 1000
  });

  return(      
  <div className="appLayout">
    <StatusComponent treadmillStatus={data}/>
    <StartStopComponent/>
  </div>
)
}

export default AppLayout;