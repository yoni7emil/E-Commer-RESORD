import { HashRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import { productos } from './data/productos';

// Importación de Estilos Globales
import './styles/global.css';
// Importación de Componentes
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Catalogo from './pages/Catalogo/Catalogo';
import Carrito from './pages/Carrito/Carrito';
import Contacto from './pages/Contacto/Contacto';

function App() {
  const [carrito, setCarrito] = useState([]);
  const [terminoBusqueda, setTerminoBusqueda] = useState('');

//  filtro directamente. 

const productosFiltrados = productos.filter(p => 
  p.nombre.toLowerCase().includes(terminoBusqueda.toLowerCase())
);


  const agregarAlCarrito = (producto) => {
    setCarrito([...carrito, { ...producto, cantidad: 1 }]);
  };

  const eliminarDelCarrito = (id) => {
    setCarrito(carrito.filter(item => item.id !== id));
  };

  const ajustarCantidad = (id, delta) => {
    setCarrito(carrito.map(item => 
      item.id === id ? { ...item, cantidad: Math.max(1, item.cantidad + delta) } : item
    ));
  };


  return (
    <HashRouter>
      <Navbar carrito={carrito} setTerminoBusqueda={setTerminoBusqueda} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalogo" element={
          <Catalogo 
            productosFiltrados={productosFiltrados} 
            agregarAlCarrito={agregarAlCarrito} 
          />
        } />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/carrito" element={
          <Carrito 
            carrito={carrito} 
            eliminarDelCarrito={eliminarDelCarrito} 
            ajustarCantidad={ajustarCantidad} 
          />
        } />
      </Routes>
    </HashRouter>
  );
}

export default App;
