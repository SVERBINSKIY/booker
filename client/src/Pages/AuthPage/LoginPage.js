import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { changeSignInInput } from '../../redux/actions/loginPageAction'

const LoginPage = ({ email, password, changeSignInInput }) => {
  const handleInputChange = e => {
    changeSignInInput(e.target.name, e.target.value)
  }
  const handleFormSubmit = e => {
    e.preventDefault()
  }
  return (
    <div className='auth-page'>
      <span>Welcome To Booker</span>
      <form onSubmit={handleFormSubmit} className='auth-form'>
        <span>Please login to your account.</span>
        <input
          type='email'
          className='input'
          placeholder='Email'
          name='email'
          value={email}
          onChange={handleInputChange}
        />
        <input
          type='password'
          className='input'
          placeholder='Password'
          name='password'
          value={password}
          onChange={handleInputChange}
        />
        <button className='btn' type='submit'>Login to Your account</button>
        <span><NavLink to='#'>Forgot password?</NavLink></span>
        <span>Don't have an account? <NavLink to='/register'>Sign Up</NavLink></span>
      </form>
    </div>
  )
}

const mapStateToProps = state => state
const mapDispatchToProps = {
  changeSignInInput
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)