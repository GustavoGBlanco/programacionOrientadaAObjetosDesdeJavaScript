class Samsung {
    // Atributos privados
    #dispositivo;
    #modelo;
    #precio;
    #cantidadesVendidas;
    #paisConMasVenta;
    #versionSO;

    // Constructor para inicializar las propiedades privadas
    constructor(dispositivo, modelo, precio, cantidadesVendidas, paisConMasVenta, versionSO) {
        this.#dispositivo = dispositivo;
        this.#modelo = modelo;
        this.#precio = precio;
        this.#cantidadesVendidas = cantidadesVendidas;
        this.#paisConMasVenta = paisConMasVenta;
        this.#versionSO = versionSO;
    }

    // Getters
    get dispositivo() {
        return this.#dispositivo;
    }

    get modelo() {
        return this.#modelo;
    }

    get precio() {
        return this.#precio;
    }

    get cantidadesVendidas() {
        return this.#cantidadesVendidas;
    }

    get paisConMasVenta() {
        return this.#paisConMasVenta;
    }

    get versionSO() {
        return this.#versionSO;
    }

    // Setters
    set dispositivo(dispositivo) {
        this.#dispositivo = dispositivo;
    }

    set modelo(modelo) {
        this.#modelo = modelo;
    }

    set precio(precio) {
        this.#precio = precio;
    }

    set cantidadesVendidas(cantidadesVendidas) {
        this.#cantidadesVendidas = cantidadesVendidas;
    }

    set paisConMasVenta(paisConMasVenta) {
        this.#paisConMasVenta = paisConMasVenta;
    }

    set versionSO(versionSO) {
        this.#versionSO = versionSO;
    }

    // Método para mostrar detalles del dispositivo
    mostrarDetalles() {
        console.log(`Dispositivo: ${this.#dispositivo}, Modelo: ${this.#modelo}, Precio: $${this.#precio}, Cantidades Vendidas: ${this.#cantidadesVendidas}, País con Más Venta: ${this.#paisConMasVenta}, Versión del Sistema Operativo: ${this.#versionSO}`);
    }
}

// Crear objetos de la clase Samsung con la información proporcionada
const galaxyS23Ultra = new Samsung("Galaxy", "Galaxy S23 Ultra", 1199, 1200000, "Estados Unidos", "Android 13");
const galaxyS23 = new Samsung("Galaxy", "Galaxy S23", 999, 1100000, "Corea del Sur", "Android 13");
const galaxyA54 = new Samsung("Galaxy", "Galaxy A54", 449, 900000, "India", "Android 13");
const galaxyZFold5 = new Samsung("Galaxy", "Galaxy Z Fold 5", 1799, 850000, "China", "Android 13");
const galaxyA34 = new Samsung("Galaxy", "Galaxy A34", 349, 800000, "Brasil", "Android 13");
const galaxyS23Plus = new Samsung("Galaxy", "Galaxy S23+", 1099, 750000, "Estados Unidos", "Android 13");
const galaxyZFlip5 = new Samsung("Galaxy", "Galaxy Z Flip 5", 999, 700000, "Corea del Sur", "Android 13");
const galaxyA14 = new Samsung("Galaxy", "Galaxy A14", 299, 650000, "India", "Android 13");
const galaxyTabS9 = new Samsung("Galaxy", "Galaxy Tab S9", 799, 600000, "Estados Unidos", "Android 13");
const galaxyNote20Ultra = new Samsung("Galaxy", "Galaxy Note 20 Ultra", 1199, 550000, "Japón", "Android 12");

// Invocar el método mostrarDetalles() de cada objeto
galaxyS23Ultra.mostrarDetalles();
galaxyS23.mostrarDetalles();
galaxyA54.mostrarDetalles();
galaxyZFold5.mostrarDetalles();
galaxyA34.mostrarDetalles();
galaxyS23Plus.mostrarDetalles();
galaxyZFlip5.mostrarDetalles();
galaxyA14.mostrarDetalles();
galaxyTabS9.mostrarDetalles();
galaxyNote20Ultra.mostrarDetalles();

//Resultado en consola
//"Dispositivo: Galaxy, Modelo: Galaxy S23 Ultra, Precio: $1199, Cantidades Vendidas: 1200000, País con Más Venta: Estados Unidos, Versión del Sistema Operativo: Android 13"
//"Dispositivo: Galaxy, Modelo: Galaxy S23, Precio: $999, Cantidades Vendidas: 1100000, País con Más Venta: Corea del Sur, Versión del Sistema Operativo: Android 13"
//"Dispositivo: Galaxy, Modelo: Galaxy A54, Precio: $449, Cantidades Vendidas: 900000, País con Más Venta: India, Versión del Sistema Operativo: Android 13"
//"Dispositivo: Galaxy, Modelo: Galaxy Z Fold 5, Precio: $1799, Cantidades Vendidas: 850000, País con Más Venta: China, Versión del Sistema Operativo: Android 13"
//"Dispositivo: Galaxy, Modelo: Galaxy A34, Precio: $349, Cantidades Vendidas: 800000, País con Más Venta: Brasil, Versión del Sistema Operativo: Android 13"
//"Dispositivo: Galaxy, Modelo: Galaxy S23+, Precio: $1099, Cantidades Vendidas: 750000, País con Más Venta: Estados Unidos, Versión del Sistema Operativo: Android 13"
//"Dispositivo: Galaxy, Modelo: Galaxy Z Flip 5, Precio: $999, Cantidades Vendidas: 700000, País con Más Venta: Corea del Sur, Versión del Sistema Operativo: Android 13"
//"Dispositivo: Galaxy, Modelo: Galaxy A14, Precio: $299, Cantidades Vendidas: 650000, País con Más Venta: India, Versión del Sistema Operativo: Android 13"
//"Dispositivo: Galaxy, Modelo: Galaxy Tab S9, Precio: $799, Cantidades Vendidas: 600000, País con Más Venta: Estados Unidos, Versión del Sistema Operativo: Android 13"
//"Dispositivo: Galaxy, Modelo: Galaxy Note 20 Ultra, Precio: $1199, Cantidades Vendidas: 550000, País con Más Venta: Japón, Versión del Sistema Operativo: Android 12"

