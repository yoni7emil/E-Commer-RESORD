// Datos de los productos
// Cada producto tiene un id, nombre, categoría, talles disponibles, imagen, precio y detalle.
// Estos datos se exportan para ser utilizados en otros componentes de la aplicación.
// Algunos de los productos le asigno una imgen de ejemplo desde Unsplash para ilustrar cómo se verían en la aplicación y una con una Unsplash para mostrar cuando falla la importacion.
export const productos = [
  {
    id: 1,
    nombre: "Camiseta de Algodón",
    categoria: "Indumentaria Masculina",
    talles: ["S", "M", "L", "XL"],
    imagen: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=500",
    precio: "25.00",
    detalle: "Camiseta básica de algodón 100% orgánico, corte clásico y muy cómoda."
  },
  
  {
    id: 2,
    nombre: "Pantalón Chino",
    categoria: "Indumentaria Masculina",
    talles: ["S", "M", "L", "XL"],
    imagen: "https://imgs.search.brave.com/-c4qDQaS5sdPk_AFcQ1BPj4qbm4nTx64bEPET_ja5NY/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/ZWxwYWxhY2lvZGVo/aWVycm8uY29tL2R3/L2ltYWdlL3YyL0JE/S0JfUFJEL29uL2Rl/bWFuZHdhcmUuc3Rh/dGljLy0vU2l0ZXMt/cGFsYWNpby1tYXN0/ZXItY2F0YWxvZy9k/ZWZhdWx0L2R3M2E3/MjAwN2QvaW1hZ2Vz/LzQwMTEzOTAxL0dS/SVMvbGFyZ2UvNDAx/MTM5MDJfeDEuanBn/P3N3PTM0NiZzaD0z/OTQ",
    precio: "45.99",
    detalle: "Pantalón estilo chino ideal para oficina o salidas casuales."
  },
  {
    id: 3,
    nombre: "Chaqueta Denim",
    categoria: "Indumentaria Masculina",
    talles: ["S", "M", "L", "XL"],
    imagen: "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?q=80&w=500",
    precio: "65.50",
    detalle: "Chaqueta de mezclilla clásica, resistente y con bolsillos laterales."
  },
  {
    id: 4,
    nombre: "Camisa de Lino",
    categoria: "Indumentaria Masculina",
    talles: ["M", "L", "XL"],
    imagen: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=500",
    precio: "55.00",
    detalle: "Camisa de lino de alta calidad, perfecta para climas cálidos y ocasiones formales."
  },
  {
    id: 5,
    nombre: "Bermuda de Gabardina",
    categoria: "Indumentaria Masculina",
    talles: ["S", "M", "L"],
    imagen: "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?q=80&w=500",
    precio: "35.00",
    detalle: "Bermuda resistente y cómoda, ideal para un look casual de verano."
  },
  {
    id: 6,
    nombre: "Suéter de Lana",
    categoria: "Indumentaria Masculina",
    talles: ["M", "L", "XL", "XXL"],
    imagen: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=500",
    precio: "75.00",
    detalle: "Suéter tejido de lana virgen, tejido grueso para una excelente retención de calor."
  },
  {
    id: 7,
    nombre: "Cinturón de Cuero",
    categoria: "Accesorios",
    talles: ["Único"],
    imagen: "https://imgs.search.brave.com/vSQKNBKyOx3EramH5c6Tz2BoemCD_eUYc6SYuu9nWiw/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9odHRw/Mi5tbHN0YXRpYy5j/b20vRF9OUV9OUF85/Mzk5MzUtTUxBNDM5/OTg4MTg2MjRfMTEy/MDIwLVcud2VicA",
    precio: "20.00",
    detalle: "Cinturón de cuero legítimo con hebilla metálica resistente."
  },
  {
    id: 8,
    nombre: "Zapatillas Urbanas",
    categoria: "Calzado",
    talles: ["40", "41", "42", "43"],
    imagen: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=500",
    precio: "95.00",
    detalle: "Zapatillas de diseño moderno con suela reforzada, perfectas para el uso diario."
  },
  {
    id: 9,
    nombre: "Campera Rompevientos",
    categoria: "Indumentaria Masculina",
    talles: ["S", "M", "L", "XL"],
    imagen: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=500",
    precio: "85.00",
    detalle: "Campera técnica ligera, resistente al agua y al viento, ideal para actividades al aire libre."
  },
  {
    id: 10,
    nombre: "Remera Oversize",
    categoria: "Indumentaria Masculina",
    talles: ["M", "L"],
    imagen: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=500",
    precio: "30.00",
    detalle: "Remera de corte amplio y tela de algodón premium, estilo urbano y relajado."
  },
  {
    id: 11,
    nombre: "Gorra de Gabardina",
    categoria: "Accesorios",
    talles: ["Único"],
    imagen: "https://imgs.search.brave.com/K1rsYZKqwo7MaiG7Ibd6Kq3egV9spMisO8j92JvsNwU/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9leG90/aWNhYmlqb3UuY29t/LmFyL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDI0LzA4LzM2MTMt/Ni00MzB4NjAyLnBu/Zw",
    precio: "15.00",
    detalle: "Gorra clásica con ajuste regulable en la parte posterior."
  },

  {
      id: 12,
      nombre: "Billetera de Cuero",
      categoria: "Accesorios",
      talles: ["Unico"],
      imagen: "https://images.unsplash.com/photo-1627123424574-724758594e93?q=80&w=500",
      precio: "45.00",
      detalle: "Billetera minimalista con compartimentos para tarjetas y billetes."
  },
  {
      id: 13,
      nombre: "Camisa de Franela",
      categoria: "Indumentaria Masculina",
      talles: ["S", "M", "L"],
      imagen: "https://imgs.search.brave.com/hmFl1YHvOKNME58GxtWEORiKZlJcrtAx0jjO6rWiwY4/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMua2lhYmkuZXMv/aW1hZ2VzL2NhbWlz/YS1kZS1jdWFkcm9z/LWRlLWZyYW5lbGEt/bmVncm8tZHZwMjZf/Ml9oZDIuanBnP3dp/ZHRoPTUwMA",
      precio: "60.00",
      detalle: "Camisa de cuadros clásica, cálida y confortable para los días frescos."
  },
  {
      id: 14,
      nombre: "Reloj de Pulsera",
      categoria: "Accesorios",
      talles: ["Unico"],
      imagen: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?q=80&w=500",
      precio: "120.00",
      detalle: "Reloj analógico con diseño elegante y resistente al agua."
  },
  {
      id: 15,
      nombre: "Botas de Cuero",
      categoria: "Calzado",
      talles: ["40", "41", "42", "43", "44"],
      imagen: "https://imgs.search.brave.com/MYHKCoEOqQxTprLwI4EgZLhej0aAzIbNr7X8TBuiurE/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvOTU0/NDAwMjY4L2VzL2Zv/dG8vcGFyLWRlLWJv/dGFzLWRlLWN1ZXJv/LW5lZ3JvLWVzdGls/by1taWxpdGFyLWFp/c2xhZG8tdmlzdGEt/ZnJvbnRhbC5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9SktG/SWFNNTRvbGpHVkZT/U2RBM0M2N0Nhc2VN/X01uU0ZtN2xkVmx6/b3A3UT0",
      precio: "150.00",
      detalle: "Botas resistentes de cuero vacuno, ideales para cualquier terreno."
  },
  {
      id: 16,
      nombre: "Buzo Oversize",
      categoria: "Indumentaria Masculina",
      talles: ["M", "L", "XL"],
      imagen: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=500",
      precio: "45.00",
      detalle: "Buzo de algodón pesado, corte amplio y muy cómodo para el invierno."
  },
  {
      id: 17,
      nombre: "Medias de Algodón",
      categoria: "Accesorios",
      talles: ["Unico"],
      imagen: "https://imgs.search.brave.com/Q45eB7nUnCQRnjwGL5C3NMr7wanMui1YiYEbzJVRnRw/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9hY2Ru/LXVzLm1pdGllbmRh/bnViZS5jb20vc3Rv/cmVzLzg0OS85NzQv/cHJvZHVjdHMvcGhv/dG9fNTEwMjg1Mjg5/NTM5NjcwMzE5Nl95/MTEtNWIxNTZlMzIx/MjY1Y2EwOWQ3MTY4/NTYzMTgwMTgzNTkt/NDgwLTAuanBn",
      precio: "8.00",
      detalle: "Pack de 3 pares de medias de algodón reforzadas en talón y punta."
  },
  {
      id: 18,
      nombre: "Chaqueta de Cuero",
      categoria: "Indumentaria Masculina",
      talles: ["S", "M", "L"],
      imagen: "https://imgs.search.brave.com/ESKFYDj1UCh9zV3sJSOK0mH3mcCHIxxlCSo7JFCTjtY/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTM1/MjcyODc0NC9lcy9m/b3RvL2NoYXF1ZXRh/LWRlLWN1ZXJvLW5l/Z3JvLWFpc2xhZGEt/c29icmUtYmxhbmNv/LXZpc3Rhcy1kZWxh/bnRlcmFzLXktdHJh/c2VyYXMtbGlzdG8t/cGFyYS1lbC5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9cl9k/ZHdub1NPaGlEOVJC/VGpoY1pKRGVJUC1H/MVlQOV81VjIza2Vn/RlUzYz0",
      precio: "190.00",
      detalle: "Chaqueta de cuero genuino estilo biker con cierres metálicos de alta calidad."
  },
  {
      id: 19,
      nombre: "Zapatillas Deportivas",
      categoria: "Calzado",
      talles: ["39", "40", "41", "42", "43"],
      imagen: "https://imgs.search.brave.com/MCp0Kp2HG1sxjjaKsYF3KoRwhULoUeu9C0NsIQEeGZc/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9kYXNo/LnZ0ZXhhc3NldHMu/Y29tL2FycXVpdm9z/L2lkcy8yNjE2OTgw/LTUwMC1hdXRvP3Y9/NjM5MDkzNDYwODA5/ODcwMDAwJndpZHRo/PTUwMCZoZWlnaHQ9/YXV0byZhc3BlY3Q9/dHJ1ZQ",
      precio: "110.00",
      detalle: "Zapatillas de running con suela de gel para mayor amortiguación."
  },
  {
      id: 20,
      nombre: "Bufanda de Lana",
      categoria: "Accesorios",
      talles: ["Unico"],
      imagen: "https://imgs.search.brave.com/6ZZiT9740WXI3iDt3KJi-nu9u1jibk3aQfEK5FDuGj0/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9odHRw/Mi5tbHN0YXRpYy5j/b20vRF9RX05QXzJY/XzgxNzU2My1NTEE0/OTQ2MjczMDUzMV8w/MzIwMjItVi53ZWJw",
      precio: "25.00",
      detalle: "Bufanda tejida gruesa, suave al tacto y muy abrigada."
  },
  {
      id: 21,
      nombre: "Gafas de Sol Clásicas",
      categoria: "Accesorios",
      talles: ["Unico"],
      imagen: "https://imgs.search.brave.com/AwixZhaBeWO8JSdu-r9KKCndwJNK6PXXPVv3adpiEC4/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/Z2FmYXNkZW9wdGlj/YS5jb20vY2RuL3No/b3AvcHJvZHVjdHMv/TS1JdGFseS00NTEt/MS5qcGc_dj0xNjYy/NTU5MDc1JndpZHRo/PTUzMw",
      precio: "40.00",
      detalle: "Gafas con protección UV y diseño atemporal, perfectas para el sol."
  },
  {
      id: 22,
      nombre: "Camiseta Deportiva",
      categoria: "Indumentaria Masculina",
      talles: ["S", "M", "L", "XL"],
      imagen: "https://imgs.search.brave.com/eKUBU81ePIhm1TWU3gbVHXJj5sLNA_dn1ATcq7D9fsM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMDgv/OTI1Lzg5MC9zbWFs/bC9lbGVnYW50LXdh/dnktZGVzaWduLWpl/cnNleS10LXNoaXJ0/LXNwb3J0cy1zdWl0/YWJsZS1mb3ItcmFj/aW5nLXNvY2Nlci1l/LXNwb3J0cy1mcmVl/LXZlY3Rvci5qcGc",
      precio: "35.00",
      detalle: "Camiseta de tejido técnico transpirable, ideal para entrenamiento intenso."
  },
  {
      id: 23,
      nombre: "Mochila Urbana",
      categoria: "Accesorios",
      talles: ["Unico"],
      imagen: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=500",
      precio: "65.00",
      detalle: "Mochila con compartimento acolchado para laptop y materiales resistentes."
  },
  {
      id: 24,
      nombre: "Pantalón Cargo",
      categoria: "Indumentaria Masculina",
      talles: ["38", "40", "42", "44"],
      imagen: "https://imgs.search.brave.com/wmWkq78DnEGyeoCqmaC-K3dpl74byDTva8yhrP2yJdM/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9wYW50/YWxvbmVzLWNhcmdv/LWVsZWdhbnRlcy1j/b24tYm9sc2lsbG9z/LXBhcmEtYWN0aXZp/ZGFkZXMtYWwtYWly/ZS1saWJyZS15LXVz/by1jYXN1YWwtNDE2/ODY2NzMzLmpwZw",
      precio: "55.00",
      detalle: "Pantalón estilo cargo con múltiples bolsillos funcionales."
  },
  {
      id: 25,
      nombre: "Sandalias de Verano",
      categoria: "Calzado",
      talles: ["40", "41", "42", "43"],
      imagen: "https://imgs.search.brave.com/zUKWheyeCzt3c_4RHHhDilHKgEKwQZgOk_QFcffTbX0/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4u/bWVnYWNhbHphZG8u/Y29tLzE4NzY5MC1s/YXJnZV9kZWZhdWx0/L3NhbmRhbGlhcy1z/a2VjaGVycy1yZWxh/eGVkLWZpdC10cmVz/bWVuLXJ5ZXItbWFy/cm9uZXMtZGUtaG9t/YnJlLmpwZw",
      precio: "45.00",
      detalle: "Sandalias cómodas con suela antideslizante, ideales para climas cálidos."
  }
];