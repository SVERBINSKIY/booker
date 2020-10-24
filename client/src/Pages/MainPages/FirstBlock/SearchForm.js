import React, { useState } from 'react'
import DayPickerInput from 'react-day-picker/DayPickerInput'
import 'react-day-picker/lib/style.css'

export const SearchForm = ({
  first,
  showGuest,
  hideGuest,
  guestControl,
  setCheckIn,
  setCheckOut,
  mainPageInputChange,
  handleButtonSearch,
}) => {
  const [isGuest, setIsGuest] = useState(false)

  const handleInput = (event) => {
    event.persist()
    mainPageInputChange(event.target.name, event.target.value)
  }
  const handleGuestClick = () => {
    if (!isGuest) {
      setIsGuest(true)
      showGuest()
    } else {
      setIsGuest(false)
      hideGuest()
    }
  }
  const handleButtonSearchClick = (e) => {
    e.preventDefault()
    handleButtonSearch(first)
  }

  return (
    <form className='form' onSubmit={handleButtonSearchClick}>
      <div className='where'>
        <span className='form-title'>Where</span>
        <input
          type='text'
          placeholder='Direction'
          name='where'
          className='form-input'
          value={first.where}
          onChange={handleInput}
        />
      </div>
      <div className='check-in'>
        <span className='form-title'>Check In</span>
        <div className='form-input'>
          <DayPickerInput
            onDayChange={(day) => {
              setCheckIn(day)
            }}
          />
        </div>
      </div>
      <div className='check-out'>
        <span className='form-title'>Check Out</span>
        <div className='form-input'>
          <DayPickerInput
            onDayChange={(day) => {
              setCheckOut(day)
            }}
          />
        </div>
      </div>
      <div className='guest'>
        <span className='form-title'>Guests</span>
        <input
          type='text'
          placeholder="Who's going?"
          className='form-input'
          onClick={handleGuestClick}
        />
        <div className={`guestSection-${first.guests}`}>
          <div className='guestSection__item'>
            <div className='info'>
              <p className='item-title'>Rooms</p>
              <p className='sub-title'>Min 1 Room</p>
            </div>
            <div className='counter'>
              <i
                className='fa fa-minus btn-counter'
                onClick={() => {
                  guestControl('room', '-')
                }}
              ></i>
              <input
                type='text'
                name='rooms'
                className='count-text'
                min='1'
                value={first.rooms}
                readOnly
              />
              <i
                className='fa fa-plus btn-counter'
                onClick={() => {
                  guestControl('room', '+')
                }}
              ></i>
            </div>
          </div>
          <div className='guestSection__item'>
            <div className='info'>
              <p className='item-title'>Adults</p>
              <p className='sub-title'>18 And Older</p>
            </div>
            <div className='counter'>
              <i
                className='fa fa-minus btn-counter'
                onClick={() => {
                  guestControl('adult', '-')
                }}
              ></i>
              <input
                type='text'
                name='adults'
                className='count-text'
                min='1'
                value={first.adults}
                readOnly
              />
              <i
                className='fa fa-plus btn-counter'
                onClick={() => {
                  guestControl('adult', '+')
                }}
              ></i>
            </div>
          </div>
          <div className='guestSection__item'>
            <div className='info'>
              <p className='item-title'>Children</p>
              <p className='sub-title'>Ages 2-18</p>
            </div>
            <div className='counter'>
              <i
                className='fa fa-minus btn-counter'
                onClick={() => {
                  guestControl('children', '-')
                }}
              ></i>
              <input
                type='text'
                name='children'
                className='count-text'
                min='0'
                value={first.children}
                readOnly
              />
              <i
                className='fa fa-plus btn-counter'
                onClick={() => {
                  guestControl('children', '+')
                }}
              ></i>
            </div>
          </div>
        </div>
      </div>
      <div className='search'>
        <button className='btn' type='submit'>
          Search
        </button>
      </div>
    </form>
  )
}
