class Persona {
    #nombre; // Atributo privado

    constructor(nombre) {
        this.#nombre = nombre;
    }

    saludar() {
        console.log(`Hola, mi nombre es ${this.#nombre}`); // Método público
    }
}

const persona = new Persona('Juan');
persona.saludar(); // Imprime: Hola, mi nombre es Juan