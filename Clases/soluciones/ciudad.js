class Ciudad {
    // Atributos privados
    #nombre;      // Nombre de la ciudad
    #poblacion;   // Población de la ciudad

    // Atributos públicos
    pais;         // País en el que se encuentra la ciudad
    superficie;   // Superficie de la ciudad en kilómetros cuadrados

    // Constructor
    constructor(nombre, poblacion, pais, superficie) {
        this.nombre = nombre;  // Usa el setter para validar el nombre
        this.poblacion = poblacion; // Usa el setter para validar la población
        this.pais = pais; // Usa el setter para validar el pais
        this.superficie = superficie; // Usa el setter para validar la superficie
    }

    // Getter para el atributo privado nombre
    get nombre() {
        return this.#nombre;
    }

    // Setter para el atributo privado nombre
    set nombre(valor) {
        if (valor.length > 3) {
            this.#nombre = valor;
        } else {
            console.log('El valor recibido por parametro genera un error');
        }
    }

    // Getter para el atributo privado población
    get poblacion() {
        return this.#poblacion;
    }

    // Setter para el atributo privado población
    set poblacion(valor) {
        if (valor > 0) {
            this.#poblacion = valor;
        } else {
            console.log('El valor recibido por parametro genera un error');
        }
    }

    // Getter para el atributo público país
    get pais() {
        return this.pais;
    }

    // Setter para el atributo público país
    set pais(valor) {
        if (valor.length > 3) {
            this.pais = valor;
        } else {
            console.log('El valor recibido por parametro genera un error');
        }
    }

    // Getter para el atributo público superficie
    get superficie() {
        return this.superficie;
    }

    // Setter para el atributo público superficie
    set superficie(valor) {
        if (valor > 0) {
            this.superficie = valor;
        } else {
            console.log('El valor recibido por parametro genera un error');
        }
    }

    // Método para mostrar detalles de la ciudad
    mostrarDetalles() {
        console.log(`Nombre: ${this.#nombre}, Población: ${this.#poblacion}, País: ${this.pais}, Superficie: ${this.superficie} km²`);
    }
}
