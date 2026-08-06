/*console.log("inicio")
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

console.log("El usuario puede seguir navegando")*/

/*
function obtenerAlumnos(){
  return new Promise((resolve) => {
    setTimeout (() => {
     resolve (["Ana","Jose", "Rosa"])
    }, 3000);
  })
}

//obtenerAlumnos().then((alumnos) =>{
//   console.log (alumnos)
//})

async function iniciar() {
    const alumnos = await obtenerAlumnos()
    console.log(alumnos)
    
}
iniciar()*/


//O USAMOS THEN O USAMOS AWAIT, LA RECOMENDABLE ES AWAIT PORQUE ES MÁS MODERNA


/*function obtenerClima(){
    return new Promise ((resolve) =>{
    setTimeout(() => {
        resolve ("22°c- Soleado")
    }, 2000);
    
    }
)
}

obtenerClima().then ((clima)=>{
    console.log(clima)
});

async function mostrarClima() {
    const clima = await obtenerClima()
    console.log(clima)
    
}
mostrarClima*/


//saldobancario

function consultarSaldo(){
    return new Promise((resolve) => {
        setTimeout(() => {
           resolve(125000) 
        }, 3000);
    })
}

async function monstrarSaldo(){
    const saldo = await consultarSaldo()
    console.log(`Su saldo es: $${saldo}`)
}
monstrarSaldo()

function iniciarSesion(){
    return new Promise ((resolve) =>{
        setTimeout(() => {
           resolve("Bienvenida, Mely") 
        }, 2000);
    })
}
async function saludar(){
    const saludo = await iniciarSesion()
    console.log(saludo)
}
saludar()
// async function mostrarUsuario() {
//     const mensaje = await iniciarSesion()
//     console.log(mensaje);
// }
// mostrarUsuario();



// function obtenerUsuario() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve({
//                 id: 1,
//                 nombre: "Maria",
//                 edad: 25
//             })
//         }, 3000);
//     })
// }

// async function mostrarUsuario() {
//     console.log("Consultando usuario...")
//     const usuario = await obtenerUsuario()
//     console.log(usuario)
// }

// mostrarUsuario();


//`código`


async function prueba () {
const respuesta = await fetch ("https://jsonplaceholder.typicode.com/users")
console.log (respuesta)
}
prueba ()
