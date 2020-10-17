import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { useParams } from 'react-router-dom'
import { handleLoadingHotelById } from '../../redux/actions/representativeAction'
import { Loader } from '../Loader'
import RepresentativeHotelPageItem from './RepresentativeHotelPageItem'

const RepresentativeHotelPage = ({ handleLoadingHotelById, app, representative }) => {
  const { id } = useParams()
  useEffect(() => {
    handleLoadingHotelById(id)
  }, [handleLoadingHotelById, id])
  return (
    app.loading ? <Loader/> : <RepresentativeHotelPageItem 
                                loading={app.loading}
                                hotelData={representative.selectedHotel} 
                              />
  )
}

const mapStateToProps = state => state
const mapDispatchToProps = {
  handleLoadingHotelById
}

export default connect(mapStateToProps, mapDispatchToProps)(RepresentativeHotelPage)