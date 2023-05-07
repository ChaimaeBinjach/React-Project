import {
  QueryClient, // Importing QueryClient component from '@tanstack/react-query' library
  QueryClientProvider, // Importing QueryClientProvider component from '@tanstack/react-query' library
} from '@tanstack/react-query';

import { ReactQueryDevtools } from '@tanstack/react-query-devtools'; // Importing ReactQueryDevtools component from '@tanstack/react-query-devtools' library

import React from 'react'; // Importing React library
import ReactDOM from 'react-dom/client'; // Importing ReactDOM library

import App from './App.jsx'; // Importing App component from './App.jsx' file
import { BrowserRouter } from 'react-router-dom'; // Importing BrowserRouter component from 'react-router-dom' library

const queryClient = new QueryClient(); // Creating a new instance of QueryClient

ReactDOM.createRoot(document.getElementById('root')).render( // Rendering the React application
// Enabling strict mode for React
// Wrapping the app in BrowserRouter component
// Wrapping the app in QueryClientProvider component, and providing the QueryClient instance to it
// Rendering the App component
// Rendering the ReactQueryDevtools component with initialIsOpen prop set to false
  <React.StrictMode>   
    <BrowserRouter>   
      <QueryClientProvider client={queryClient}>  
        <App />  
        <ReactQueryDevtools initialIsOpen={false} />  
      </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
