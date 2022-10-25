import { createContext, useState, useEffect, useContext } from 'react'
import canciones from '@/assets/listaCanciones.json'

// 1 Creacion del contexto vacio
const SongContext = createContext()

// 2 Creacion del componente Proveedor del contexto
function SongProvider (props) {
  const [list, setList] = useState([]) // Lista de canciones
  const [loading, setLoading] = useState(true) // Loader o Ya cargo la informacion o no?
  const [selectedSong, setSelectedSong] = useState({}) // Info de la cancion seleccionada
  const [search, setSearch] = useState('') // Guardar la palabra que se busca

  // Simular una llamada a la Api de la lista de canciones
  useEffect(() => {
    setTimeout(() => {
      setList(canciones)
      setLoading(false)
    }, 2000)
  }, [])

  const value = {
    list,
    loading,
    selectedSong,
    setSelectedSong,
    search,
    setSearch
  }

  return (
    // Siempre se llama value el prop de Provider con la data
    // value es un objeto que indica que datos SON GLOBALES
    <SongContext.Provider value={value}>
      {props.children}
    </SongContext.Provider>
  )
}

// 3 Consumidor del contexto
// Brinda accesso a la data de los componentes

const useSongContext = () => {
  const context = useContext(SongContext)
  return context
}

// 4 exportar las funciones del Provider y el Consumer
// para que puedan ser invocados en nuestro componentes
export {
  SongProvider,
  useSongContext
}

// 5 Uso de Context
// Nos vamos a ir  a nuestro componente superior (por ejemplo Home)
// envolver a los componentes que necesitan la informacion del contexto
