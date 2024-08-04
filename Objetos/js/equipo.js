class Equipo {
    // Atributos
    #nombre;
    #ciudad;
    #estadio;
    #directorTecnico;
    #sitioWeb;

    // Constructor para inicializar las propiedades privadas
    constructor(nombre, ciudad, estadio, directorTecnico, sitioWeb) {
        this.#nombre = nombre;
        this.#ciudad = ciudad;
        this.#estadio = estadio;
        this.#directorTecnico = directorTecnico;
        this.#sitioWeb = sitioWeb;
    }

    // Getters
    get nombre() {
        return this.#nombre;
    }

    get ciudad() {
        return this.#ciudad;
    }

    get estadio() {
        return this.#estadio;
    }

    get directorTecnico() {
        return this.#directorTecnico;
    }

    get sitioWeb() {
        return this.#sitioWeb;
    }

    // Setters
    set nombre(nombre) {
        this.#nombre = nombre;
    }

    set ciudad(ciudad) {
        this.#ciudad = ciudad;
    }

    set estadio(estadio) {
        this.#estadio = estadio;
    }

    set directorTecnico(directorTecnico) {
        this.#directorTecnico = directorTecnico;
    }

    set sitioWeb(sitioWeb) {
        this.#sitioWeb = sitioWeb;
    }

    // Método para mostrar detalles del equipo en una sola línea
    mostrarDetalles() {
        return `Nombre: ${this.#nombre}, Ciudad: ${this.#ciudad}, Estadio: ${this.#estadio}, Director Técnico: ${this.#directorTecnico}, Sitio Web: ${this.#sitioWeb}`;
    }
}

// Crear objetos de la clase Equipo con la información proporcionada
const atleticobucaramanga = new Equipo(
    "Atlético Bucaramanga",
    "Bucaramanga",
    "Estadio Alfonso López",
    "Diego Cagna",
    "https://atleticobucaramanga.com"
);

const atleticonacional = new Equipo(
    "Atlético Nacional",
    "Medellín",
    "Estadio Atanasio Girardot",
    "Paulo Autuori",
    "https://www.atlnacional.com"
);

const millonarios = new Equipo(
    "Millonarios FC",
    "Bogotá",
    "Estadio El Campín",
    "Alberto Gamero",
    "https://www.millonarios.com.co"
);

const santaFe = new Equipo(
    "Independiente Santa Fe",
    "Bogotá",
    "Estadio El Campín",
    "Harold Rivera",
    "https://www.santafe.com.co"
);

const deportivoCali = new Equipo(
    "Deportivo Cali",
    "Cali",
    "Estadio Deportivo Cali",
    "Rafael Dudamel",
    "https://www.deportivocali.co"
);

const junior = new Equipo(
    "Junior FC",
    "Barranquilla",
    "Estadio Metropolitano Roberto Meléndez",
    "Samuel Piñeiro",
    "https://juniorfc.co"
);

const onceCaldas = new Equipo(
    "Once Caldas",
    "Manizales",
    "Estadio Palogrande",
    "Pedro Sarmiento",
    "https://www.oncecaldas.com"
);

const deportesTolima = new Equipo(
    "Deportes Tolima",
    "Ibagué",
    "Estadio Manuel Murillo Toro",
    "Hernán Torres",
    "https://www.deportestolima.com.co"
);

const envigado = new Equipo(
    "Envigado FC",
    "Envigado",
    "Estadio Polideportivo Sur",
    "Eduardo Lara",
    "https://www.envigadofc.com.co"
);

const jaguaresCordoba = new Equipo(
    "Jaguares de Córdoba",
    "Montería",
    "Estadio Jaraguay",
    "Diego Martínez",
    "https://jaguaresfc.co"
);

// Mostrar detalles de los equipos
atleticobucaramanga.mostrarDetalles(); //Nombre: Atlético Bucaramanga, Ciudad: Bucaramanga, Estadio: Estadio Alfonso López, Director Técnico: Diego Cagna, Sitio Web: https://atleticobucaramanga.com;
atleticonacional.mostrarDetalles(); //Nombre: Atlético Nacional, Ciudad: Medellín, Estadio: Estadio Atanasio Girardot, Director Técnico: Paulo Autuori, Sitio Web: https://www.atlnacional.com
millonarios.mostrarDetalles(); //Nombre: Millonarios FC, Ciudad: Bogotá, Estadio: Estadio El Campín, Director Técnico: Alberto Gamero, Sitio Web: https://www.millonarios.com.co
santaFe.mostrarDetalles(); //Nombre: Independiente Santa Fe, Ciudad: Bogotá, Estadio: Estadio El Campín, Director Técnico: Harold Rivera, Sitio Web: https://www.santafe.com.co
deportivoCali.mostrarDetalles(); //Nombre: Deportivo Cali, Ciudad: Cali, Estadio: Estadio Deportivo Cali, Director Técnico: Rafael Dudamel, Sitio Web: https://www.deportivocali.co
junior.mostrarDetalles(); //Nombre: Junior FC, Ciudad: Barranquilla, Estadio: Estadio Metropolitano Roberto Meléndez, Director Técnico: Samuel Piñeiro, Sitio Web: https://juniorfc.co
onceCaldas.mostrarDetalles(); //Nombre: Once Caldas, Ciudad: Manizales, Estadio: Estadio Palogrande, Director Técnico: Pedro Sarmiento, Sitio Web: https://www.oncecaldas.com
deportesTolima.mostrarDetalles(); //Nombre: Deportes Tolima, Ciudad: Ibagué, Estadio: Estadio Manuel Murillo Toro, Director Técnico: Hernán Torres, Sitio Web: https://www.deportestolima.com.co
envigado.mostrarDetalles(); //Nombre: Envigado FC, Ciudad: Envigado, Estadio: Estadio Polideportivo Sur, Director Técnico: Eduardo Lara, Sitio Web: https://www.envigadofc.com.co
jaguaresCordoba.mostrarDetalles(); //Nombre: Jaguares de Córdoba, Ciudad: Montería, Estadio: Estadio Jaraguay, Director Técnico: Diego Martínez, Sitio Web: https://jaguaresfc.co

