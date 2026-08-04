console.log("inicio")
setTimeout (() => {
console.log("Buscando alumnos")
}, 3000)
console.log("fin")

function saludar (){
    console.log("hola")
}
function ejecutar(funcion){
    funcion();
}
ejecutar(saludar)

function despedirse (){
console.log("hasta luego")
}
setTimeout (despedirse, 3000)

setTimeout (() => {
console.log("Buscando docentes")
}, 3000)

setTimeout (() => {
console.log("Buscando materias")
}, 4000)

setTimeout (() => {
console.log("Buscando cursos")
}, 1000)


console.log ("Abriendo SGA")
setTimeout (() => {
console.log("Alumnos cargados")
}, 3000)

console.log("El usuario puede seguir navegando")