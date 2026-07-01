import { NavLink } from 'react-router-dom';
import logo from '../../assets/IMG_1359.PNG'; // Asegúrate que el nombre sea exacto
import './Navbar.css'; // nuevo estilo

//EN este componente, se recibe el carrito y la función setTerminoBusqueda como props.
const Navbar = ({ carrito, setTerminoBusqueda }) => {
  return (
    <nav className="navbar-custom">
      <div className="container">
        <NavLink className="navbar-brand" to="/">
          <img src={logo} alt="Logo" className="navbar-logo" />
        </NavLink>
        {/* Aquí se agregan los enlaces de navegación y la barra de búsqueda */}
        <div className="navbar-links">
          <NavLink className="nav-link" to="/catalogo">Catálogo</NavLink>
          <NavLink className="nav-link" to="/contacto">Contacto</NavLink>
          <NavLink className="nav-link cart-link" to="/carrito">
            Carrito ({carrito.length})
          </NavLink>
        </div>
          {/* Barra de búsqueda */}
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