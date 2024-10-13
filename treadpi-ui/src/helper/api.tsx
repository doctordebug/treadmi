import { Status } from "./interfaces";

const domain = `http://${window.location.hostname}`; 
let port = 5000;

function api<T>(url: string): Promise<T> {
  return fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.statusText)
      }
      return response.json() as Promise<T>
    })
}



export const updateStatus  = () => {
    const res = api<Status>(`${domain}:${port}/api/status`)
    return res;
  };


export  const start = ()=> {
    const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ })
};
fetch(`${domain}:${port}/api/start`, requestOptions)
}
export const pause = ()=> {
    const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ })
};
fetch(`${domain}:${port}/api/pause`, requestOptions)

}
export const stop = ()=> {
    const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ })
};
fetch(`${domain}:${port}/api/stop`, requestOptions)

}

export const setSpeed = (speed:number)=> {
  const requestOptions = {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ speed: speed})
};
fetch(`${domain}:${port}/api/speed`, requestOptions)

}