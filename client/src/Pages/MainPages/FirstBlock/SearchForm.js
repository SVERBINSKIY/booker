import React from 'react'

export const SearchForm = () => {
  return (
    <div className='form'>
      <div className='where'>
        <span className='form-title'>Where</span>
        <input type='text' placeholder='Direction' className='form-input'/>
      </div>
      <div className='check-in'>
        <span className='form-title'>Check In</span>
        <input type='text' placeholder='DD/MM/YYYY' className='form-input'/>
      </div>
      <div className='check-out'>
        <span className='form-title'>Check Out</span>
        <input type='text' placeholder='DD/MM/YYYY' className='form-input'/>
      </div>
      <div className='guest'>
        <span className='form-title'>Guests</span>
        <input type='text' placeholder="Who's going?" className='form-input'/>
      </div>
      <div className='search'>
        <button className='btn'>Search</button>
      </div>
    </div>
  )
}