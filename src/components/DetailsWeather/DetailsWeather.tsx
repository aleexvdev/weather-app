import React from 'react'
import IconWiCelsius from '../../icons/IconWiCelsius'
import IconGraphWeather from '../../icons/IconGraphWeather'
import { ItemWeather } from './ItemWeather'
import { WeeksData } from '../../types/Type_Weather'

const weeks: WeeksData[] = [
  {
    "day": "Sun",
    "climate": "nublado",
    "climate_celsius": 5,
    "feels_like_celsius": 7
  },
  {
    "day": "Mon",
    "climate": "soleado",
    "climate_celsius": 20,
    "feels_like_celsius": 22
  },
  {
    "day": "Tue",
    "climate": "lluvioso",
    "climate_celsius": 15,
    "feels_like_celsius": 13
  },
  {
    "day": "Wed",
    "climate": "nublado",
    "climate_celsius": 18,
    "feels_like_celsius": 19
  },
  {
    "day": "Thu",
    "climate": "ventoso",
    "climate_celsius": 14,
    "feels_like_celsius": 11
  },
  {
    "day": "Fri",
    "climate": "lluvioso",
    "climate_celsius": 12,
    "feels_like_celsius": 9
  },
  {
    "day": "Sat",
    "climate": "parcialmente nublado",
    "climate_celsius": 21,
    "feels_like_celsius": 23
  }
]

export const DetailsWeather = () => {
  return (
    <div className=' my-10 mx-5'>
      <div className='w-full'>
        <div className='flex flex-row items-center justify-between py-2 px-3'>
          <div className='w-full'>
            <ul className='flex flex-row items-center justify-start h-10'>
              <li className='mr-10 cursor-pointer'>Today</li>
              <li className='mr-10 bg-gray-500/50 px-5 py-2 rounded-xl cursor-pointer'>Week</li>
            </ul>
          </div>
          <div className='w-full'>
            <div className='flex flex-row items-center justify-end h-10 gap-4'>
              <button className='bg-slate-400/20 rounded-full p-2 h-10 w-10'>
                <IconWiCelsius fontSize={22} />
              </button>
              <button className='rounded-full p-2 h-10 w-10'>
                <IconGraphWeather fontSize={22} />
              </button>
            </div>
          </div>
        </div>
        <div className='w-full'>
          <h3 className='text-lg'>7-day forescast</h3>
          <div className='flex flex-row items-center justify-between my-5 py-5 px-3'>
            {
              weeks.map( week => (
                <ItemWeather key={week.day} props={week} />
              ))
            }
          </div>
        </div>
        <div className='w-full'>
          <h3 className='text-lg'>Today's Highlights</h3>
        </div>
      </div>
    </div>
  )
}
