import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { handleLoadingHotels } from '../../redux/actions/representativeAction'
import { RepresentativeHotelItem } from './RepresentativeHotelItem'
import { Loader } from '../Loader'

const RepresentativeMainPage = ({ login, representative, handleLoadingHotels, app }) => {
  const history = useHistory()
  useEffect(() => {
    handleLoadingHotels(login.userId)
  }, [handleLoadingHotels, login.userId])
  const handleAddNewHotelClick = () => {
    history.push('/representative/add')
  }

  return (
    <div className='representative-page'>
      <div className='representative-page__navbar'>
        <ul className='menu-list'>
          <li className='menu-item active'>Hotels</li>
          <li className='menu-item'>Statistics</li>
          <li className='menu-item'>Booking</li>
          <li className='menu-item' onClick={handleAddNewHotelClick}>Add New Hotel</li>
        </ul>
      </div>
      <div className='representative-page__content'>
        {app.loading
          ? <Loader/>
          : representative.managedHotels.map(hotel => <RepresentativeHotelItem
            key={hotel._id}
            data={hotel}
          />)}
      </div>
    </div>
  )
}

const mapStateToProps = state => state
const mapDispatchToProps = {
  handleLoadingHotels
}

export default connect(mapStateToProps, mapDispatchToProps)(RepresentativeMainPage)