import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';

import { AuthProvider } from './context/AuthContext'; // ✅ Import du provider d’auth

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider> {/* ✅ AuthContext enveloppe toute l'application */}
      <App />
    </AuthProvider>
  </StrictMode>,
);
