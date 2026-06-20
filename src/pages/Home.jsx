// src/pages/Home.jsx
import { Link } from 'react-router-dom';

// Componente Home que muestra una bienvenida y un enlace al catálogo
const Home = () => {
  return (
    <div className="container mt-5">
      <div className="p-5 mb-4 bg-light rounded-3 shadow">
        <div className="container-fluid py-5">
          <h1 className="display-5 fw-bold">Bienvenido a nuestra Tienda de Moda Masculina</h1>
          <p className="col-md-8 fs-4">
            Explora nuestra colección exclusiva de indumentaria. Calidad, estilo y las últimas tendencias seleccionadas especialmente para ti.
          </p>
          <hr className="my-4" />
          <p>¿Buscas renovar tu guardarropa? Accede a nuestro catálogo completo.</p>
          <Link to="/catalogo" className="btn btn-primary btn-lg">Ver Catálogo</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;