# Motores de plantillas (handlebars, pug y ejs)

Desafío de clase 10, curso Back End de Coderhouse.

Se crea un servidor en el puerto 8080 con express para cada uno de los motores de plantillas con las siguentes funcionalidades:

- GET '/' -> devuelve un html con un formulario para cargar un nuevo producto a la base de datos realizando una petición POST a la ruta '/productos' y enviando los datos en forma de form-data.

- GET '/productos' -> devuelve un html con una lista de los productos cargados en la base de datos.


Todas las funcionalidades pueden accederse desde el navegador con la interfaz de front end.

Para la edición del archivo de productos se utiliza el módulo fs nativo de node, el cual interactúa con el archivo 'productos.json'.

Se utiliza el módulo multer para subir archivos.

# Uso

git clone https://github.com/MatiLarsson/Curso-BackEnd-Coderhouse/tree/main/Clase_10_Desafio/motores-de-plantillas

Ingresar a la carpeta del motor deseado ejecutando los comandos:

cd ejs

cd handlebars

cd pug

Instalar todas las dependencias requeridas:

npm i

npm start (requiere tener instalado nodemon) para correr el servidor en el puerto 8080