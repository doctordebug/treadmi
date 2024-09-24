import { Status } from "./interfaces";

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
    const res = api<Status>("http://127.0.0.1:5000/api/status")
    return res;
  };


export  const start = ()=> {
    const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ })
};
fetch('http://127.0.0.1:5000/api/start', requestOptions)
}
export const pause = ()=> {
    const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ })
};
fetch('http://127.0.0.1:5000/api/pause', requestOptions)

}
export const stop = ()=> {
    const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ })
};
fetch('http://127.0.0.1:5000/api/stop', requestOptions)

}

export const setSpeed = (speed:number)=> {
  const requestOptions = {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ speed: speed})
};
fetch('http://127.0.0.1:5000/api/speed', requestOptions)

}