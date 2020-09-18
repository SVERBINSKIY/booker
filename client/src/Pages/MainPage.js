import React from 'react'

export const MainPage = (props) => {
  return (
    <div className='main-page'>
      <section className='first'>
        <div className='form-control'>
          <span className='first-text'>Nature Await</span>
          <span className='second-text'>Explore the world with us</span>
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
        </div>
      </section>
      <section className='second'>
        <div className='second-wrapper'>
          <span className='second-text'>Hot Right Now</span>
          <span className='second-text-main'>Popular Destinations</span>
          <div className='hot-tour'>
            <div className='hotel'>
              <div className='hotel-wrapper'>
                <span className='city-name'>London</span>
                <span className='count-hotels'>3200 Hotels</span>
              </div>
            </div>
            <div className='hotel'>
              <div className='hotel-wrapper'>
                <span className='city-name'>London</span>
                <span className='count-hotels'>3200 Hotels</span>
              </div>
            </div>
            <div className='hotel'>
              <div className='hotel-wrapper'>
                <span className='city-name'>London</span>
                <span className='count-hotels'>3200 Hotels</span>
              </div>
            </div>
            <div className='hotel'>
              <div className='hotel-wrapper'>
                <span className='city-name'>London</span>
                <span className='count-hotels'>3200 Hotels</span>
              </div>
            </div>
          </div>
          <button className='btn'>View All Destinations >></button>
        </div>
      </section>
      <section className='third'>
        <div className='third-wrapper'>
          <span className='third-title'>Safe Time And Money</span>
          <p>Sign up for member price and you cloud save 10% or more on thousands of hotel</p>
          <div className='input-wrapper'>
            <input type='text' placeholder='Your email address'/>
            <button>Signup</button>
          </div>
        </div>
      </section>
    </div>
  )
}