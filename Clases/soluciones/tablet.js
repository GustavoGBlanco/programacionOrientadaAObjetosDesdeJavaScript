class Tablet {
    // Atributos privados
    #serie;      // Número de serie de la tablet
    #referencia; // Referencia del modelo de la tablet

    // Atributos públicos
    marca;       // Marca de la tablet
    modelo;      // Modelo de la tablet

    // Constructor
    constructor(serie, referencia, marca, modelo) {
        this.serie = serie;        // Usa el setter para validar el número de serie
        this.referencia = referencia; // Usa el setter para validar la referencia
        this.marca = marca;        // Usa el setter para validar la marca
        this.modelo = modelo;      // Usa el setter para validar el modelo
    }

    // Getter para el atributo privado serie
    get serie() {
        return this.#serie;
    }

    // Setter para el atributo privado serie
    set serie(valor) {
        if (valor.length > 3) {
            this.#serie = valor;
        } else {
            console.log('El valor recibido por parametro debe tener al menos 3 caracteres');
        }
    }

    // Getter para el atributo privado referencia
    get referencia() {
        return this.#referencia;
    }

    // Setter para el atributo privado referencia
    set referencia(valor) {
        if (valor.length > 3) {
            this.#referencia = valor;
        } else {
            console.log('El valor recibido por parametro debe tener al menos 3 caracteres');
        }
    }

    // Getter para el atributo público marca
    get marca() {
        return this.marca;
    }

    // Setter para el atributo público marca
    set marca(valor) {
        if (valor.length > 3) {
            this.marca = valor;
        } else {
            console.log('El valor recibido por parametro debe tener al menos 3 caracteres');
        }
    }

    // Getter para el atributo público modelo
    get modelo() {
        return this.modelo;
    }

    // Setter para el atributo público modelo
    set modelo(valor) {
        if (valor.length > 3) {
            this.modelo = valor;
        } else {
            console.log('El valor recibido por parametro debe tener al menos 3 caracteres');
        }
    }

    // Método para mostrar detalles de la tablet
    mostrarDetalles() {
        console.log(`Serie: ${this.#serie}, Referencia: ${this.#referencia}, Marca: ${this.marca}, Modelo: ${this.modelo}`);
    }
}