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
  return (
    <div>
      <h1>Profile</h1>
      <button onClick={handleLogoutClick}>Logout</button>
    </div>
  )
}

const mapDispatchToProps = {
  handleLogout
}

export default connect(null, mapDispatchToProps)(Profile)