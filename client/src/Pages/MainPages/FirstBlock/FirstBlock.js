import React from 'react'
import { SearchForm } from './SearchForm'

export const FirstBlock = () => {
  return (
    <section className='first'>
      <div className='form-control'>
        <span className='first-text'>Nature Await</span>
        <span className='second-text'>Explore the world with us</span>
        <SearchForm />
      </div>
    </section>
  )
}