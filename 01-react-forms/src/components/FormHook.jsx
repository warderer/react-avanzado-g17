import { useState, useEffect } from 'react'
import useForm from '../hooks/useForm'
import logo from '../assets/react.svg'

const FormHook = () => {
  // Paso 1: Crear un Unico estado con toda la info en forma objeto
  const [datos, setDatos] = useState({
    nombre: '',
    apellido: '',
    edad: 0,
    genero: '',
    email: '',
    password: ''
  })
  // Funcion que le mandamos por callback
  const sendData = (data) => {
    console.log(data)
  }
  // Paso 4: uso de mi custom Hook de useForm
  const { input, handleInputChange, handleSubmit } = useForm(sendData, datos)

  // Paso 2: Vamos a simular una peticion de un api y llenamos la info de datos
  useEffect(() => {
    setTimeout(() => {
      const info = {
        // Simulamos que esta info viene de un api o backend
        nombre: 'Francisco',
        apellido: 'Campos',
        edad: 28,
        genero: 'M',
        email: 'hola@hola.com',
        password: 'hola1234'
      }
      setDatos(info)
    }, 2000)
  }, [])

  // Paso 3: Crear mi formulario con JSX
  return (
    <div className='login'>
      <div className='login-container'>
        <img
          src={logo}
          alt='logo'
          className='logo'
          width='200px'
          height='200px'
        />
        <form>
          <label htmlFor='nombre'>Nombre</label>
          <input
            type='text'
            name='nombre'
            placeholder='Tu nombre'
            id='nombre'
            onChange={handleInputChange}
            value={input.nombre}
          />
          <label htmlFor='apellido'>Apellido</label>
          <input
            type='text'
            name='apellido'
            placeholder='Tu Apellido'
            id='apellido'
            onChange={handleInputChange}
            value={input.apellido}
          />
          <label htmlFor='edad'>Edad</label>
          <input
            type='number'
            name='edad'
            placeholder='Tu Edad'
            id='edad'
            onChange={handleInputChange}
            value={input.edad}
          />
          <label htmlFor='genero'>Genero</label>
          <select name='genero' id='genero' onChange={handleInputChange} value={input.genero}>
            <option value=''>Elige tu genero</option>
            <option value='M'>Masculino</option>
            <option value='F'>Femenino</option>
            <option value='O'>Otro</option>
          </select>
          <label htmlFor='email'>Email</label>
          <input
            type='text'
            name='email'
            placeholder='correo@correo.com'
            id='email'
            onChange={handleInputChange}
            value={input.email}
          />
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            name='password'
            placeholder='correo@correo.com'
            id='password'
            onChange={handleInputChange}
            value={input.password}
          />
          <button onClick={handleSubmit}>Iniciar Sesion</button>
        </form>
      </div>
    </div>
  )
}

export default FormHook
