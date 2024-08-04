class Libro {
    #titulo; // Atributo privado

    constructor(titulo) {
        this.#titulo = titulo;
    }

    get titulo() {
        return this.#titulo; // Getter
    }

    set titulo(valor) {
        if (valor.length > 0) {
            this.#titulo = valor;
        } else {
            console.log('El título no puede estar vacío');
        }
    }
}

const libro = new Libro('1984');
console.log(libro.titulo); // Imprime: 1984
libro.titulo = 'Animal Farm';
console.log(libro.titulo); // Imprime: Animal Farm
libro.titulo = ''; // Imprime: El título no puede estar vacío