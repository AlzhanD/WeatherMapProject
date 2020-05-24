import React from 'react'
import './main.scss'
import WeekContainer from './app'

const Main = () => {
  return (
    <div className="mainContainer flex items-center justify-center h-screen">
      <WeekContainer />
    </div>
  )
}

Main.propTypes = {}

export default Main
