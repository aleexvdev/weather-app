import React from 'react'
import Img from '../../../assets/image.svg'
import { hours } from '../../../data/dataWeather'
import { DetailsBodyToday } from './DetailsBodyToday'

export const TodayBody = () => {
  return (
    <div>
      <div className='w-full'>
        <div className='my-1 px-3 flex flex-col h-full'>
          <div className='mt-4'>
            <div className='flex flex-row items-center justify-center gap-8'>
              <button key={'justnow'} className='text-sm bg-blue-700/80 w-20 px-2 py-1 rounded-lg'>Just now</button>
              {
                hours.map( (hour) => (
                  <button key={hour.hour} className='text-sm bg-blue-700/80 w-20 px-2 py-1 rounded-lg'>{hour.hour}</button>
                ))
              }
            </div>
          </div>
          <div className='mt-3'>
            <div className='flex flex-row justify-start items-center'>
              <div className='w-1/2 flex flex-col justify-center items-start gap-10'>
                <h3 className='text-6xl font-semibold text-white tracking-wide'>Huacho</h3>
                <span className='text-gray-400/80 text-4xl'>22 °C</span>
              </div>
              <div className='w-full flex items-center justify-around '>
                <div className='flex items-center justify-center'>
                  <img src={Img} alt="" className='inline-block h-44 w-44' />
                </div>
                <div className='flex flex-col items-start justify-start'>
                  <span className='text-gray-400/50 text-[14px]'>Sunday, 30 Jul</span>
                  <span className='text-gray-400/50 text-[14px]'>Feels like 19.6°C</span>
                  <span className='text-gray-400/50 text-[14px]'>Timezone UTC-05:00</span>
                  <span className='text-gray-400/50 text-[14px]'>Chance of rain 0%</span>
                  <span className='text-gray-400/50 text-[14px]'>Atmos Pressure 1012 hPa</span>
                </div>
              </div>
            </div>
          </div>
          <DetailsBodyToday />
        </div>
      </div>
    </div>
  )
}
