import React from 'react'
import { connect } from 'react-redux'
import { FirstBlock } from './FirstBlock/FirstBlock'
import { SecondBlock } from './SecondBlock/SecondBlock'
import { ThirdBlock } from './ThirdBlock/ThirdBlock'
import {
  guestControl,
  hideGuest,
  mainPageEmailInputChange,
  mainPageInputChange,
  setCheckIn,
  setCheckOut,
  showGuest,
  handleButtonSearch,
} from '../../redux/actions/mainPageActions'

const MainPage = (props) => {
  return (
    <div className='main-page'>
      <FirstBlock
        first={props.mainPage.first}
        app={props.app}
        showGuest={props.showGuest}
        hideGuest={props.hideGuest}
        guestControl={props.guestControl}
        setCheckIn={props.setCheckIn}
        setCheckOut={props.setCheckOut}
        mainPageInputChange={props.mainPageInputChange}
        handleButtonSearch={props.handleButtonSearch}
      />
      <SecondBlock second={props.mainPage.second} />
      <ThirdBlock
        third={props.mainPage.third}
        mainPageEmailInputChange={props.mainPageEmailInputChange}
      />
    </div>
  )
}

const mapStateToProps = (state) => state
const mapDispatchToProps = {
  showGuest,
  hideGuest,
  guestControl,
  setCheckIn,
  setCheckOut,
  mainPageInputChange,
  mainPageEmailInputChange,
  handleButtonSearch,
}

export default connect(mapStateToProps, mapDispatchToProps)(MainPage)
