import React, { useState } from 'react'
import { NavLink, useHistory } from 'react-router-dom'

import logo from '../resourses/header/logo.png'

export const Header = (props) => {
  const [classes, setClasses] = useState(['none'])
  const history = useHistory()
  const addClassHandler = () => {
    if (classes.length === 1) {
      setClasses(prevState => [...prevState, 'mm-active'])
    } else {
      setClasses(['none'])
    }
    console.log(classes)
  }

  return (
    <header className='header'>
      <div className='logo'>
        <img src={logo} alt='Logo booker' className='logo-img' />
        <span className='logo-name'>Booker</span>
      </div>
      <nav className='nav'>
        <ul className='menu-list'>
          <li className='menu-item'><NavLink to='/' activeStyle={{color: '#1E2325'}}>Home</NavLink></li>
          <li className='menu-item'><NavLink to='/catalog' activeStyle={{color: '#1E2325'}}>Hotels</NavLink></li>
          <li className='menu-item'><NavLink to='/blog' activeStyle={{color: '#1E2325'}}>Blog</NavLink></li>
          <li className='menu-item'><NavLink to='/contact' activeStyle={{color: '#1E2325'}}>Contact</NavLink></li>
          <li className='menu-item'><NavLink to='/about' activeStyle={{color: '#1E2325'}}>About</NavLink></li>
          <li className='menu-item'><NavLink to='/faqs' activeStyle={{color: '#1E2325'}}>Faqs</NavLink></li>
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
        <div className='login btn' onClick={() => history.push('/login')}>
          <span className='btn-text'>Login</span>
        </div>
        <div className='signup btn' onClick={() => history.push('/register')}>
          <span className='btn-text'>Signup</span>
        </div>
      </div>



      <div className={classes.length === 2 ? 'mobile-menu__opened' : 'mobile-menu'} onClick={addClassHandler}></div>
      <div className={classes.length === 2 ? classes[1] : classes[0]}>
        <ul className='mm-ul'>
          <li className='mobile-item' onClick={() => history.push('/')}>Home</li>
          <li className='mobile-item' onClick={() => history.push('/catalog')}>Hotels</li>
          <li className='mobile-item'>Blog</li>
          <li className='mobile-item'>Contact</li>
          <li className='mobile-item'>About</li>
          <li className='mobile-item'>Faqs</li>
          <li className='mobile-item' onClick={() => history.push('/login')}>Login</li>
          <li className='mobile-item' onClick={() => history.push('/register')}>Signup</li>
        </ul>
      </div>
    </header>
  )
}