import React from 'react'
import { WindStatus } from '../../WeatherComponents/WindStatus'
import { PrecipitationStatus } from '../../WeatherComponents/PrecipitationStatus'
import { VisibilityStatus } from '../../WeatherComponents/VisibilityStatus'
import { HumidityStatus } from '../../WeatherComponents/HumidityStatus'
import { SunriseSunsetStatus } from '../../WeatherComponents/SunriseSunsetStatus'

export const DetailsBodyToday = () => {
  return (
    <div className='w-full'>
      <h2 className='py-3 text-xl'>Today's Highlights</h2>
      <div className='flex flex-row items-center justify-between flex-wrap py-2'>
        <WindStatus />
        <PrecipitationStatus />
        <PrecipitationStatus />
      </div>
      <div className='flex flex-row items-center justify-between flex-wrap py-2'>
        <VisibilityStatus />
        <HumidityStatus />
        <SunriseSunsetStatus />
      </div>
    </div>
  )
}

