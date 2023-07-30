import React from 'react'
import IconWiCelsius from '../../icons/IconWiCelsius'
import IconGraphWeather from '../../icons/IconGraphWeather'
import { ItemWeather } from './ItemWeather'
import { HoursData, WeeksData } from '../../types/Type_Weather'
import Img from '../../assets/13n.svg'
import { WindStatus } from '../OtherDetails/WindStatus'
import { PrecipitationStatus } from '../OtherDetails/PrecipitationStatus'
import { AtmosPressure } from '../OtherDetails/AtmosPressure'
import { VisibilityStatus } from '../OtherDetails/VisibilityStatus'
import { HumidityStatus } from '../OtherDetails/HumidityStatus'
import { SunriseSunsetStatus } from '../OtherDetails/SunriseSunsetStatus'

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
];

const hours: HoursData[] = [
  {
    hour: "6:00"
  },
  {
    hour: "9:00"
  },
  {
    hour: "12:00"
  },
  {
    hour: "15:00"
  },
  {
    hour: "18:00"
  },
  {
    hour: "21:00"
  }
];

export const MainWeatherDetails = () => {
  return (
    <div className=' my-6 mx-5'>
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
        <div className='w-full'>
          <div className='my-3 p-3'>
            <div className='flex flex-row items-center justify-between'>
              <div className='h-[300px] w-2/5'>
                <h3 className='text-lg'>Today's Highlights</h3>
                <div className='flex flex-row items-center justify-start'>
                  <div className='mt-3 gap-4 w-12'>
                    <div className='flex flex-col items-center justify-center gap-4'>
                      {
                        hours.map( hour => (
                          <button key={hour.hour} className='text-sm bg-blue-700/80 w-12 px-2 py-1 rounded-lg'>{hour.hour}</button>
                        ))
                      }
                    </div>
                  </div>
                  <div className='w-full ml-3'>
                    <div className='flex flex-col items-center justify-center h-full'>
                      <h4 className='text-2xl py-5'>Friday, 28 Jul</h4>
                      <img src={Img} alt="" width={100} height={100} />
                      <span className='text-lg text-gray-400 py-5'>Feels like 20.9 °C </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className='h-[300px] w-3/4'>
                <div className='flex flex-row items-center justify-between flex-wrap gap-2'>
                  <WindStatus />
                  <PrecipitationStatus />
                  <AtmosPressure />
                  <VisibilityStatus />
                  <HumidityStatus />
                  <SunriseSunsetStatus />
                </div>
                


                {/* <div className='flex flex-row flex-wrap items-center justify-between gap-3 py-1'>
                  <div className='bg-white/50 rounded-xl px-5 py-3 flex flex-col justify-start items-center gap-2'>
                    <h3  className='text-xl'>UV Index</h3>
                    <div className='flex flex-row justify-center items-end gap-2 pt-3'>
                      <span className='text-3xl'>7.70</span>
                      <span className='text-lg'>km/h</span>
                    </div>
                    <div className='flex flex-row items-center justify-start gap-3'>
                      icon
                      <span className='text-lg'>WSW</span>
                    </div>
                  </div>
                  <div className='bg-white/50 rounded-xl px-5 py-3 flex flex-col justify-start items-center gap-2'>
                    <h3  className='text-xl'>Wind Status</h3>
                    <div className='flex flex-row justify-center items-end gap-2 pt-3'>
                      <span className='text-3xl'>7.70</span>
                      <span className='text-lg'>km/h</span>
                    </div>
                    <div className='flex flex-row items-center justify-start gap-3'>
                      icon
                      <span className='text-lg'>WSW</span>
                    </div>
                  </div>
                  <div className='bg-white/50 rounded-xl px-2 py-3 flex flex-col justify-start items-center gap-2'>
                    <h3  className='text-xl'>Sunrise & Sunset</h3>
                    <div className='flex flex-row justify-center items-end gap-2 pt-3'>
                      <span className='text-3xl'>7.70</span>
                      <span className='text-lg'>km/h</span>
                    </div>
                    <div className='flex flex-row items-center justify-start gap-3'>
                      icon
                      <span className='text-lg'>WSW</span>
                    </div>
                  </div>
                </div> */}

                {/* <div className='flex flex-row flex-wrap items-center justify-between gap-3 py-1'>
                  <div className='bg-white/50 rounded-xl px-5 py-3 flex flex-col justify-start items-center gap-2'>
                    <h3  className='text-xl'>Humidity</h3>
                    <div className='flex flex-row justify-center items-end gap-2 pt-3'>
                      <span className='text-3xl'>7.70</span>
                      <span className='text-lg'>km/h</span>
                    </div>
                    <div className='flex flex-row items-center justify-start gap-3'>
                      icon
                      <span className='text-lg'>WSW</span>
                    </div>
                  </div>
                  <div className='bg-white/50 rounded-xl px-5 py-3 flex flex-col justify-start items-center gap-2'>
                    <h3  className='text-xl'>Visibility</h3>
                    <div className='flex flex-row justify-center items-end gap-2 pt-3'>
                      <span className='text-3xl'>7.70</span>
                      <span className='text-lg'>km/h</span>
                    </div>
                    <div className='flex flex-row items-center justify-start gap-3'>
                      icon
                      <span className='text-lg'>WSW</span>
                    </div>
                  </div>
                  <div className='bg-white/50 rounded-xl px-5 py-3 flex flex-col justify-start items-center gap-2'>
                    <h3  className='text-xl'>Air Quality</h3>
                    <div className='flex flex-row justify-center items-end gap-2 pt-3'>
                      <span className='text-3xl'>7.70</span>
                      <span className='text-lg'>km/h</span>
                    </div>
                    <div className='flex flex-row items-center justify-start gap-3'>
                      icon
                      <span className='text-lg'>WSW</span>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  )
}
