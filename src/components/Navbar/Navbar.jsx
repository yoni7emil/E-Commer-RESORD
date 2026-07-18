import { NavLink } from 'react-router-dom';
import logo from '../../assets/IMG_1359-r.PNG';
import './Navbar.css'; // nuevo estilo

//EN este componente, se recibe el carrito y la función setTerminoBusqueda como props.
const Navbar = ({ carrito, setTerminoBusqueda }) => {
  return (
    <nav className="navbar-custom">
      {/* Sección Izquierda: Buscador */}
      <div className="nav-section left">
        <input className="search-bar" type="search" placeholder="Buscar..." onChange={(e) => setTerminoBusqueda(e.target.value)} />
      </div>

      {/* Sección Centro: Logo */}
      <div className="nav-section center">
        <NavLink to="/">
          <img src={logo} alt="Logo" className="navbar-logo" />
        </NavLink>
      </div>

      {/* Sección Derecha: Links y Carrito */}
      <div className="nav-section right">
        <NavLink className="nav-link" to="/catalogo">Catálogo</NavLink>
        <NavLink className="nav-link" to="/contacto">Contacto</NavLink>
        <NavLink className="nav-link cart-link" to="/carrito">
          Carrito ({carrito.length})
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;