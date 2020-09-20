import React from 'react'
import DayPickerInput from 'react-day-picker/DayPickerInput'
import 'react-day-picker/lib/style.css';

export const MenuComponent = () => {
  return (
    <div className='catalog__menu'>
      <div className='menu__where'>
        <span>Where</span>
        <input type='text' placeholder='Direction'/>
      </div>
      <div className='menu__check-in'>
        <span>Check In</span>
        <DayPickerInput />
      </div>
      <div className='menu__check-out'>
        <span>Check Out</span>
        <DayPickerInput />
      </div>
      <div className='menu__guests'>
        <span>Guests</span>
        <input type='text' placeholder="Who's going?"/>
      </div>
      <div className='menu__button'>
        <button>Search</button>
      </div>
    </div>
  )
}