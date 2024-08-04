class Pais {
    #nombre; // Atributo privado
    #poblacion; // Atributo privado
    continente; // Atributo público

    constructor(nombre, poblacion, continente) {
        this.#nombre = nombre;
        this.#poblacion = poblacion;
        this.continente = continente;
    }

    get nombre() {
        return this.#nombre;
    }

    set nombre(valor) {
        if (valor.length > 0) {
            this.#nombre = valor;
        } else {
            console.log('El nombre del país no puede estar vacío');
        }
    }

    get poblacion() {
        return this.#poblacion;
    }

    set poblacion(valor) {
        if (valor > 0) {
            this.#poblacion = valor;
        } else {
            console.log('La población debe ser un número positivo');
        }
    }

    mostrarDatos() {
        console.log(`Nombre: ${this.#nombre}, Población: ${this.#poblacion}, Continente: ${this.continente}`);
    }
}

const pais = new Pais('Francia', 67000000, 'Europa');
pais.mostrarDatos();
pais.nombre = 'España';
pais.poblacion = 47000000;
pais.mostrarDatos();