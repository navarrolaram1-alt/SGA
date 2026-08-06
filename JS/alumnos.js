const alumno = [
    {
        id:1,
        nombre:"Ana"

    },
    { 
        id:2,
        nombre:"Jose"
    }
];
function obtenerAlumnos(){
return new Promise ((resolve) =>{
setTimeout(() => {
    resolve (alumno)
}, 2000);
})
}

async function iniciar() {
    const datos = await obtenerAlumnos()
    console.table(datos)
    
}
iniciar()

//materias
const materias = [
    {
        id:1,
        nombre:"Programación"

    },
    { 
        id:2,
        nombre:"Bases de datos"
    }
];
function obtenerMaterias(){
return new Promise ((resolve) =>{
setTimeout(() => {
    resolve (materias)
}, 2000);
})
}

async function mostrarmaterias() {
    const datos = await obtenerMaterias()
    console.table(materias)
    
}
mostrarmaterias()

//docentes
const docentes = [
    {
        id:1,
        nombre:"Maria"

    },
    { 
        id:2,
        nombre:"Juan"
    }
];

function obtenerDocentes(){
return new Promise ((resolve) =>{
setTimeout(() => {
    resolve (docentes)
}, 2000);
})
}

async function mostrardocentes() {
    const datos = await obtenerDocentes()
    console.table(docentes)
    
}
mostrardocentes()


async function obtenerAlumnos () {
    const respuesta = await fetch ("https://jsonplaceholder.typicode.com/users")
    const alumnos = await respuesta.json()
    return alumnos 
}

function mostrarAlumnos (alumnos){
//console.table (alumnos)
//console.log(alumnos)
for (const alumno of alumnos) {
    console.log(alumno.name,alumno. email)
}
}

async function iniciar (){
    const alumnos = await obtenerAlumnos()
    mostrarAlumnos(alumnos)


}
//crear obtenerMaterias y crear obtenerDocentes
//mostrar los datos

//clase 03- Agrego alumnos.js y ejemplos de Promise
// traer el recurso post y el recurso coments  que muestre id, name, titulo/body o lo que sea