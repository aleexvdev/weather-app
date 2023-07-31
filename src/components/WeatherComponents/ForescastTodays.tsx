import React from 'react'
import { weeks } from '../../data/dataWeather'
import { ItemDayWeather } from '../Items/ItemDayWeather'

export const ForescastTodays = () => {

  return (
    <div className='w-full'>
      <div className='my-1'>
        <div className='flex flex-row items-center justify-between py-3'>
          {
            weeks.map( week => (
              <ItemDayWeather key={week.day} props={week} />
            ))
          }
        </div>
      </div>
    </div>
  )
}
