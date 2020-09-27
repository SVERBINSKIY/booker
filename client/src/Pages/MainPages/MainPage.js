import React from 'react'
import { connect } from 'react-redux'
import { FirstBlock } from './FirstBlock/FirstBlock'
import { SecondBlock } from './SecondBlock/SecondBlock'
import { ThirdBlock } from './ThirdBlock/ThirdBlock'
import {
  guestControl,
  hideGuest, mainPageEmailInputChange,
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
      <SecondBlock
        second={props.second}
      />
      <ThirdBlock
        third={props.third}
        mainPageEmailInputChange={props.mainPageEmailInputChange}
      />
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
  mainPageInputChange,
  mainPageEmailInputChange
}

export default connect(mapStateToProps, mapDispatchToProps)(MainPage)