import { Link } from 'react-router-dom';
import './Home.css';
import logo from '../../assets/IMG_1359.PNG'; 

const Home = () => {
  return (
    <div className="home-container">
      {/* Logo de fondo */}
      <img src={logo} alt="Logo Fondo" className="background-logo" />
      
      <div className="home-content">
        <h1>Moda Masculina Exclusiva</h1>
        <p>
          Calidad, estilo y las últimas tendencias seleccionadas especialmente para ti.
        </p>
        <Link to="/catalogo" className="cta-btn">Ver Catálogo</Link>
      </div>
    </div>
  );
};

export default Home;