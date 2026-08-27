const express = require("express")
const app = express()

const alumnos = [
{   id:1,
    nombre:"Ana",
    carrera:"Programación"
},
{
    id:2,
    nombre: "Jose",
    carrera:"Sistemas"
}
,
{
    id:3,
    nombre: "Ema",
    carrera:"Ambiente"
}
,
{
    id:4,
    nombre: "Florencia",
    carrera:"Ingenieria"
}
,
{
    id:5,
    nombre: "Santiago",
    carrera:"Historia"
}
,
{
    id:6,
    nombre: "Amanda",
    carrera:"Ingenieria"
}
,
{
    id:7,
    nombre: "Maria",
    carrera:"Sistemas"
}]


app.get("/alumnos", (req, res) => {
    res.json(alumnos)
})

app.get("/alumnos/:id", (req,res) => {
    const id = Number [req.params.id]
    const alumno = alumnos.find(a => a.id === id)
    res.json(alumno)
})

app.listen(3000, () => {
    console.log("Servidor funcionando en http://localhost:3000")
})
