import React from 'react'
import { useHistory } from 'react-router-dom'

export const ThirdBlock = ({ third, mainPageEmailInputChange }) => {
  const history = useHistory()
  const handleInputChange = e => {
    mainPageEmailInputChange(e.target.value)
  }
  const handleFormSubmit = e => {
    e.preventDefault()
    history.push('/register')
  }
  return (
    <section className='third'>
      <form className='third-wrapper' onSubmit={handleFormSubmit}>
        <span className='third-title'>Safe Time And Money</span>
        <p>Sign up for member price and you cloud save 10% or more on thousands of hotel</p>
        <div className='input-wrapper'>
          <input type='text' placeholder='Your email address' value={third.email} onChange={handleInputChange} />
          <button className='third__btn' type='submit'>Signup</button>
        </div>
      </form>
    </section>
  )
}