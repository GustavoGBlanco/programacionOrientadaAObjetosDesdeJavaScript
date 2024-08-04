class Computador {
    #marca;
    #modelo;
    #ram;

    constructor(marca, modelo, ram) {
        this.#marca = marca;
        this.#modelo = modelo;
        this.#ram = ram;
    }

    mostrarInfo() {
        console.log(`Marca: ${this.#marca}, Modelo: ${this.#modelo}, RAM: ${this.#ram}GB`);
    }
}