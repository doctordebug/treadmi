import * as React from 'react';
import "./styles/style.css"
import { QueryClient, QueryClientProvider } from 'react-query'
 
import StartStopComponent from './components/StartStopComponent';
import StatusComponent from './components/StatusComponent';

  export default function App() {
    const queryClient = new QueryClient()

    return (
      <div className="appLayout">
        <QueryClientProvider client={queryClient} >
        <StatusComponent/>
        <StartStopComponent/>

        </QueryClientProvider>

      </div>
    );
  }