import { useState } from 'react'; 


// Modal para mostrar detalles del producto y permitir seleccionar talle
const ProductModal = ({ producto, onClose, onAgregar }) => {
  // Por defecto, selecciona el primer talle disponible
  const [talleSeleccionado, setTalleSeleccionado] = useState(producto.talleSeleccionado);
  if (!producto) return null;

  const handleAgregar = () => {
    // Envia el producto original MÁS el talle seleccionado
    onAgregar({ ...producto, talle: talleSeleccionado });
    onClose();
  };

  // Modal con fondo oscuro y contenido centrado
  return (
    <div className="modal show d-block" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
      <div className="modal-dialog">
        <div className="modal-content">

          <div className="modal-header">
            <h5 className="modal-title">{producto.nombre}</h5>
            <button className="btn-close" onClick={onClose}></button>
          </div>

          {/* Cuerpo del modal con imagen, detalles y selector de talles */}
          <div className="modal-body">
            <img src={producto.imagen} className="img-fluid mb-3" alt={producto.nombre} />
            <p><strong>Categoría:</strong> {producto.categoria}</p>
            <p><strong>Detalle:</strong> {producto.detalle}</p>
            
            {/* Selector de talles en el modal */}
            <div className="mb-3">
              <label className="fw-bold d-block mb-2">Talle:</label>
              {producto.talles.map(talle => (
                <button
                  key={talle}
                  className={`btn btn-sm me-2 ${talleSeleccionado === talle ? 'btn-dark' : 'btn-outline-dark'}`}
                  onClick={() => setTalleSeleccionado(talle)}
                >
                  {talle}
                </button>
              ))}
            </div>

                {/* Precio destacado en el modal */}
            <p className="fs-4 fw-bold text-primary">USD {producto.precio}</p>
          </div>
          <div className="modal-footer">
            <button className="btn btn-secondary" onClick={onClose}>Cerrar</button>
            <button className="btn btn-primary" onClick={handleAgregar}>Agregar al Carrito</button>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default ProductModal;