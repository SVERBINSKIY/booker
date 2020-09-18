import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Header } from './Components/Header'
import { useRoutes } from './routes'

function App() {
  const routes = useRoutes()
  return (
    <BrowserRouter>
      <div className='wrapper'>
        <Header />
        <div className='content'>
          { routes }
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
