console.log('Hola React')

//Variables y Constantes

// const nombre = 'Cristobal';
// const apellido = 'Perez'

// let valorDado = 5;
// valorDado = 4;

// console.log(nombre,apellido, valorDado)

// if(true){
//     const nombre = 'Giselle';
//     let valorDadoXD = 10;

//     console.log( nombre, valorDadoXD)
// }
//////////////////////////////////////////////////
//Template String
// const nombre = 'Cristobal';
// const seudonimo = 'Toli'

// const nombre_completo = `${nombre} ${seudonimo}`

// console.log(nombre_completo);

// function getSaludo(nombre){
//     return `Hola mundo ${nombre}`
// }

// console.log(`Este es un texto: ${getSaludo(nombre)}`)
///////////////////////////////////////////////////

const persona = {
    nombre: 'Cristobal',
    edad: 22,
    seudonimo: 'Toli',
    relacion: 'En pareja',
    direccion: {
        ciudad: 'York New',
        zip: 551,
        lat: 14.1213,
        lng: 34.3264
    }
};

console.log(persona);

const persona2 = persona;
persona2.nombre = 'Tola';
console.log(persona2)