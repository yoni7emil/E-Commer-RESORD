import { useState } from 'react';
import { productos } from '../data/productos'; // Importamos tu nuevo archivo de datos
import ProductCard from '../components/ProductCard';
import ProductModal from '../components/ProductModal';

const Catalogo = () => {
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);

  const handleOpenModal = (producto) => {
    setProductoSeleccionado(producto);
  };

  const handleCloseModal = () => {
    setProductoSeleccionado(null);
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Catálogo de Indumentaria</h2>
      <div className="row">
        {/* Usamos el array 'productos' directamente */}
        {productos.map((producto) => (
          <div key={producto.id} className="col-md-4 mb-4">
            <ProductCard 
              producto={producto} 
              onOpenModal={handleOpenModal} 
            />
          </div>
        ))}
      </div>

      {/* Modal para mostrar detalles del producto */}
      {productoSeleccionado && (
        <ProductModal
          producto={productoSeleccionado}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
};

export default Catalogo;