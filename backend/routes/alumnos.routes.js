const express = require("express")
const { obtenerAlumnos } = require("../controllers/alumnos.controller")
// const alumnosController = require("../controllers/alumnos.controller")
const { obtenerAlumnos, obtenerAlumno, crearAlumno, actualizarAlumno, eliminarAlumno } = require("../controllers/alumnos.controller")
const router = express.Router()

router.get("/", obtenerAlumnos)

router.get("/:id", (req, res) => {
    const id = Number(req.params.id)
    const alumno = alumnos.find(a => a.id === id)
    res.json(alumno)
})
router.get("/:id", obtenerAlumno)

router.post("/", (req, res) => {
    const nuevoAlumno = req.body
    alumnos.push(nuevoAlumno)
    res.json({mensaje: "Alumno registrado correctamente"})
})
router.post("/", crearAlumno)

router.put("/:id", (req, res) => {
    const id = Number(req.params.id)
    const alumno = alumnos.find(alumno => alumno.id === id)
    alumno.id = req.body.id
    alumno.nombre = req.body.nombre
    alumno.carrera = req.body.carrera
    res.json({mensaje: "Alumno actualizado correctamente"})
})
router.put("/:id", actualizarAlumno)

router.delete("/:id", (req, res) => {
    const id = Number(req.params.id)
    alumnos = alumnos.filter(alumno => alumno.id !== id)
    res.json({mensaje: "Alumno eliminado correctamente"})
})
router.delete("/:id", eliminarAlumno)

module.exports = router