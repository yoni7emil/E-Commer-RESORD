import { useState } from 'react';
import ProductCard from '../../components/ProductCard/ProductCard';
import ProductModal from '../../components/ProductModal/ProductModal';
import './Catalogo.css'; // Estilo específico
// En este componente, se reciben los productos filtrados y la función agregarAlCarrito como props.
const Catalogo = ({ productosFiltrados, agregarAlCarrito }) => {
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);

  const handleOpenModal = (producto) => {
    setProductoSeleccionado(producto);
  };

  const handleCloseModal = () => {
    setProductoSeleccionado(null);
  };
// define la estructura del catálogo, incluyendo la lista de productos y el modal.
  return (
    <div className="catalogo-container">
      <h2 className="catalogo-title">Catálogo de Indumentaria</h2>

      <div className="product-grid">
        {productosFiltrados.map((producto) => (
          <ProductCard
            key={producto.id}
            producto={producto}
            onOpenModal={handleOpenModal}
          />
        ))}
      </div>

      {productoSeleccionado && (
        <ProductModal
          producto={productoSeleccionado}
          onClose={handleCloseModal}
          onAgregar={agregarAlCarrito}
        />
      )}
    </div>
  );
};

export default Catalogo;