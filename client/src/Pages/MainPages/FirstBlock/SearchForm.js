import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import DayPickerInput from 'react-day-picker/DayPickerInput'
import 'react-day-picker/lib/style.css'

export const SearchForm = () => {
  const history = useHistory()
  const [form, setForm] = useState({
    where: '',
    checkIn: {
      day: 0,
      month: 0,
      year: 0
    },
    checkOut: {
      day: 0,
      month: 0,
      year: 0
    },
    guest: {
      rooms: 0,
      adults: 0,
      children: 0
    }
  })

  const dateInChangeHandler = day => {
    setForm(prev => ({...prev, ...{
      checkIn: {day: day.getDate(), month: day.getMonth() + 1, year: day.getFullYear()}
    }}))
  }
  const dateOutHandler = day => {
    setForm(prev => ({...prev, ...{
        checkOut: {day: day.getDate(), month: day.getMonth() + 1, year: day.getFullYear()}
      }}))
  }
  const handleSubmit = event => {
    event.preventDefault()
    history.push('/catalog')
    console.log(form)
  }
  const handleInput = event => {
    event.persist()
    setForm(prev => ({...prev, ...{
      [event.target.name]: event.target.value
      }}))
  }

  return (
    <form className='form' onSubmit={handleSubmit}>
      <div className='where'>
        <span className='form-title'>Where</span>
        <input
          type='text'
          placeholder='Direction'
          name='where'
          className='form-input'
          value={form.where}
          onChange={handleInput}
        />
      </div>
      <div className='check-in'>
        <span className='form-title'>Check In</span>
        <div className='form-input'>
          <DayPickerInput
            onDayChange={dateInChangeHandler}
          />
        </div>
      </div>
      <div className='check-out'>
        <span className='form-title'>Check Out</span>
        <div className='form-input'>
          <DayPickerInput
            onDayChange={dateOutHandler}
          />
        </div>
      </div>
      <div className='guest'>
        <span className='form-title'>Guests</span>
        <input type='text' placeholder="Who's going?" className='form-input'/>
      </div>
      <div className='search'>
        <button className='btn' type='submit'>Search</button>
      </div>
    </form>
  )
}