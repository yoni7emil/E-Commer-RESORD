import { useState } from 'react';
// Componente de contacto para compras al por mayor
const Contacto = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    whatsapp: '',
    direccion: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleWhatsApp = (e) => {
    e.preventDefault();

    // NÚMERO DE WHATSAPP (con código de país, sin el + ni guiones)
    const telefonoVendedor = '5493764882325'; // Reemplaza con tu número de WhatsApp

    const mensaje = `Hola, mi nombre es ${formData.nombre}. 
    Quisiera realizar una compra al por mayor. 
    Datos de contacto:
    - Email: ${formData.email}
    - WhatsApp: ${formData.whatsapp}
    - Dirección: ${formData.direccion}`;

    // Codificamos el mensaje para que funcione en una URL
    const urlWhatsApp = `https://wa.me/${telefonoVendedor}?text=${encodeURIComponent(mensaje)}`;

    // Redirección a WhatsApp
    window.open(urlWhatsApp, '_blank');
  };

  // Renderizamos el formulario de contacto
  return (
    <div className="container mt-5">
      <h2 className="mb-4">Solicitud de Compra Mayorista</h2>
      <form onSubmit={handleWhatsApp} className="mt-4">
        <div className="mb-3">
          <label>Nombre Completo</label>
          <input name="nombre" className="form-control" value={formData.nombre} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label>Email</label>
          <input type="email" name="email" className="form-control" value={formData.email} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label>WhatsApp</label>
          <input type="tel" name="whatsapp" className="form-control" value={formData.whatsapp} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label>Dirección</label>
          <input name="direccion" className="form-control" value={formData.direccion} onChange={handleChange} required />
        </div>
        
        <button type="submit" className="btn btn-success btn-lg">
          Continuar en WhatsApp
        </button>
      </form>
    </div>
  );
};

export default Contacto;