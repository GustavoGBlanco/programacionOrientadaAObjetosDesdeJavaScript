class Apple {
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

// Crear objetos de la clase Apple con la información proporcionada
const iphone15Pro = new Apple("iPhone", "iPhone 15 Pro", 999, 1000000, "Estados Unidos", "iOS 17");
const iphone15 = new Apple("iPhone", "iPhone 15", 799, 900000, "China", "iOS 17");
const ipadPro11 = new Apple("iPad", "iPad Pro (11-inch)", 799, 700000, "Estados Unidos", "iPadOS 17");
const iphone14 = new Apple("iPhone", "iPhone 14", 699, 650000, "India", "iOS 16");
const macbookAirM2 = new Apple("MacBook", "MacBook Air (M2)", 1199, 600000, "Estados Unidos", "macOS Ventura");
const ipad10thGen = new Apple("iPad", "iPad (10th Gen)", 449, 550000, "China", "iPadOS 16");
const iphone14Pro = new Apple("iPhone", "iPhone 14 Pro", 999, 500000, "Brasil", "iOS 16");
const ipadMini = new Apple("iPad", "iPad Mini", 499, 450000, "Japón", "iPadOS 16");
const macbookProM2 = new Apple("MacBook", "MacBook Pro (M2)", 1299, 400000, "Corea del Sur", "macOS Ventura");
const appleWatchUltra = new Apple("Apple Watch", "Apple Watch Ultra", 799, 350000, "Estados Unidos", "watchOS 10");

// Invocar el método mostrarDetalles() de cada objeto
iphone15Pro.mostrarDetalles();
iphone15.mostrarDetalles();
ipadPro11.mostrarDetalles();
iphone14.mostrarDetalles();
macbookAirM2.mostrarDetalles();
ipad10thGen.mostrarDetalles();
iphone14Pro.mostrarDetalles();
ipadMini.mostrarDetalles();
macbookProM2.mostrarDetalles();
appleWatchUltra.mostrarDetalles();

//Resultado en consola
//"Dispositivo: iPhone, Modelo: iPhone 15 Pro, Precio: $999, Cantidades Vendidas: 1000000, País con Más Venta: Estados Unidos, Versión del Sistema Operativo: iOS 17"
//"Dispositivo: iPhone, Modelo: iPhone 15, Precio: $799, Cantidades Vendidas: 900000, País con Más Venta: China, Versión del Sistema Operativo: iOS 17"
//"Dispositivo: iPad, Modelo: iPad Pro (11-inch), Precio: $799, Cantidades Vendidas: 700000, País con Más Venta: Estados Unidos, Versión del Sistema Operativo: iPadOS 17"
//"Dispositivo: iPhone, Modelo: iPhone 14, Precio: $699, Cantidades Vendidas: 650000, País con Más Venta: India, Versión del Sistema Operativo: iOS 16"
//"Dispositivo: MacBook, Modelo: MacBook Air (M2), Precio: $1199, Cantidades Vendidas: 600000, País con Más Venta: Estados Unidos, Versión del Sistema Operativo: macOS Ventura"
//"Dispositivo: iPad, Modelo: iPad (10th Gen), Precio: $449, Cantidades Vendidas: 550000, País con Más Venta: China, Versión del Sistema Operativo: iPadOS 16"
//"Dispositivo: iPhone, Modelo: iPhone 14 Pro, Precio: $999, Cantidades Vendidas: 500000, País con Más Venta: Brasil, Versión del Sistema Operativo: iOS 16"
//"Dispositivo: iPad, Modelo: iPad Mini, Precio: $499, Cantidades Vendidas: 450000, País con Más Venta: Japón, Versión del Sistema Operativo: iPadOS 16"
//"Dispositivo: MacBook, Modelo: MacBook Pro (M2), Precio: $1299, Cantidades Vendidas: 400000, País con Más Venta: Corea del Sur, Versión del Sistema Operativo: macOS Ventura"
//"Dispositivo: Apple Watch, Modelo: Apple Watch Ultra, Precio: $799, Cantidades Vendidas: 350000, País con Más Venta: Estados Unidos, Versión del Sistema Operativo: watchOS 10"
