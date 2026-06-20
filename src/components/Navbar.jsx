import { NavLink } from 'react-router-dom';
// Componente de navegación con enlaces a diferentes secciones y búsqueda
const Navbar = ({ carrito, setTerminoBusqueda }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <NavLink className="navbar-brand" to="/">Mi Tienda</NavLink>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/catalogo">Catálogo</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contacto">Contacto</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-info" to="/carrito">
                Carrito ({carrito.length})
              </NavLink>
            </li>
            <form className="d-flex mx-auto">
              <input 
                className="form-control me-2" 
                type="search" 
                placeholder=" Buscar productos..." 
                onChange={(e) => setTerminoBusqueda(e.target.value)}
              />
            </form>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;