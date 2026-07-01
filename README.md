=============================================
# Tienda Online 
=============================================
##  Descripción del Proyecto
==============================
Este proyecto nació originalmente como un trabajo práctico para el ciclo Front End de la UTN, con el objetivo de desarrollar una plataforma de e-commerce funcional utilizando React.

La aplicación fue diseñada para ofrecer una experiencia de usuario fluida, permitiendo a los clientes explorar un catálogo de productos, visualizar detalles específicos mediante ventanas modales y gestionar un carrito de compras. Con el fin de brindar una solución práctica y directa para una tienda real, se integró un flujo de finalización de compra que redirecciona a los usuarios vía WhatsApp, facilitando la comunicación directa entre el cliente y el negocio para concretar pedidos de manera ágil.

Este desarrollo no solo cumple con los criterios de modularidad y buenas prácticas de React, sino que está pensado como una plataforma escalable, diseñada para ser la presencia digital oficial de un negocio de indumentaria en constante crecimiento.

===========
## Índice
===========

1.  Título y Descripción: Nombre del proyecto (p. ej., "Mi Proyecto E-Commerce") y una breve explicación de su objetivo. Indice

2. Tecnologías Utilizadas.

3. Estructura del Proyecto: Un pequeño árbol de directorios (esto demuestra que tienes un orden claro).

Características Principales

4. Requisitos de ejecucion local 

5. Desafíos enfrentados / Aprendizajes

6. Autor



=============================
##  Tecnologías Utilizadas
=============================
Para el desarrollo de este e-commerce, seleccioné un "stack" tecnológico orientado a la eficiencia, la escalabilidad y la facilidad de mantenimiento:

    -React.js: 
        Utilizado como biblioteca principal para construir la interfaz de usuario basada en componentes reutilizables, permitiendo una experiencia dinámica y fluida.

    -Vite: 
        Elegido como herramienta de construcción (build tool) por su extrema rapidez en el entorno de desarrollo y su optimización eficiente para la producción, superando a herramientas tradicionales como Create React App.

    -React Router (HashRouter): 
        Implementado para la navegación interna de la aplicación, configurado específicamente con HashRouter para garantizar la compatibilidad total del despliegue en entornos estáticos como GitHub Pages.

    -CSS Moderno (Vanilla):
         Desarrollo de estilos personalizados sin librerías externas, utilizando variables CSS (variables.css) para gestionar la identidad visual, mejorar el rendimiento de carga y mantener un diseño minimalista y limpio.

    -JavaScript (ES6+): 
        Lógica funcional central para el manejo de estados, filtrado de productos en tiempo real y el procesamiento de datos del carrito.

    -GitHub Pages: 
        Plataforma elegida para el despliegue del proyecto, permitiendo la visualización pública de la aplicación de manera gratuita y eficiente.

===============================
##  Estructura del Proyecto
===============================
Cree una arquitectura modular organizada en el directorio `src/`, diseñada para facilitar la escalabilidad y el mantenimiento del código:

- `src/assets/`: Contiene los recursos estáticos como imágenes y archivos multimedia utilizados en la aplicación.
- `src/components/`: Componentes reutilizables e independientes. Cada uno cuenta con su propia carpeta conteniendo el archivo `.jsx` y su respectivo archivo `.css` para un estilo encapsulado:
    - `Navbar/`: Barra de navegación principal.
    - `ProductCard/`: Visualización de tarjetas individuales de productos.
    - `ProductModal/`: Ventana emergente para mostrar detalles extendidos del producto donde se encuentra el boton para agregar al carrito.
- `src/data/`: Almacena el archivo `productos.js`, donde se centraliza la información de los productos, permitiendo una gestión de datos ordenada.
- `src/hooks/`: Espacio dedicado a la lógica personalizada (custom hooks) para reutilizar funcionalidades en distintos puntos de la aplicación.
- `src/pages/`: Contiene las vistas principales de la aplicación, cada una con su estructura y estilos propios:
    - `Home/`: Página de inicio.
    - `Catalogo/`: Vista que despliega el catálogo de productos.
    - `Carrito/`: Gestión de productos seleccionados.
    - `Contacto/`: Formulario de contacto con manejo de estados.
- `src/styles/`: Archivos de estilos globales y variables CSS que definen la identidad visual del proyecto.
- `src/utils/`: Funciones utilitarias auxiliares para la lógica general del proyecto.


=================================
## requisito de ejecucion local
=================================

Asegúrate de tener instalado [Node.js](https://nodejs.org/) (se recomienda la versión LTS) en tu equipo.

====================================
##  Desafíos Técnicos y Soluciones
====================================

El desarrollo de este proyecto evolucionó de una práctica académica a una aplicación real de e-commerce, lo que me obligó a enfrentar y resolver desafíos clave para cumplir con las necesidades del cliente:

Lógica de Pedido Dinámico para WhatsApp: El requerimiento principal era redirigir la intención de compra hacia WhatsApp. El mayor desafío fue diseñar una lógica capaz de acumular dinámicamente los productos seleccionados, sus talles y cantidades en un único mensaje de texto estructurado. Utilicé encodeURIComponent para transformar esta información en un formato compatible con URLs, garantizando que el usuario final enviara un mensaje claro y ordenado al vendedor.

Refactorización para Control Estético (Adiós a Bootstrap): Inicialmente, el uso de Bootstrap limitaba la personalización visual que la marca requería. Decidí eliminarlo por completo para implementar un diseño minimalista hecho a medida con CSS puro. Esto me otorgó un control total sobre cada elemento y permitió que la identidad visual de la tienda de ropa fuera consistente en todas sus secciones.

Optimización del Ruteo para Producción en GitHub Pages: Al desplegar en GitHub Pages, me encontré con problemas comunes de Single Page Applications (SPA) donde las recargas de página fallaban y el enrutamiento base no funcionaba como esperaba.

Solución: Implementé HashRouter en lugar de BrowserRouter. Esta técnica permite manejar las rutas en aplicaciones del lado del cliente sin requerir una configuración especial del servidor (que GitHub Pages no permite), asegurando que el usuario siempre mantenga la navegación correcta, incluso al refrescar la página.

Gestión de Estado Complejo: Logré centralizar la lógica de negocio (carrito, búsqueda y filtros) en el componente raíz (App.jsx), utilizando prop drilling controlado para mantener la aplicación predecible y fácil de mantener a medida que escalaba la funcionalidad.

Nota sobre el despliegue: Este proyecto está optimizado para GitHub Pages utilizando HashRouter. Esta elección asegura que el enrutamiento de la aplicación funcione correctamente sin necesidad de una configuración de servidor adicional, permitiendo la navegación fluida entre el Catálogo, el Carrito y la página de Contacto.


## Autor 

Emilio Jonathan Camacho

Hola, soy desarrollador de software con conocimientos de base de datos, sigo en constante desarrollo profeciona. Este proyecto nació como un desafío académico y evolucionó hasta convertirse en una herramienta de gestión de ventas para una tienda de indumentaria. Mi enfoque se centra en escribir código limpio, escalable y centrado en la experiencia del usuario.



## IMPORTANTE 

Este proyecto lo desarroye para aprender, desarrollar mis abilidades logicas y de despliegue no hay contenido real de la tienda online real en este proyecto que presento como trabajo final del curso  de Programador Web Inicial - FONT END DEVELOPER 