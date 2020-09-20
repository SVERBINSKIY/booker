import React from 'react'
import { NavLink } from 'react-router-dom'

export const RegisterPage = () => {
  return (
    <div className='auth-page'>
      <span>Welcome To Booker</span>
      <div className='auth-form'>
        <span>Registration confirmation will be e-mailed to you.</span>
        <input type='text' className='input' placeholder='Your name' />
        <input type='text' className='input' placeholder='Email' />
        <input type='password' className='input' placeholder='Password' />
        <button className='btn'>Register</button>
        <span>Already a member? <NavLink to='/login'>Login</NavLink></span>
      </div>
    </div>
  )
}