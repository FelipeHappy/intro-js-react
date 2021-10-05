//Template String
const nombre = 'Cristobal';
const seudonimo = 'Toli'

const nombre_completo = `${nombre} ${seudonimo}`

console.log(nombre_completo);

function getSaludo(nombre){
    return `Hola mundo ${nombre}`
}

console.log(`Este es un texto: ${getSaludo(nombre)}`)