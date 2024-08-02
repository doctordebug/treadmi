import * as React from 'react';
import { useState, useEffect } from "react";
import { useQuery } from "react-query";

const StatusComponent = () => {

    const updateStatus = async () => {
        const res = await fetch("http://127.0.0.1:5000/api/status");
        return await res.json();
      };
    const {data} = useQuery("status", updateStatus, {
        refetchInterval: 1000
      });
    console.log(data)

    const pretifyMeters = (meter: number)=>{
      if(meter < 1000)
        return Math.round(meter) + "m"
      const partialMeters = meter % 1000
      return Math.round(meter / 1000) + "." + ('000'+Math.round(partialMeters)).slice(-3) + "km"
    }
    
    const pretifySeconds = (millis: number) => {
      const seconds = Math.round(millis / 1000) 
      const minutes = Math.round(seconds / 60) 
      const hours = Math.round(minutes / 60)

      return `${('0'+hours).slice(-2)}:${('0'+minutes % 60).slice(-2)}:${('0'+seconds % 60).slice(-2)}`
    }

    return (
      <>
        <h1>{data?.speed} KMH</h1>
        <h1>{pretifyMeters(data?.meters)}</h1>
        <h1>{pretifySeconds(data?.time_in_millis)}</h1>
        </>
    )
}

export default StatusComponent;