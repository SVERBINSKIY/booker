import React from 'react'
import {Switch, Route} from 'react-router-dom'
import { MainPage } from './Pages/MainPage'
import { Catalog } from './Pages/Catalog'

export const useRoutes = () => {
  return (
    <Switch>
      <Route path='/' exact>
        <MainPage />
      </Route>
      <Route path='/catalog'>
        <Catalog />
      </Route>
    </Switch>
  )
}