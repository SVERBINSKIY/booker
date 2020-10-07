import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { useParams } from 'react-router-dom'
import { handleLoadingHotelById } from '../../redux/actions/representativeAction'
import { Loader } from '../Loader'

const RepresentativeHotelPage = ({ handleLoadingHotelById, app, representative }) => {
  const { id } = useParams()
  useEffect(() => {
    handleLoadingHotelById(id)
  }, [handleLoadingHotelById, id])
  return (
    app.loading ? <Loader/> : <h2>{representative.selectedHotel.name}</h2>
  )
}

const mapStateToProps = state => state
const mapDispatchToProps = {
  handleLoadingHotelById
}

export default connect(mapStateToProps, mapDispatchToProps)(RepresentativeHotelPage)