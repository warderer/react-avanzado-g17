import './App.css'
import { Header } from '@/components/Header'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from '@/context/AuthContext'
import RoutesIndex from './routes'

function App () {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <Header />
          <RoutesIndex />
        </AuthProvider>
      </BrowserRouter>
    </>
  )
}

export default App
