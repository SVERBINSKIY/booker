import React from 'react'
import { useHistory } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleLogout } from '../../redux/actions/loginPageAction'

const Profile = ({ handleLogout }) => {
  const history = useHistory()
  const handleLogoutClick = () => {
    handleLogout()
    history.push('/')
  }
  const handleRepresentativeClick = () => {
    history.push('/representative/main')
  }
  return (
    <div className='profile-page'>
      <div className='profile-page__header'>
        <div className='profile-page__header__title'>
          <h3>Profile Header</h3>
        </div>
        <div className='profile-page__header__representative'>
          <button className='button' onClick={handleRepresentativeClick}>Representative</button>
        </div>
      </div>
      <div className='profile-page__content'>
        Profile Content
      </div>
      <button onClick={handleLogoutClick}>Logout</button>

    </div>
  )
}

const mapDispatchToProps = {
  handleLogout
}

export default connect(null, mapDispatchToProps)(Profile)