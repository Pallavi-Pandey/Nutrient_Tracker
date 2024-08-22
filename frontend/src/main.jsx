// src/index.js
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { NutritionalProvider } from './context/NutritionalContext';
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NutritionalProvider>
      <App />
    </NutritionalProvider>
  </StrictMode>
);
