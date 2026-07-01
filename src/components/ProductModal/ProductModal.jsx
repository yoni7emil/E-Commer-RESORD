import { useState } from 'react';
import './ProductModal.css';

// En este componente, se recibe el producto, la función onClose y la función onAgregar como props.
const ProductModal = ({ producto, onClose, onAgregar }) => {
  const [talleSeleccionado, setTalleSeleccionado] = useState(producto.talleSeleccionado);
  
  if (!producto) return null;

  const handleAgregar = () => {
    onAgregar({ ...producto, talle: talleSeleccionado });
    onClose();
  };

// Aquí se define la estructura del modal, incluyendo la imagen del producto, los detalles, el selector de talles y el botón para agregar al carrito.
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container" onClick={e => e.stopPropagation()}>
        
        <button className="close-btn" onClick={onClose}>&times;</button>
        
        <div className="modal-content-inner">
          <img src={producto.imagen} alt={producto.nombre} className="modal-image" />
          
          <div className="modal-details">
            <h2>{producto.nombre}</h2>
            <p className="category">{producto.categoria}</p>
            <p className="description">{producto.detalle}</p>
            
            <div className="talle-selector">
              <span className="label">Talla:</span>
              {producto.talles.map(talle => (
                <button
                  key={talle}
                  className={`talle-btn ${talleSeleccionado === talle ? 'active' : ''}`}
                  onClick={() => setTalleSeleccionado(talle)}
                >
                  {talle}
                </button>
              ))}
            </div>

            <p className="price">USD {producto.precio}</p>
            
            <button className="add-btn" onClick={handleAgregar}>
              Agregar al Carrito
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;