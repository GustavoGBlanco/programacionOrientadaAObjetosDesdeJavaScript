// Clase abstracta en JavaScript
class Animal {
    constructor(name) {
        // Verificación para evitar la instanciación directa de la clase abstracta
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