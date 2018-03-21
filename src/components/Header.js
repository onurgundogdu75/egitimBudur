import React from 'react'
import { Link } from 'react-router'

const Header = () => {
  return (

    <header>
      <nav className='navbar navbar-expand-lg navbar-light container justify-content-between'>
        <a className='navbar-brand' href='#'>Eğitim Budur</a>
        <ul className='navbar-nav'>
          <li className='nav-item'>
            <Link to='/' className='nav-link' activeClassName='active'>Ana Sayfa</Link>
          </li>
          <li className='nav-item'>
            <Link to='' className='nav-link' activeClassName='active'>Hakkımızda</Link>
          </li>
          <li className='nav-item'>
            <Link to='' className='nav-link' activeClassName='active'>İletişim</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
