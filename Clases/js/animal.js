class Animal {
    constructor(nombre) {
        this.nombre = nombre;
    }

    hacerSonido() {
        console.log(`${this.nombre} hace un sonido.`);
    }
}

const animal = new Animal('Gato');
animal.hacerSonido(); // Imprime: Gato hace un sonido.