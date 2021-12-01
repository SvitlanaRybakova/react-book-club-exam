import React from 'react';
import ReactDOM from 'react-dom';
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import "bootstrap/dist/css/bootstrap.min.css";
import './index.css';
import App from './App';


const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: 1000 * 10,
      cacheTime: 1000 * 60 * 30, // 30 mins
    },
  },
});


ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

