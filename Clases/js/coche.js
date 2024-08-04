class Coche {
    constructor(marca, modelo) {
        this.marca = marca;  // Atributo público
        this.modelo = modelo; // Atributo público
    }

    mostrarDetalles() {
        console.log(`Marca: ${this.marca}, Modelo: ${this.modelo}`); // Método público
    }
}

const miCoche = new Coche('Toyota', 'Corolla');
miCoche.mostrarDetalles(); // Imprime: Marca: Toyota, Modelo: Corolla