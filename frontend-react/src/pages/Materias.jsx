import { ListaMaterias } from "../components/ListaMaterias"
import { useState } from "react"
import { Alert } from "@mui/material"
import FormularioMateria from "../components/FormularioMateria"

export default function Materias() {
const [actualizar, setActualizar] = useState(0)
const [materiaEditar, setMateriaEditar] = useState(null)
const [exito, setExito] = useState("")

function materiaCreada(mensaje) {
  setActualizar(valor => valor + 1)
  setMateriaEditar(null)
  setExito(mensaje)
}

function seleccionarMateria(materia) {
  setExito("")
  setMateriaEditar(materia)
}

function cancelarEdicion() {
  setExito("")
  setMateriaEditar(null)
}

return (
   <>
   {exito && (
     <Alert severity="success" role="status" sx={{ mb: 3 }}>
       {exito}
     </Alert>
   )}
   <FormularioMateria key={materiaEditar?.codigo ?? "nuevo"}
   onMateriaCreado={materiaCreada}
   materiaEditar={materiaEditar}
   onCancelar={cancelarEdicion}
   />
   <ListaMaterias
   actualizar={actualizar}
   onMateriaCreado={materiaCreada}
   onEditarMateria={seleccionarMateria}
   />
  </>
  )
}