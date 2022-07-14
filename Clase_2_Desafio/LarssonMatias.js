class Usuario {
  constructor (nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.libros = [];
    this.mascotas = [];
  }
  getFullName () {
    return `${this.nombre} ${this.apellido}`;
  }
  addMascota (mascota) {
    this.mascotas.push(mascota);
  }
  countMascotas () {
    return this.mascotas.length;
  }
  addBook (name, author) {
    this.libros.push({
      nombre: name,
      autor: author
    });
  }
  getBookNames () {
    return this.libros.map(libro => libro.nombre)
  }
}

const usuario = new Usuario('Matias', 'Larsson')

console.log(usuario.getFullName())

usuario.addMascota('perro')
usuario.addMascota('pez')
console.log(usuario.mascotas)

console.log(usuario.countMascotas())

usuario.addBook('El camino del libertario', 'Javier Milei')
usuario.addBook('El hechizo del agua', 'Florencia Bonelli')
console.log(usuario.libros)

console.log(usuario.getBookNames())
