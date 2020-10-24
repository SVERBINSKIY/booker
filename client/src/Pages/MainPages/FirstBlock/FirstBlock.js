import React from 'react'
import { SearchForm } from './SearchForm'

export const FirstBlock = (props) => {
  return (
    <section className='first'>
      <div className='form-control'>
        <span className='first-text'>Nature Await</span>
        <span className='second-text'>Explore the world with us</span>
        <SearchForm
          first={props.first}
          app={props.app}
          hideGuest={props.hideGuest}
          showGuest={props.showGuest}
          guestControl={props.guestControl}
          setCheckIn={props.setCheckIn}
          setCheckOut={props.setCheckOut}
          mainPageInputChange={props.mainPageInputChange}
          handleButtonSearch={props.handleButtonSearch}
        />
      </div>
    </section>
  )
}
