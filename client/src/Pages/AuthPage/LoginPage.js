import React from 'react'
import { NavLink } from 'react-router-dom'

export const LoginPage = () => {
  return (
    <div className='auth-page'>
      <span>Welcome To Booker</span>
      <div className='auth-form'>
        <span>Please login to your account.</span>
        <input type='text' className='input' placeholder='Email' />
        <input type='password' className='input' placeholder='Password' />
        <button className='btn'>Login to Your account</button>
        <span><NavLink to='#'>Forgot password?</NavLink></span>
        <span>Don't have an account? <NavLink to='/register'>Sign Up</NavLink></span>
      </div>
    </div>
  )
}