import React, { useEffect } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { Header } from './Components/Header'
import { useRoutes } from './routes'
import { checkLogin } from './redux/actions/loginPageAction'

const Booker = ({ login, checkLogin }) => {
  useEffect(() => {
    checkLogin()
  }, [checkLogin])
  const routes = useRoutes(login.isAuth)

  return (
    <BrowserRouter>
      <div className='wrapper'>
        <Header login={login.isAuth} />
        {routes}
      </div>
    </BrowserRouter>
  )
}

const mapStateToProps = (state) => state
const mapDispatchToProps = {
  checkLogin,
}

export default connect(mapStateToProps, mapDispatchToProps)(Booker)
