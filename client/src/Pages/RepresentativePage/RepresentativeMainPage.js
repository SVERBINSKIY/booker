import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { handleLoadingHotels } from '../../redux/actions/representativeAction'
import { RepresentativeHotelItem } from './RepresentativeHotelItem'

const RepresentativeMainPage = ({ login, representative, handleLoadingHotels }) => {
  const history = useHistory()
  useEffect(() => {
    handleLoadingHotels(login.userId)
  }, [handleLoadingHotels, login.userId])
  const handleAddNewHotelClick = () => {
    history.push('/representative/add')
  }

  return (
    <div className='representative-page'>
      <div className='representative-page__header'>
        <button className='button' onClick={handleAddNewHotelClick}>Add New Hotel</button>
      </div>
      <div className='representative-page__content'>
        {representative.managedHotels.map(hotel => <RepresentativeHotelItem key={hotel._id} data={hotel} />)}
      </div>
    </div>
  )
}

const mapStateToProps = state => state
const mapDispatchToProps = {
  handleLoadingHotels
}

export default connect(mapStateToProps, mapDispatchToProps)(RepresentativeMainPage)