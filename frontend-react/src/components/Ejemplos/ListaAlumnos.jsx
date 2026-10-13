import { useEffect, useState } from "react"
export function ListaAlumnos ()
 const [alumnos, setAlumnos]=useState [()]

 useEffect(()=>{
 async function cargarAlumnos(){
    try {
    const respuesta = await fetch (API_ALUMNOS)
    if (!respuesta.ok){
        throw new Error ("No se puede obtener la lista")
    }
    const datos = await respuesta.json()
    setAlumnos(datos)
 } catch (error){
    console.error(error)
 }
}
 cargarAlumnos
},[])


return (
    <>
    <h2> Alumnos </h2>
    {alumnos.map(alumno => (
        <p key={alumno.legajo}>
            {alumno.legajo}-{alumno.nombre}-{alumno.carrera}
        </p>
    ))}
    </>
)