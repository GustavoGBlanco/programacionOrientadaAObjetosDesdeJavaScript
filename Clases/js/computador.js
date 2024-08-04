class Computador {
    #marca;  // Atributo privado
    modelo;  // Atributo público
    memoria; // Atributo público

    constructor(marca, modelo, memoria) {
        this.#marca = marca;
        this.modelo = modelo;
        this.memoria = memoria;
    }

    encender() {
        console.log('El computador está encendido.');
    }

    apagar() {
        console.log('El computador está apagado.');
    }

    mostrarInfo() {
        console.log(`Marca: ${this.#marca}, Modelo: ${this.modelo}, Memoria: ${this.memoria} GB`);
    }
}

const miComputador = new Computador('Dell', 'XPS 13', 16);
miComputador.encender();
miComputador.mostrarInfo();
miComputador.apagar();