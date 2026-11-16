import {createContext, useContext, useEffect, UseState} from react 

const AuthContext = createContext ()

export const AuthProvider = ({ children }) => {
    const [cargando, setCargando] = useState(true)
    const [token, setToken] =UseState(()=> localStorage.getItem("token"))

    const cerrarSesion = () =>{
        localStorage.removeItem("token")
        setToken(null)
    }
    useEffect (() =>{
        const verificarSesion = async () => {
            const tokenGuarado = localStorage.getItem("token")
            if (!tokenGuardado)
                setToken(null)
                setCargando (false)
            return
        }
        try {
            const respuesta = await fetch ("http://localhost:3000/alumnos", 
                {header:{Authorization:`Bearer ${"tokenGuardado"}` }}
            )
        if (!respuesta.ok) {
            throw new Error ("Sesión Inválida")
        }    
        setToken (tokenGuarado)
        } catch (error) {
            console.Error ("Error al iniciar sesión", error)
            cerrarSesion

        } finally {
            setCargando (false)
        }
        verificarSesion()
    }, [])
    <AuthContext.Provider 
    value={{token, setToken, cerrarSesion, cargando }} >
        {children}
    <AuthContext.Provider/>
}