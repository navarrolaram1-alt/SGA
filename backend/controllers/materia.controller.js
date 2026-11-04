const Materia = require("../models/Materia")

async function obtenerMaterias(req, res) {
    try {
        const materias = await Materia.find()
        res.json(materias)
    } catch (error) {
        res.status(500).json({
            mensaje: "Error al obtener las materias"
        })
    }
}

async function obtenerMateria(req, res) {
    try {
        const materia = await Materia.findOne({
            codigo: req.params.codigo
        })
        if (!materia) {
            return res.status(404).json({
                mensaje: "Materia no encontrada"
            })
        }
        res.json(materia)
    } catch (error) {
        res.status(500).json({
            mensaje: "Error al obtener la materia"
        })
    }
}

async function crearMateria(req, res) {
    try {
        const { codigo, nombre, descripcion, cargaHoraria, estado } = req.body
        if (!codigo || !nombre || cargaHoraria === undefined || !estado) {
            return res.status(400).json({
                mensaje: "Código, nombre, carga horaria y estado son obligatorios"
            })
        }
        if (typeof codigo !== "string" || typeof nombre !== "string") {
            return res.status(400).json({
                mensaje: "El código y el nombre deben ser un texto"
            })
        }
        if (codigo.trim() === "" || nombre.trim() === "") {
            return res.status(400).json({
                mensaje: "El código y el nombre no pueden estar vacíos"
            })
        }
        if (descripcion && (typeof descripcion !== "string" || descripcion.trim() === "")) {
            return res.status(400).json({
                mensaje: "La descripción no puede contener solo espacios"
            })
        }
        if (!Number.isInteger(cargaHoraria) || cargaHoraria <= 0) {
            return res.status(400).json({
                mensaje: "La carga horaria debe ser un número entero mayor que cero"
            })
        }
        if (estado !== "activa" && estado !== "inactiva") {
            return res.status(400).json({
                mensaje: "El estado debe ser activa o inactiva"
            })
        }
        const existe = await Materia.findOne({
            codigo: codigo.trim()
        })
        if (existe) {
            return res.status(400).json({
                mensaje: "El código ya existe"
            })
        }
        const nuevaMateria = await Materia.create({
            codigo: codigo.trim(),
            nombre: nombre.trim(),
            descripcion: descripcion ? descripcion.trim() : "",
            cargaHoraria,
            estado
        })
        res.status(201).json(nuevaMateria)
    } catch (error) {
        if (error.code === 11000) {
            return res.status(400).json({
                mensaje: "El código ya existe"
            })
        }
        res.status(500).json({
            mensaje: "Error al guardar la materia"
        })
    }
}

async function actualizarMateria(req, res) {
    try {
        const materiaActual = await Materia.findOne({
            codigo: req.params.codigo
        })
        if (!materiaActual) {
            return res.status(404).json({
                mensaje: "Materia no encontrada"
            })
        }
        const { nombre, descripcion, cargaHoraria, estado } = req.body
        const codigo = req.body.codigo === undefined ? req.params.codigo : req.body.codigo
        if (!codigo || !nombre || cargaHoraria === undefined || !estado) {
            return res.status(400).json({
                mensaje: "Código, nombre, carga horaria y estado son obligatorios"
            })
        }
        if (typeof codigo !== "string" || typeof nombre !== "string") {
            return res.status(400).json({
                mensaje: "El código y el nombre deben ser un texto"
            })
        }
        if (codigo.trim() === "" || nombre.trim() === "") {
            return res.status(400).json({
                mensaje: "El código y el nombre no pueden estar vacíos"
            })
        }
        if (descripcion && (typeof descripcion !== "string" || descripcion.trim() === "")) {
            return res.status(400).json({
                mensaje: "La descripción no puede contener solo espacios"
            })
        }
        if (!Number.isInteger(cargaHoraria) || cargaHoraria <= 0) {
            return res.status(400).json({
                mensaje: "La carga horaria debe ser un número entero mayor que cero"
            })
        }
        if (estado !== "activa" && estado !== "inactiva") {
            return res.status(400).json({
                mensaje: "El estado debe ser activa o inactiva"
            })
        }
        if (codigo.trim() !== req.params.codigo) {
            const existe = await Materia.findOne({
                codigo: codigo.trim()
            })
            if (existe) {
                return res.status(400).json({
                    mensaje: "El código ya existe"
                })
            }
        }
        const materia = await Materia.findOneAndUpdate(
            { codigo: req.params.codigo },
            {
                codigo: codigo.trim(),
                nombre: nombre.trim(),
                descripcion: descripcion ? descripcion.trim() : "",
                cargaHoraria,
                estado
            },
            { returnDocument: "after", runValidators: true }
        )
        res.json(materia)
    } catch (error) {
        if (error.code === 11000) {
            return res.status(400).json({
                mensaje: "El código ya existe"
            })
        }
        res.status(500).json({
            mensaje: "Error al actualizar la materia"
        })
    }
}

async function eliminarMateria(req, res) {
    try {
        const materia = await Materia.findOneAndDelete(
            { codigo: req.params.codigo }
        )
        if (!materia) {
            return res.status(404).json({
                mensaje: "Materia no encontrada"
            })
        }
        res.json({ mensaje: "Materia eliminada correctamente" })
    } catch (error) {
        res.status(500).json({
            mensaje: "Error al eliminar la materia"
        })
    }
}

module.exports = {
    obtenerMaterias,
    obtenerMateria,
    crearMateria,
    actualizarMateria,
    eliminarMateria
}