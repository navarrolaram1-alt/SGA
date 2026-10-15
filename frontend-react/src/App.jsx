//import { ListaAlumnos } from "./components/ListaAlumnos"
import { useState } from "react"
import FormularioA from "./components/FormularioA"

function App()
{
const (actualizar, setActualizar) = useState (0)
function AlumnoCreado(){
  setActualizar (valor => valor + 1)
}

return (
   <>
   <FormularioA />
 {/* <ListaAlumnos /> */}
   </>
  )
}
export default App