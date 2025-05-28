import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { AuthContextProvider } from './components/Auth/AuthContext';
import NAVBAR from './components/layouts/NAVBAR.jsx';
import FOOTER from './components/layouts/FOOTER.jsx';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
        <NAVBAR />
        <App />
        <ToastContainer position="bottom-right" autoClose={3000} />
        <FOOTER />
      </AuthContextProvider>
    </BrowserRouter>
  </StrictMode>
);