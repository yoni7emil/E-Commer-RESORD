import { useState } from 'react';
import './Contacto.css';
// En este componente, se maneja un formulario para que los usuarios puedan solicitar compras al por mayor. 
const Contacto = () => {
  const [formData, setFormData] = useState({
    nombre: '', email: '', whatsapp: '', direccion: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleWhatsApp = (e) => {
    e.preventDefault();
    const telefonoVendedor = '5493764882325';{/* Número de WhatsApp del vendedor */}
    const mensaje = `Hola, mi nombre es ${formData.nombre}. Quisiera realizar una compra al por mayor. Datos de contacto:\n- Email: ${formData.email}\n- WhatsApp: ${formData.whatsapp}\n- Dirección: ${formData.direccion}`;
    window.open(`https://wa.me/${telefonoVendedor}?text=${encodeURIComponent(mensaje)}`, '_blank');
  };
// Formulario de contacto.
  return (
    <div className="contacto-container">
      <h2 className="contacto-title">Solicitud Mayorista</h2>
      <form onSubmit={handleWhatsApp} className="contacto-form">
        <div className="input-group">
          <label>Nombre Completo</label>
          <input name="nombre" value={formData.nombre} onChange={handleChange} required />
        </div>
        <div className="input-group">
          <label>Email</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div className="input-group">
          <label>WhatsApp</label>
          <input type="tel" name="whatsapp" value={formData.whatsapp} onChange={handleChange} required />
        </div>
        <div className="input-group">
          <label>Dirección</label>
          <input name="direccion" value={formData.direccion} onChange={handleChange} required />
        </div>
        
        <button type="submit" className="submit-btn">
          Continuar en WhatsApp
        </button>
      </form>
    </div>
  );
};

export default Contacto;