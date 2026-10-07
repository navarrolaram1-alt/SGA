// const alumnos = [
//     {
//         id: 1,
//         nombre: "Ana"
//     },
//     {
//         id: 2,
//         nombre: "José"
//     }
// ];
// function obtenerAlumnos(){
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(alumnos)
//         }, 2000);
//     })
// }

// crear obtenerMaterias()
// crear obtenerDocentes()
// mostrar los datos a través de async/await

// async function obtenerAlumnos() {
//     const respuesta = await fetch("https://jsonplaceholder.typicode.com/users")
//     const alumnos = await respuesta.json()
//     return alumnos
// }

// function mostrarAlumnos(alumnos){
// //    console.table(alumnos)
// console.log(typeof alumnos)
// localStorage.setItem("alumnos", JSON.stringify(alumnos))
// const datos = localStorage.getItem("alumnos")
// console.log(typeof datos)
// console.log(datos)
// const alumnosRecuperados = JSON.parse(datos)
// console.log(typeof alumnosRecuperados)
// console.table(alumnosRecuperados)

// //    console.log(alumnos[5])
// // for (const alumno of alumnos){
// //     console.log(alumno.id, alumno.name, alumno.email)
// // }
// }

// async function inciar(){
//     const alumnos = await obtenerAlumnos()  
//     mostrarAlumnos(alumnos)
// }

// inciar()
const formulario = document.querySelector("#formulario")
const listaAlumnos = document.querySelector("#listaAlumnos")
let alumnoEditandoLegajo = null
let alumnoEditar = null
const btnCancelar = document.querySelector("#btnCancelar")
btnCancelar.style.display = "none"
const btnGuardar = document.querySelector("#btnGuardar")
const API_ALUMNOS = "http://localhost:3000/alumnos"

formulario.addEventListener("submit", async function (event) {
    event.preventDefault();

    const legajo = document.querySelector("#legajo").value.trim()
    const nombre = document.querySelector("#nombre").value.trim()
    const carrera = document.querySelector("#carrera").value.trim()
    const correo = document.querySelector("#correo").value.trim()

    if (legajo === "" || nombre === "" || carrera === "" || correo === "") {
        mostrarMensaje("Todos los campos son obligatorios", "mje-error")
        return
    }

    if (!correo.includes("@")) {
        mostrarMensaje("Ingrese un correo electrónico válido", "mje-error")
        return
    }

    if (nombre.length < 3) {
        mostrarMensaje("El nombre debe tener al menos 3 caracteres", "mje-error")
        return
    }

    if (alumnoEditandoLegajo === null) {
        const alumno = {
            legajo: Number(legajo),
            nombre: nombre,
            carrera: carrera,
            correo: correo
        }
        const respuesta = await fetch(API_ALUMNOS, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(alumno)
        })
        if (!respuesta.ok) {
            mostrarMensaje("No se pudo guardar el alumno", "mje-error")
            return
        }
        mostrarMensaje("Alumno guardado correctamente", "mje-exito")
    } else {
        const datosActuales = {
            nombre: nombre,
            carrera: carrera,
            correo: correo
        }
        if (JSON.stringify(datosActuales) === JSON.stringify(alumnoEditar)){
            mostrarMensaje("No se realizaron cambios", "mje-adv")
            return
        }
        const respuesta = await fetch(`${API_ALUMNOS}/${alumnoEditandoLegajo}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                nombre: nombre,
                carrera: carrera,
                correo: correo
            })
        })
        if (!respuesta.ok) {
            mostrarMensaje("No se pudo actualizar el alumno", "mje-error")
            return
        }
        alumnoEditandoLegajo = null
        alumnoEditar = null
        btnGuardar.textContent = "Guardar Alumno"
        document.querySelector("#legajo").disabled = false
        mostrarMensaje("Alumno actualizado correctamente", "mje-exito")
    }
    await actualizarListaAlumnos()
    formulario.reset()
});

async function obtenerAlumnos() {
    const respuesta = await fetch(API_ALUMNOS)
    if (!respuesta.ok) {
        mostrarMensaje("No se pudo obtener la lista de alumnos", "mje-error")
        return []
    }
    const alumnos = await respuesta.json()
    return alumnos
}

function mostrarAlumnos(alumnos) {
    listaAlumnos.innerHTML = ""
    for (const alumno of alumnos) {
        listaAlumnos.innerHTML += `
        <tr>
            <td>${alumno.legajo}</td>
            <td>${alumno.nombre}</td>
            <td>${alumno.carrera}</td>
            <td>${alumno.correo}</td>
            <td>
                <button class="btn-editar" data-legajo="${alumno.legajo}" title="Editar alumno">
                    <i class="fa-solid fa-pen"></i>
                </button>
                <button class="btn-eliminar" data-legajo="${alumno.legajo}" title="Eliminar alumno">
                    <i class="fa-solid fa-trash"></i>
                </button>
            </td>
        </tr>
        `;
    }
}
