import { StrictMode } from 'react' //   componente StrictMode de React 
import { createRoot } from 'react-dom/client' //   función createRoot para renderizar la aplicación
import './index.css' //   archivo de estilos globales
import App from './App.jsx' //   componente principal de la aplicación
import 'bootstrap/dist/css/bootstrap.min.css'; //  estilos de Bootstrap

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
