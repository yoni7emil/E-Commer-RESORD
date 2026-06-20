import { useState } from 'react'; // Importa el hook useState de React para manejar el estado del carrito y los datos del usuario
 
const Carrito = ({ carrito, eliminarDelCarrito, ajustarCantidad }) => {
 //usuario
  const [datosUsuario, setDatosUsuario] = useState({ nombre: '', direccion: '' });
  //total
  const total = carrito.reduce((sum, item) => sum + (item.precio * item.cantidad), 0);
// Función para finalizar la compra y abrir WhatsApp con el mensaje prellenado
  const finalizarCompra = () => {
  const textoCarrito = carrito.map(p => `- ${p.nombre} (x${p.cantidad})`).join('\n'); // Usa \n aquí
  const mensaje = `Hola, mi nombre es ${datosUsuario.nombre}. Mi pedido:\n${textoCarrito}\n\nDirección: ${datosUsuario.direccion}`;
  
  // Al pasar esto por encodeURIComponent, él mismo convertirá los \n a %0A automáticamente
  const mensajeCodificado = encodeURIComponent(mensaje);

  // Abre WhatsApp con el mensaje prellenado en una nueva pestaña en el chat del número especificado (ajusta el número según sea necesario)=5493764
  window.open(`https://wa.me/5493764882325?text=${mensajeCodificado}`, '_blank');
};
 
  return (
    <div className="container mt-5">
      <h2>Tu Carrito</h2>
      
      {/* Lista de productos */}
      {carrito.map(item => (
        <div key={item.id} className="d-flex align-items-center mb-3 border-bottom pb-3">
          <img src={item.imagen} alt={item.nombre} style={{ width: '80px' }} />
          <div className="ms-3 flex-grow-1">
            <h5>{item.nombre}</h5>
            <p>USD {item.precio}</p>
            <p className="mb-0">Talle: <strong>{item.talle}</strong></p>
            <button className="btn btn-sm btn-outline-secondary" onClick={() => ajustarCantidad(item.id, -1)}>-</button>
            <span className="mx-2">{item.cantidad}</span>
            <button className="btn btn-sm btn-outline-secondary" onClick={() => ajustarCantidad(item.id, 1)}>+</button>
          </div>
          <button className="btn btn-danger" onClick={() => eliminarDelCarrito(item.id)}>Quitar</button>
        </div>
      ))}

      {/* Formulario de datos (fuera del .map) */}
      <div className="my-4">
        <h4>Datos de envío</h4>
        <input 
            className="form-control mb-2" 
            type="text" 
            placeholder="Tu nombre" 
            onChange={(e) => setDatosUsuario({...datosUsuario, nombre: e.target.value})} 
        />
        <input 
            className="form-control mb-2" 
            type="text" 
            placeholder="Dirección" 
            onChange={(e) => setDatosUsuario({...datosUsuario, direccion: e.target.value})} 
        />
      </div>
{/* Total y botón de finalizar compra */}
      <div className="mt-4">
        <h3>Total: USD {total.toFixed(2)}</h3>
        <button className="btn btn-success btn-lg" onClick={finalizarCompra}>
          Finalizar Compra por WhatsApp
        </button>
      </div>
    </div>
  );    
};

export default Carrito;