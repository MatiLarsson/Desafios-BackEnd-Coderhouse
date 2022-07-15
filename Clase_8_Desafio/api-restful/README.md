# API RESTful

Desafío de clase 8, curso Back End de Coderhouse.

Se crea un servidor en el puerto 8080 con express con las siguentes funcionalidades:

. GET '/api/productos' -> devuelve todos los productos.

. GET '/api/productos/:id' -> devuelve un producto según su id.

. POST '/api/productos' -> recibe y agrega un producto, y lo devuelve con su id asignado.

. PUT '/api/productos/:id' -> recibe y actualiza un producto según su id.

. DELETE '/api/productos/:id' -> elimina un producto según su id.

Todas las funcionalidades pueden accederse desde el navegador con la interfaz de front end.

Para la edición del archivo de productos se utiliza el módulo fs nativo de node, el cual interactúa con el archivo 'productos.json'.

Se utiliza el módulo multer para subir archivos.

# Uso

git clone https://github.com/MatiLarsson/Curso-BackEnd-Coderhouse/tree/main/Clase_8_Desafio/api-restful

cd api-restful

npm i

nodemon src/index.js (requiere tener instalado nodemon) para correr el servidor en el puerto 8080