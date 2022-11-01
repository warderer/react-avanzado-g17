import './header.scss'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <nav className='header'>
      <Link to='/' className='header__logo'>LOGO</Link>
      <ul className='header__nav-list'>
        <li className='header__list-item'>
          <Link to='/secret' className='header__item-link  header__item-link--is-active'>Secret</Link>
        </li>
        <li className='header__list-item'>
          <Link to='/login' className='header__item-link'>Login</Link>
        </li>
        <li className='header__list-item'>
          <Link to='/signup' className='header__item-link'>Signup</Link>
        </li>
      </ul>
    </nav>
  )
}
export default Header
