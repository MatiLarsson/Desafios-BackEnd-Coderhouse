# servidor-express-BEcoder

Desafío de clase 6, curso Back End de Coderhouse.

Se crea un servidor en el puerto 8080 con express con las siguentes funcionalidades:

1. Ruta get '/productos' devuelve un array con todos los productos disponibles en el servidor

2. Ruta get '/producto?type=random' devuleve un producto elegido al azar entre todos los productos disponibles en el servidor.

Para la lectura de los productos se utiliza el módulo fs nativo de node, el cual trae los productos desde un archivo 'productos.json'.


## Uso

1. git clone https://github.com/MatiLarsson/servidor-express-BEcoder
2. cd desafio
3. npm install
4. nodemon src/index.js (requiere tener instalado nodemon) para correr el servidor en el puerto 8080