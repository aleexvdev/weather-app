import React from 'react'
import { ItemWeather } from '../DetailsWeather/ItemWeather'
import { weeks } from '../../data/dataWeather'

export const Forescat7Days = () => {
  return (
    <div className='w-full'>
      <div className='my-1 p-3'>
        <h3 className='text-lg'>7-day forescast</h3>
        <div className='flex flex-row items-center justify-between mt-3'>
          {
            weeks.map( week => (
              <ItemWeather key={week.day} props={week} />
            ))
          }
        </div>
      </div>
    </div>
  )
}
