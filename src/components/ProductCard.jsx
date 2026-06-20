// src/components/ProductCard.jsx
import { useState } from 'react';

// Componente para mostrar cada producto en formato tarjeta
const ProductCard = ({ producto, onOpenModal }) => {
  const [talleSeleccionado, setTalleSeleccionado] = useState(producto.talles[0]);

  return (
    <div className="card h-100 shadow-sm">
      <img src={producto.imagen} className="card-img-top" alt={producto.nombre} style={{ height: '200px', objectFit: 'cover' }} />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{producto.nombre}</h5>
        
        {/* Selector de talles */}
        <div className="my-2">
          <small className="d-block text-muted">TALLA:</small>
          <div className="btn-group" role="group">
            {producto.talles.map(talle => (
              <button 
                key={talle}
                type="button"
                className={`btn btn-outline-dark btn-sm ${talleSeleccionado === talle ? 'active' : ''}`}
                onClick={() => setTalleSeleccionado(talle)}
              >
                {talle}
              </button>
            ))}
          </div>
        </div>

        <p className="fw-bold fs-5 mt-auto">${producto.precio}</p>
        
        <button className="btn btn-outline-primary mt-2" onClick={() => onOpenModal({...producto, talleSeleccionado})}>
          Ver Detalle
        </button>
      </div>
    </div>
  );
};

export default ProductCard;