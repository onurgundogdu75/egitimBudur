import React from 'react'
import { Link } from 'react-router'

class Header extends React.Component {
  constructor () {
    super()
    this.state = {
      isNavOpen: false
    }
  }

  buttonClicked () {
    this.setState = ({
      isNavOpen: !this.state.isNavOpen
    })
  }

  render () {
    return (

      <header>
        <nav className='navbar navbar-expand-lg navbar-light container justify-content-between'>
          <a className='navbar-brand' href='#'>Eğitim Budur</a>
          <button className='navbar-toggler' type='button' onClick={this.buttonClicked.bind(this)}>
            <span className='navbar-toggler-icon' />
          </button>
          <div className='navbar-collapse' style={{ display: this.state.isNavOpen ? 'block' : 'none' }}>
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
          </div>
        </nav>
      </header>
    )
  }
}

export default Header
