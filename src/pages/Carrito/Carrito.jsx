import { useState } from 'react';
import './Carrito.css';

const Carrito = ({ carrito, eliminarDelCarrito, ajustarCantidad }) => {
  const [datosUsuario, setDatosUsuario] = useState({ nombre: '', direccion: '' });
  const total = carrito.reduce((sum, item) => sum + (item.precio * item.cantidad), 0);

  const finalizarCompra = () => {
    const textoCarrito = carrito.map(p => `- ${p.nombre} (x${p.cantidad})`).join('\n');
    const mensaje = `Hola, mi nombre es ${datosUsuario.nombre}. Mi pedido:\n${textoCarrito}\n\nDirección: ${datosUsuario.direccion}`;
    const mensajeCodificado = encodeURIComponent(mensaje);
    window.open(`https://wa.me/5493764882325?text=${mensajeCodificado}`, '_blank');
  };
 
  return (
    <div className="carrito-container">
      <h2 className="carrito-title">Tu Carrito</h2>
      
      {carrito.map(item => (
        <div key={item.id} className="carrito-item">
          <img src={item.imagen} alt={item.nombre} className="item-image" />
          <div className="item-details">
            <h5>{item.nombre}</h5>
            <p className="item-price">USD {item.precio}</p>
            <p>Talle: <strong>{item.talle}</strong></p>
            <div className="quantity-controls">
              <button className="qty-btn" onClick={() => ajustarCantidad(item.id, -1)}>-</button>
              <span className="qty-val">{item.cantidad}</span>
              <button className="qty-btn" onClick={() => ajustarCantidad(item.id, 1)}>+</button>
            </div>
          </div>
          <button className="remove-btn" onClick={() => eliminarDelCarrito(item.id)}>Quitar</button>
        </div>
      ))}

      <div className="checkout-section">
        <h4>Datos de envío</h4>
        <input 
            className="input-field" 
            type="text" 
            placeholder="Tu nombre" 
            onChange={(e) => setDatosUsuario({...datosUsuario, nombre: e.target.value})} 
        />
        <input 
            className="input-field" 
            type="text" 
            placeholder="Dirección" 
            onChange={(e) => setDatosUsuario({...datosUsuario, direccion: e.target.value})} 
        />
        
        <div className="total-container">
          <h3>Total: USD {total.toFixed(2)}</h3>
          <button className="checkout-btn" onClick={finalizarCompra}>
            Finalizar Compra
          </button>
        </div>
      </div>
    </div>
  );    
};

export default Carrito;