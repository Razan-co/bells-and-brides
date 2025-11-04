import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom';
import { HeadProvider } from 'react-head';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <HeadProvider>
    <App />
    </HeadProvider>
    </BrowserRouter>
  </StrictMode>,
)
