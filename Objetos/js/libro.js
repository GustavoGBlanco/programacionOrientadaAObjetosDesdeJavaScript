// Definición de la clase
class Libro {
    constructor(titulo, autor) {
        this.titulo = titulo;
        this.autor = autor;
    }

    mostrarDetalles() {
        console.log(`Título: ${this.titulo}, Autor: ${this.autor}`);
    }
}

// Instanciación de la clase
const libro1 = new Libro('1984', 'George Orwell');
const libro2 = new Libro('Brave New World', 'Aldous Huxley');

// Uso de los objetos
libro1.mostrarDetalles(); // Imprime: Título: 1984, Autor: George Orwell
libro2.mostrarDetalles(); // Imprime: Título: Brave New World, Autor: Aldous Huxley