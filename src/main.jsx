import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

// estilos personalizados
import './styles/variables.css'; 
import './styles/global.css'; // archivo (antiguo index.css)

import App from './App.jsx';

//  ¡IMPORTANTE! Elimine la importación de 'bootstrap/dist/css/bootstrap.min.css'
// para que el diseño minimalista sea el único que controle la estética.
//  Ahora, el diseño de la aplicación se basa únicamente en los estilos definidos en 'variables.css' y 'global.css'.

// ¡Importante! Modifique el ruteo por que github pages no permite que la página de inicio sea la primera en cargarse, y el catálogo sea accesible desde un enlace en la barra de navegación.

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);