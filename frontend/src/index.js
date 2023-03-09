import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ContractContextProvider } from './context/contractContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ContractContextProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ContractContextProvider>
);
