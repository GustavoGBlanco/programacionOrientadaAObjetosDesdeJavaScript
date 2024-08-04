class Persona {
    #edad; // Atributo privado

    constructor(edad) {
        this.#edad = edad;
    }

    get edad() {
        return this.#edad;
    }

    set edad(valor) {
        if (valor >= 0) {
            this.#edad = valor;
        } else {
            console.log('Edad no válida');
        }
    }
}

const persona = new Persona(30);
console.log(persona.edad); // Imprime: 30
persona.edad = 25;
console.log(persona.edad); // Imprime: 25
persona.edad = -5; // Imprime: Edad no válida