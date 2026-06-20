import { useState } from 'react';// Importa el hook useState de React para manejar el estado del carrito y el término de búsqueda
import { BrowserRouter, Routes, Route } from 'react-router-dom';// Importa los componentes necesarios de React Router
import Navbar from './components/Navbar';// Importa el componente Navbar
import Home from './pages/Home';// Importa el componente Home
import Catalogo from './pages/Catalogo';// Importa el componente Catalogo
import Contacto from './pages/Contacto';// Importa el array de productos
import { productos } from './data/productos'; // Importa el array de productos
import Carrito from './pages/Carrito'; // Importa el componente Carrito

function App() {
  const [carrito, setCarrito] = useState([]);

  // carrito
  const agregarAlCarrito = (producto) => {
    const productoExistente = carrito.find(item => item.id === producto.id);
  // Si el producto ya está en el carrito, incrementa su cantidad
    if (productoExistente) {
      setCarrito(carrito.map(item => 
        item.id === producto.id ? { ...item, cantidad: item.cantidad + 1 } : item
      ));
    } else {
      setCarrito([...carrito, { ...producto, cantidad: 1 }]);
    }
  };
//Busquueda
  const [terminoBusqueda, setTerminoBusqueda] = useState('');

// Filtrar productos
  const productosFiltrados = productos.filter(p => 
    p.nombre.toLowerCase().includes(terminoBusqueda.toLowerCase())
  );
// Elimina producto del carrito
  const eliminarDelCarrito = (id) => {
    setCarrito(carrito.filter(item => item.id !== id));
  };
// Ajusta la cantidad de un producto en el carrito
  const ajustarCantidad = (id, delta) => {
    setCarrito(carrito.map(item => 
      item.id === id ? { ...item, cantidad: Math.max(1, item.cantidad + delta) } : item
    ));
  };
    // Renderiza la aplicación con el enrutamiento configurado
  return (
    <BrowserRouter>
      <Navbar carrito={carrito} setTerminoBusqueda={setTerminoBusqueda} />

      <Routes>

        <Route path="/carrito" element={ <Carrito carrito={carrito}eliminarDelCarrito={eliminarDelCarrito} ajustarCantidad={ajustarCantidad} />}/>  
        <Route path="/" element={<Home />} />
        <Route path="/catalogo" element={<Catalogo productosFiltrados={productosFiltrados} agregarAlCarrito={agregarAlCarrito} />} />       
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/carrito" element={<Carrito carrito={carrito} />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;