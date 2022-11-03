import { createContext, useState, useEffect } from 'react'
// eslint-disable-next-line camelcase
import jwt_decode from 'jwt-decode'

export const AuthContext = createContext()

export function AuthProvider (props) {
  const [isAuth, setIsAuth] = useState(false) // Estoy o no autenticado?
  const [user, setUser] = useState(null) // Info del usuario

  const loginUser = (token) => {
    // Guardar el token en el localStorage del navegador
    // LocalStorage podemos persistir data en el navegador del cliente y permanece la data aun si se cierra la pestana o se actualiza el navegador
    window.localStorage.setItem('token', token)
    const decoded = jwt_decode(token) // Guardo la info del token descodificado en una constante
    setUser(decoded) // Guardamos en el state de user el token descodificado
    setIsAuth(true) // Seteamos el state de is auth en true (esta auntenticado)
  }

  const logout = () => {
    window.localStorage.removeItem('token') // Borramos el token del localStorage
    setIsAuth(false) // Estamos deslogeados
    setUser(null)
  }

  useEffect(() => {
    const token = window.localStorage.getItem('token')
    if (token) {
      const decoded = jwt_decode(token)
      setUser(decoded)
      setIsAuth(true)
    }
  }, [])

  const values = {
    isAuth,
    user,
    loginUser,
    logout
  }

  return (
    <AuthContext.Provider value={values}>
      {props.children}
    </AuthContext.Provider>
  )
}
