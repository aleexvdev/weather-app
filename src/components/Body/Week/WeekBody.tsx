import React from 'react'
import { DetailsBodyWeek } from './DetailsBodyWeek'
import { ForescastTodays } from '../../WeatherComponents/ForescastTodays'

export const WeekBody = () => {
  return (
    <div>
      <div className='w-full'>
        <div className='my-1 p-3 flex flex-col h-full'>
          <ForescastTodays />
          <DetailsBodyWeek />
        </div>
      </div>
    </div>
  )
}
