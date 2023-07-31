import React from 'react'
import { IconClearWeather } from '../../icons/IconClearWeather'
import IconMostlyCloudy from '../../icons/IconMostlyCloudy'
import IconRainWeather from '../../icons/IconRainWeather'

export const ResultFormWeather = () => {
  return (
    <>
      <div className='w-full'>
        <div className='flex flex-col items-center justify-between py-2 px-3'>
          <IconClearWeather />
          <h2 className='text-6xl text-left py-2'>22 °C</h2>
          <span className='text-2xl text-left py-2'>Friday, <span className='text-2xl text-gray-500'>21:09</span></span>
        </div>
      </div>
      <div className='mx-3 pt-3'>
        <div className='border-b border-gray-600'></div>
      </div>
      <div className='w-full'>
        <div className='flex flex-col items-center justify-between py-2 px-3'>
          <div className='flex flex-row items-center justify-start gap-3 w-full py-2'>
            <IconMostlyCloudy fontSize={25} />
            <span>Mostly Cloudy</span>
          </div>
          <div className='flex flex-row items-center justify-start gap-3 w-full py-2'>
            <IconRainWeather fontSize={25} />
            <span>Rain - 30%</span>
          </div>
        </div>
      </div>
    </>
  )
}
