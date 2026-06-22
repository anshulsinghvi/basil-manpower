import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { AppProvider } from './context/AppContext';
import './index.css';
import ScrollToTop from "./components/ScrollToTop";                     
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppProvider>
      <BrowserRouter>
      <ScrollToTop />
        <App />
      </BrowserRouter>
    </AppProvider>
  </React.StrictMode>
);
