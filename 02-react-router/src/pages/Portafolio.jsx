import { Link, Outlet } from 'react-router-dom'

const Portafolio = () => {
  return (
    <>
      <h1>Portafolio</h1>

      <nav>
        <ul>
          <li>
            <Link to='/portafolio/1'>Pinterest</Link>
          </li>
          <li>
            <Link to='/portafolio/2'>Cajero</Link>
          </li>
          <li>
            <Link to='/portafolio/3'>Pokédex</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  )
}
export default Portafolio
