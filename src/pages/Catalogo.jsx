import { useState } from 'react';
import ProductCard from '../components/ProductCard';
import ProductModal from '../components/ProductModal';

// Componente Catalogo que muestra los productos filtrados y permite agregar al carrito
const Catalogo = ({ productosFiltrados, agregarAlCarrito }) => {

  const [productoSeleccionado, setProductoSeleccionado] = useState(null);

// abrir el modal con los detalles del producto seleccionado
  const handleOpenModal = (producto) => {
    setProductoSeleccionado(producto);
  };

  //cerrar el modal
  const handleCloseModal = () => {
    setProductoSeleccionado(null);
  };
// Renderiza el catálogo de productos y el modal si hay un producto seleccionado
  return (
    <div className="container mt-5">
      <h2 className="mb-4">Catálogo de Indumentaria</h2>

      <div className="row">
        {productosFiltrados.map((producto) => (
          <div key={producto.id} className="col-md-4 mb-4">
            <ProductCard
              producto={producto}
              onOpenModal={handleOpenModal}
            />
          </div>
        ))}
      </div>
{/* Si hay un producto seleccionado, muestra el modal con sus detalles */}
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