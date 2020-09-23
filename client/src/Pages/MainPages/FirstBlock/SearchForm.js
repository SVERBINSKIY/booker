import React, { useEffect, useState } from 'react'
import DayPickerInput from 'react-day-picker/DayPickerInput'
import 'react-day-picker/lib/style.css';

export const SearchForm = () => {
  const [dateIn, setDateIn] = useState(undefined)
  const [dateOut, setDateOut] = useState(undefined)

  const dateInChangeHandler = day => {
    setDateIn(day)
  }
  const dateOutHandler = day => {
    setDateOut(day)
  }

  useEffect(() => {
    console.log(dateOut)
    console.log(dateIn)
  })

  return (
    <div className='form'>
      <div className='where'>
        <span className='form-title'>Where</span>
        <input type='text' placeholder='Direction' className='form-input'/>
      </div>
      <div className='check-in'>
        <span className='form-title'>Check In</span>
        <div className='form-input'>
          <DayPickerInput onDayChange={dateInChangeHandler} />
        </div>
      </div>
      <div className='check-out'>
        <span className='form-title'>Check Out</span>
        <div className='form-input'>
          <DayPickerInput onDayChange={dateOutHandler} />
        </div>
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