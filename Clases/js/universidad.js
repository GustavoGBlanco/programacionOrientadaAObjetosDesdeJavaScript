class Universidad {
    #nombre;  // Atributo privado
    #ubicacion; // Atributo privado
    facultades; // Atributo público
    computadoras; // Atributo público

    constructor(nombre, ubicacion, facultades, computadoras) {
        this.#nombre = nombre;
        this.#ubicacion = ubicacion;
        this.facultades = facultades;
        this.computadoras = computadoras; // Lista de objetos Computador
    }

    get nombre() {
        return this.#nombre;
    }

    set nombre(valor) {
        if (valor.length > 0) {
            this.#nombre = valor;
        } else {
            console.log('El nombre de la universidad no puede estar vacío');
        }
    }

    get ubicacion() {
        return this.#ubicacion;
    }

    set ubicacion(valor) {
        if (valor.length > 0) {
            this.#ubicacion = valor;
        } else {
            console.log('La ubicación no puede estar vacía');
        }
    }

    mostrarDetalles() {
        console.log(`Universidad: ${this.#nombre}, Ubicación: ${this.#ubicacion}, Facultades: ${this.facultades}`);
    }

    mostrarComputadoras() {
        this.computadoras.forEach(computador => computador.mostrarInfo());
    }
}

// Crear instancias de Computador
const comp1 = new Computador('HP', 'Pavilion', 8);
const comp2 = new Computador('Apple', 'MacBook Air', 16);

// Crear instancia de Universidad
const universidad = new Universidad('Universidad Central', 'Madrid', ['Ingeniería', 'Medicina'], [comp1, comp2]);
universidad.mostrarDetalles();
universidad.mostrarComputadoras();