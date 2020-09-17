import React from 'react'
import logo from './resourses/header/logo.png'

export const Header = (props) => {
  return (
    <header className='header'>
      <div className='logo'>
        <img src={logo} alt='Logo booker' className='logo-img' />
        <span className='logo-name'>Booker</span>
      </div>
      <nav className='nav'>
        <ul className='menu-list'>
          <li className='menu-item'>Home</li>
          <li className='menu-item'>Hotels</li>
          <li className='menu-item'>Blog</li>
          <li className='menu-item'>Contact</li>
          <li className='menu-item'>About</li>
          <li className='menu-item'>Faqs</li>
        </ul>
      </nav>
      <div className='control-panel'>
        <div className='currency border'>
          <span className='selected-currency'>USD</span>
          <div className='hide-currency'>
            <ul className='menu-currency'>
              <li className='item-currency'>EUR</li>
              <li className='item-currency'>USD</li>
              <li className='item-currency'>BYN</li>
              <li className='item-currency'>RUB</li>
            </ul>
          </div>
        </div>
        <div className='language border'>
          <span className='selected-language'>English</span>
          <div className='hide-language'>
            <ul className='menu-language'>
              <li className='item-language'>Russian</li>
              <li className='item-language'>English</li>
              <li className='item-language'>Poland</li>
            </ul>
          </div>
        </div>
      </div>
      <div className='sign-login'>
        <div className='login btn'>
          <span className='btn-text'>Login</span>
        </div>
        <div className='signup btn'>
          <span className='btn-text'>Signup</span>
        </div>
      </div>
    </header>
  )
}