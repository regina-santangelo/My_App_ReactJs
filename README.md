# My_App_ReactJs
Este proyecto consiste en un e-commerce creado con React Js. Es mi primer proyecto realizado con React y tambien el proyecto del último curso de Front-End de CoderHouse. 
Consiste en una simulación de negocio de instrumentos musicales. El mismo cuenta con un pequeño catálogo, un carrito de compras, los detalles de los ítems, filtro, y una base da datos en Firebase donde se genera y guarda la orden de compra que haya generado el usuario al introducir sus datos, además de los datos de producto.

PARA EJECUTAR EL CÓDIGO...

Recomiendo utilizar un editor de texto (en mi caso usé VisualStudioCode, pero podés usar el de tu preferencia c:) y tener instalado Node.js. Luego abrir una terminal y ejecutar el comando git clone https://github.com/regina-santangelo/My_App_ReactJs/new/master?readme=1. Luego ejecutar npm install (de éste modo se intala lo referido en el package.json, los node_modules) y por último npm run start.

Componentes:

NavBar = es la barra de navegación donde podés acceder a los productos y filtros. Tambien donde se visualiza el CartWidget.
ItemListCointainer e ItemList = es la lista de todos los productos y lo primero que deberá visualizarse al entrar a la app.
Item = es la card que contiene al producto que se visualiza en el ItemListContainer.
ItemDetail = el la información del producto que se visualiza al presionar el button 'ver detalles'.
ItemDetailContainer = Contiene al ItemDetail.
Counter = donde se encuentra la opción de sumar, quitar y añadir el producto al carrito de compras.
CardWidget = es el ícono de nuestro carrito de compras, el botón que nos dirigirá al carrito, se encuentra en la carpeta CartIcon.
CartItem = es el carrito en sí, donde se puede visualizar los productos seleccionados, la cantidad, subtotal y total.
Checkout = Donde se lleva a cabo el paso final de la compra del producto. Se encuentra un formulario y la opción para generar la orden de compra.

Librerías que utilicé: Node.js, React, ReactRouter.
BackEnd: Firebase.

Espero te sea útil éste README.md! Gracias.

Cualquier consulta podés comunicarte a mi correo que dejo a continuación.
e-mail: regina.santangelo139@outlook.com
