abstract class Animal {
    abstract hacerSonido(): void; // Método abstracto

    dormir() {
        console.log('El animal está durmiendo.');
    }
}

class Perro extends Animal {
    hacerSonido() {
        console.log('Guau');
    }
}

// const a = new Animal(); // Error: no se puede instanciar una clase abstracta
const perro = new Perro();
perro.hacerSonido(); // Imprime: Guau
perro.dormir(); // Imprime: El animal está durmiendo.