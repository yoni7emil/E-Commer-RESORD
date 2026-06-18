// src/components/Navbar.jsx
import { NavLink } from 'react-router-dom';

const Navbar = ({ esVendedor, setEsVendedor }) => {
  const textoBoton = esVendedor ? 'Cambiar a Comprador' : 'Cambiar a Vendedor';
  const claseBoton = "btn btn-outline-light ms-3";

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <NavLink className="navbar-brand" to="/">Mi Tienda</NavLink>
        
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/catalogo">Catálogo</NavLink>
            </li>
            
            {esVendedor && (
              <li className="nav-item">
                <NavLink className="nav-link text-warning" to="/vendedor">
                  Panel Vendedor
                </NavLink>
              </li>
            )}

            <li className="nav-item">
              <button 
                className={claseBoton} 
                onClick={() => setEsVendedor(!esVendedor)}
              >
                {textoBoton}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;