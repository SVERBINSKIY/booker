import React from 'react'
import { FirstBlock } from './FirstBlock/FirstBlock'
import { SecondBlock } from './SecondBlock/SecondBlock'
import { ThirdBlock } from './ThirdBlock/ThirdBlock'

export const MainPage = (props) => {
  return (
    <div className='main-page'>
      <FirstBlock />
      <SecondBlock />
      <ThirdBlock />
    </div>
  )
}