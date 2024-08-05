// Clase abstracta en JavaScript
class Animal {
    constructor(name) {
        if (this.constructor === Animal) {
            throw new Error("No se puede instanciar una clase abstracta directamente.");
        }
        this.name = name;
    }

    // Método abstracto (sin implementación)
    makeSound() {
        throw new Error("Método abstracto 'makeSound' debe ser implementado.");
    }

    // Método concreto
    describe() {
        console.log(`Este es un animal llamado ${this.name}.`);
    }
}

// Clase derivada que implementa la clase abstracta
class Dog extends Animal {
    constructor(name) {
        super(name);
    }

    // Implementación del método abstracto
    makeSound() {
        console.log("Woof! Woof!");
    }
}

// Clase derivada que implementa la clase abstracta
class Cat extends Animal {
    constructor(name) {
        super(name);
    }

    // Implementación del método abstracto
    makeSound() {
        console.log("Meow! Meow!");
    }
}

// Intento de instanciar la clase abstracta (esto lanzará un error)
// const genericAnimal = new Animal('Generic');

// Creación de instancias de clases concretas
const dog = new Dog('Rex');
const cat = new Cat('Whiskers');

// Llamada a los métodos
dog.describe(); // Este es un animal llamado Rex.
dog.makeSound(); // Woof! Woof!

cat.describe(); // Este es un animal llamado Whiskers.
cat.makeSound(); // Meow! Meow!

