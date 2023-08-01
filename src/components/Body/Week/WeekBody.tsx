import React from 'react'
import { DetailsBodyWeek } from './DetailsBodyWeek'
import { ForescastTodays } from '../../WeatherComponents/ForescastTodays'

export const WeekBody = () => {
  return (
    <div>
      <div className='w-full'>
        <div className='my-5 flex flex-col h-full items-center justify-between'>
          <ForescastTodays />
          <DetailsBodyWeek />
        </div>
      </div>
    </div>
  )
}
