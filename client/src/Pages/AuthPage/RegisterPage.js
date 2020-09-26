import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { changeLoginInput } from '../../redux/actions/loginPageAction'

const RegisterPage = ({ mainPage, login, changeLoginInput }) => {
  const onFirstEmail = mainPage.third.email
  useEffect(() => {
    changeLoginInput('email', onFirstEmail)
  }, [changeLoginInput, onFirstEmail])
  const handleInputChange = e => {
    changeLoginInput(e.target.name, e.target.value)
  }
  const handleFormSubmit = e => {
    e.preventDefault()
  }

  return (
    <div className='auth-page'>
      <span>Welcome To Booker</span>
      <form onSubmit={handleFormSubmit} className='auth-form'>
        <span>Registration confirmation will be e-mailed to you.</span>
        <input
          type='text'
          className='input'
          placeholder='Your name'
          name='name'
          value={login.signUp.name}
          onChange={handleInputChange}
        />
        <input
          type='email'
          className='input'
          placeholder='Email'
          name='email'
          value={login.signUp.email}
          onChange={handleInputChange}
        />
        <input
          type='password'
          className='input'
          placeholder='Password'
          name='password'
          value={login.signUp.password}
          onChange={handleInputChange}
        />
        <input
          type='password'
          className='input'
          placeholder='Confirm Password'
          name='password'
        />
        <button
          className='btn'
          type='submit'
        >
          Register
        </button>
        <span>Already a member? <NavLink to='/login'>Login</NavLink></span>
      </form>
    </div>
  )
}

const mapStateToProps = state => state
const mapDispatchToProps = {
  changeLoginInput
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterPage)