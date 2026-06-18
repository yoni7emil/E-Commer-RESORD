// src/components/ProductCard.jsx
const ProductCard = ({ producto, onOpenModal }) => {
  return (
    <div className="card h-100 shadow-sm">
      <img 
        src={producto.imagen} 
        className="card-img-top" 
        alt={producto.nombre} 
        style={{ height: '200px', objectFit: 'cover' }} 
      />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{producto.nombre}</h5>
        <p className="card-text text-muted">{producto.categoria}</p>
        <p className="fw-bold fs-5 mt-auto">${producto.precio}</p>
        
        <button 
          className="btn btn-outline-primary mt-2" 
          onClick={() => onOpenModal(producto)}
        >
          Ver Detalle
        </button>
      </div>
    </div>
  );
};

export default ProductCard;