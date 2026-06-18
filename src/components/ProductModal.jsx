// src/components/ProductModal.jsx
const ProductModal = ({ producto, onClose }) => {
  if (!producto) return null;

  return (
    <div className="modal show d-block" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{producto.nombre}</h5>
            <button className="btn-close" onClick={onClose}></button>
          </div>
          <div className="modal-body">
            <img src={producto.imagen} className="img-fluid mb-3" alt={producto.nombre} />
            <p><strong>Categoría:</strong> {producto.categoria}</p>
            <p><strong>Detalle:</strong> {producto.detalle}</p>
            <p className="fs-4 fw-bold text-primary">USD {producto.precio}</p>
          </div>
          <div className="modal-footer">
            <button className="btn btn-secondary" onClick={onClose}>Cerrar</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;