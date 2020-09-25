import React from 'react'
import { connect } from 'react-redux'
import { FirstBlock } from './FirstBlock/FirstBlock'
import { SecondBlock } from './SecondBlock/SecondBlock'
import { ThirdBlock } from './ThirdBlock/ThirdBlock'
import {
  guestControl,
  hideGuest,
  mainPageInputChange,
  setCheckIn,
  setCheckOut,
  showGuest
} from '../../redux/actions/mainPageActions'

const MainPage = (props) => {
  return (
    <div className='main-page'>
      <FirstBlock
        first={props.first}
        showGuest={props.showGuest}
        hideGuest={props.hideGuest}
        guestControl={props.guestControl}
        setCheckIn={props.setCheckIn}
        setCheckOut={props.setCheckOut}
        mainPageInputChange={props.mainPageInputChange}
      />
      <SecondBlock />
      <ThirdBlock />
    </div>
  )
}

const mapStateToProps = state => state.mainPage
const mapDispatchToProps = {
  showGuest,
  hideGuest,
  guestControl,
  setCheckIn,
  setCheckOut,
  mainPageInputChange
}

export default connect(mapStateToProps, mapDispatchToProps)(MainPage)