class Reloj {
    // Atributos privados
    #marca;       // Marca del reloj
    #tipoCorrea;  // Tipo de correa del reloj
    #color;       // Color del reloj
    #materialCaja; // Material de la caja del reloj

    // Constructor
    constructor(marca, tipoCorrea, color, materialCaja) {
        this.marca = marca;         // Usa el setter para validar la marca
        this.tipoCorrea = tipoCorrea; // Usa el setter para validar el tipo de correa
        this.color = color;         // Usa el setter para validar el color
        this.materialCaja = materialCaja; // Usa el setter para validar el material de la caja
    }

    // Getter para el atributo privado marca
    get marca() {
        return this.#marca;
    }

    // Setter para el atributo privado marca
    set marca(valor) {
        if (typeof valor === 'string' && valor.length > 3) {
            this.#marca = valor;
        } else {
            console.log('El valor recibido por parametro debe tener al menos 3 caracteres');
        }
    }

    // Getter para el atributo privado tipoCorrea
    get tipoCorrea() {
        return this.#tipoCorrea;
    }

    // Setter para el atributo privado tipoCorrea
    set tipoCorrea(valor) {
        if (typeof valor === 'string' && valor.length > 3) {
            this.#tipoCorrea = valor;
        } else {
            console.log('El valor recibido por parametro debe tener al menos 3 caracteres');
        }
    }

    // Getter para el atributo privado color
    get color() {
        return this.#color;
    }

    // Setter para el atributo privado color
    set color(valor) {
        if (typeof valor === 'string' && valor.length > 3) {
            this.#color = valor;
        } else {
            console.log('El valor recibido por parametro debe tener al menos 3 caracteres');
        }
    }

    // Getter para el atributo privado materialCaja
    get materialCaja() {
        return this.#materialCaja;
    }

    // Setter para el atributo privado materialCaja
    set materialCaja(valor) {
        switch (valor) {
            case 'acero inoxidable':
            case 'oro':
            case 'ceramica':
                this.#materialCaja = valor;
                break;
            default:
                console.log('El tipo de caja no existe, solo existen "acero inoxidable", "oro" o "ceramica"');
        }
    }

    // Método para mostrar detalles del reloj
    mostrarDetalles() {
        console.log(`Marca: ${this.#marca}, Tipo de correa: ${this.#tipoCorrea}, Color: ${this.#color}, Material de la caja: ${this.#materialCaja}`);
    }

    // Método para mostrar la categoría del cliente
    mostrarCategoriaCliente(tipoCaja) {
        switch (tipoCaja) {
            case 'oro':
                console.log('Cliente de lujo');
                break;
            case 'ceramica':
                console.log('Cliente VIP');
                break;
            case 'acero inoxidable':
                console.log('Cliente normal');
                break;
            default:
                console.log('El tipo de caja no existe, solo existen "acero inoxidable", "oro" o "ceramica"');
        }
    }
}