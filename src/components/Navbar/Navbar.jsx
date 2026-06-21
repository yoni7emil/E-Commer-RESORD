import { NavLink } from 'react-router-dom';
import logo from '../../assets/IMG_1359.PNG'; // Asegúrate que el nombre sea exacto
import './Navbar.css'; // Importamos el nuevo estilo

const Navbar = ({ carrito, setTerminoBusqueda }) => {
  return (
    <nav className="navbar-custom">
      <div className="container">
        <NavLink className="navbar-brand" to="/">
          <img src={logo} alt="Logo" className="navbar-logo" />
        </NavLink>
        
        <div className="navbar-links">
          <NavLink className="nav-link" to="/catalogo">Catálogo</NavLink>
          <NavLink className="nav-link" to="/contacto">Contacto</NavLink>
          <NavLink className="nav-link cart-link" to="/carrito">
            Carrito ({carrito.length})
          </NavLink>
        </div>

        <input 
          className="search-bar" 
          type="search" 
          placeholder="Buscar..." 
          onChange={(e) => setTerminoBusqueda(e.target.value)}
        />
      </div>
    </nav>
  );
};

export default Navbar;