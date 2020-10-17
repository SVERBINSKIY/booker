import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Catalog from './Pages/CatalogPage/Catalog'
import MainPage from './Pages/MainPages/MainPage'
import RegisterPage from './Pages/AuthPage/RegisterPage'
import LoginPage from './Pages/AuthPage/LoginPage'
import Profile from './Pages/Profile/Profile'
import RepresentativeMainPage from './Pages/RepresentativePage/RepresentativeMainPage'
import RepresentativeAddNewHotel from './Pages/RepresentativePage/RepresentativeAddNewHotel'
import RepresentativeHotelPage from './Pages/RepresentativePage/RepresentativeHotelPage'

export const useRoutes = isAuth => {
  if (isAuth) {
    return (
      <Switch>
        <Route path='/' component={MainPage} exact />
        <Route path='/catalog' component={Catalog} exact />
        <Route path='/profile' component={Profile} exact />
        <Route path='/representative/main' component={RepresentativeMainPage} />
        <Route path='/representative/add' component={RepresentativeAddNewHotel} />
        <Route path='/representative/hotel/:id' component={RepresentativeHotelPage}/>
        <Redirect to='/' />
      </Switch>
    )
  } else {
      return (
      <Switch>
        <Route path='/' component={MainPage} exact />
        <Route path='/catalog' component={Catalog} exact />
        <Route path='/register' render={() => <RegisterPage />} exact />
        <Route path='/login' render={() => <LoginPage />} exact />
      </Switch>
    )
  }
  
}