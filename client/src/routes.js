import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { MainPage } from './Pages/MainPages/MainPage'
import { Catalog } from './Pages/CatalogPage/Catalog'
import { RegisterPage } from './Pages/AuthPage/RegisterPage'
import { LoginPage } from './Pages/AuthPage/LoginPage'

export const useRoutes = () => {
  return (
    <Switch>
      <Route path='/' component={MainPage} exact />
      <Route path='/catalog' component={Catalog} />
      <Route path='/register' render={() => <RegisterPage />} exact />
      <Route path='/login' render={() => <LoginPage />} />
      <Redirect to='/' />
    </Switch>
  )
}