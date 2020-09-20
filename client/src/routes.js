import React from 'react'
import {Switch, Route} from 'react-router-dom'
import { MainPage } from './Pages/MainPages/MainPage'
import { Catalog } from './Pages/CatalogPage/Catalog'
import { RegisterPage } from './Pages/AuthPage/RegisterPage'
import { LoginPage } from './Pages/AuthPage/LoginPage'

export const useRoutes = () => {
  return (
    <Switch>
      <Route path='/' exact>
        <MainPage />
      </Route>
      <Route path='/catalog'>
        <Catalog />
      </Route>
      <Route path='/register' exact>
        <RegisterPage />
      </Route>
      <Route path='/login' exact>
        <LoginPage />
      </Route>
    </Switch>
  )
}