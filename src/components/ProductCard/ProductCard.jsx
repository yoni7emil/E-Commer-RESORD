import { useState } from 'react';
import './ProductCard.css'; // Importamos el nuevo estilo

//En este componente, se recibe el producto y la función onOpenModal como props. La función onOpenModal se llama cuando el usuario hace clic en el botón "Ver Detalle"
const ProductCard = ({ producto, onOpenModal }) => {
  const [talleSeleccionado, setTalleSeleccionado] = useState(producto.talles[0]);

  return (
    <div className="product-card">
      <img src={producto.imagen} alt={producto.nombre} className="product-image" />
      {/* Aquí se agregan los detalles del producto, incluyendo el nombre, precio y selector de talles */}
      <div className="product-info">
        <h3 className="product-title">{producto.nombre}</h3>
        
        <div className="talle-selector">
          <span className="label">Talla:</span>
          <div className="talle-buttons">
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
        </div>

        <p className="product-price">${producto.precio}</p>
        {/* Botón para abrir el modal con los detalles del producto */}
        <button 
          className="detail-btn" 
          onClick={() => onOpenModal({...producto, talleSeleccionado})}
        >
          Ver Detalle
        </button>
      </div>
    </div>
  );
};

export default ProductCard;