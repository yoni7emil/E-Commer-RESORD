import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

// 1. Importa tus estilos personalizados
import './styles/variables.css'; 
import './styles/global.css'; // Asegúrate de que este es el nombre de tu archivo (antiguo index.css)

import App from './App.jsx';

// 2. ¡IMPORTANTE! Hemos eliminado la importación de 'bootstrap/dist/css/bootstrap.min.css'
// para que el diseño minimalista sea el único que controle la estética.

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);