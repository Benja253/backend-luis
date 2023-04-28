import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className='header'>
      <nav className='header__nav'>
        <ul className='header__list'>
          <li className='header__item'>
            <Link to='/'>Posts</Link>
          </li>
          <li className='header__item'>
            <Link to='/register'>Register</Link>
          </li>
          <li className='header__item'>
            <Link to='/login'>Login</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header