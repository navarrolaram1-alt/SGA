const mongoose = require("mongoose")

const materiaSchema = new mongoose.Schema({
    codigo: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    nombre: {
        type: String,
        required: true,
        trim: true,
        minlength: 3
    },
    descripcion: {
        type: String,
        trim: true
    },
    cargaHoraria: {
        type: Number,
        required: true,
        min: 1,
        validate: Number.isInteger
    },
    estado: {
        type: String,
        required: true,
        enum: ["activa", "inactiva"]
    }
},
{
    versionKey: false
}
)

const Materia = mongoose.model("Materia", materiaSchema)

module.exports = Materia