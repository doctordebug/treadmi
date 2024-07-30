import * as React from 'react';
import { useState, useEffect } from "react";
import { useQuery } from "react-query";

const StatusComponent = () => {

    const updateStatus = async () => {
        const res = await fetch("http://127.0.0.1:5000/api/status");
        return await res.json();
      };
    const {data} = useQuery("status", updateStatus, {
        refetchInterval: 2000
      });
    console.log(data)

    
    return (
        <h1>{data?.speed} KMH</h1>
    )
}

export default StatusComponent;