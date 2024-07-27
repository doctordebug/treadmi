import * as React from 'react';
import "./styles/style.css"
import StartStopComponent from './components/StartStopComponent';
import SpeedComponent from './components/SpeedComponent';

  export default function App() {

    return (
      <div className="appLayout">
        <SpeedComponent/>
        <StartStopComponent/>
      </div>
    );
  }