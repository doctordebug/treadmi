import * as React from 'react';
import "./styles/style.css"
import { QueryClient, QueryClientProvider } from 'react-query'
 
import AppLayout from './components/AppLayout';

  export default function App() {
    const queryClient = new QueryClient()

    return (
      <QueryClientProvider client={queryClient} >
        <AppLayout/>
      </QueryClientProvider>
    );
  }