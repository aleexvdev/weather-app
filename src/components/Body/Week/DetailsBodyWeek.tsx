import React from 'react'
import { hours } from '../../../data/dataWeather'
import Img from '../../../assets/image.svg'
import { SunriseSunsetStatus } from '../../WeatherComponents/SunriseSunsetStatus'
import { HumidityStatus } from '../../WeatherComponents/HumidityStatus'
import { VisibilityStatus } from '../../WeatherComponents/VisibilityStatus'
import { PrecipitationStatus } from '../../WeatherComponents/PrecipitationStatus'
import { WindStatus } from '../../WeatherComponents/WindStatus'

export const DetailsBodyWeek = () => {
  return (
    <div className='w-full'>
      <h2 className='py-4 text-xl'>Highlights of the Week</h2>
      <div className=''>
        <div className='flex flex-row items-center justify-between'>
          <div className='w-2/5'>
            <div className='flex flex-row items-center justify-start'>
              <div className='flex flex-col items-center justify-center gap-4'>
                {
                  hours.map( hour => (
                    <button key={hour.hour} className='text-sm bg-blue-700/80 w-12 px-2 py-1 rounded-lg'>{hour.hour}</button>
                  ))
                }
              </div>
              <div className='w-full'>
                <div className='flex flex-col items-center justify-center h-full'>
                  <h4 className='text-2xl py-5'>Friday, 28 Jul</h4>
                  <img src={Img} alt="" width={100} height={100} />
                  <span className='text-lg text-gray-400 py-5'>Feels like 20.9 °C </span>
                </div>
              </div>
            </div>
          </div>
          <div className='w-3/4'>
            <div className='flex flex-row items-center justify-between flex-wrap gap-2'>
              {/* <WindStatus />
              <WindStatus />
              <PrecipitationStatus />
              <VisibilityStatus />
              <HumidityStatus />
              <SunriseSunsetStatus /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
