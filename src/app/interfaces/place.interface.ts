//Interfaz Base para Modelar nuestros datos
//Podemos extender los datos si es necesario con otra interfaz usando extends o integrar una interfaz y funciones dentro de otra para hacerla más robusta.

// Caso Practico:
// INTERFACES DE TIPO: ATRACTIVO TURÍSTICO - PRESTADOR TURISTICO - MUNICIPIO.
// BASADOS EN SUS DEBIDOS FORMULARIOS CON CATEGORÍAS(SERVICIOS COMO DICE EL FORMULARIO) A TENER EN CUENTA.
export default interface Place {
    id?: string;
    name: string;
    latitude: number;
    longitude: number;
    description: string;
    image: string;
}

//Se puede crear otro tipo de interfaces con el fin de modelar otros tipos de datos distintos
//Ejemplos sería categorías
