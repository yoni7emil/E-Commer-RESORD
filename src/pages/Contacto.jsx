import { useState } from 'react';

const Contacto = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    whatsapp: '',
    talle: '',
    localidad: '',
    cantidad: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Datos del pedido:", formData);
    alert("Pedido enviado correctamente");
    // Reset del formulario
    setFormData({ nombre: '', email: '', whatsapp: '', talle: '', localidad: '', cantidad: '' });
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Hacer Pedido</h2>
      <form onSubmit={handleSubmit} className="mt-4">
        <div className="mb-3">
          <label>Nombre</label>
          <input name="nombre" className="form-control" value={formData.nombre} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label>Email</label>
          <input type="email" name="email" className="form-control" value={formData.email} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label>WhatsApp</label>
          <input type="tel" name="whatsapp" className="form-control" value={formData.whatsapp} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label>Talle</label>
          <select name="talle" className="form-control" value={formData.talle} onChange={handleChange}>
            <option value="">Seleccione...</option>
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
            <option value="XL">XL</option>
          </select>
        </div>
        <div className="mb-3">
          <label>Localidad</label>
          <input name="localidad" className="form-control" value={formData.localidad} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label>Cantidad</label>
          <input type="number" name="cantidad" className="form-control" value={formData.cantidad} onChange={handleChange} />
        </div>
        
        <button type="submit" className="btn btn-success">
          Enviar Pedido
        </button>
      </form>
    </div>
  );
};

export default Contacto;