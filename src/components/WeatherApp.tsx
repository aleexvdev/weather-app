import React from 'react'
import IconSearchLocation from '../icons/IconSearchLocation'
import IconCurrentLocation from '../icons/IconCurrentLocation'
import { IconClearWeather } from '../icons/IconClearWeather'
import IconMostlyCloudy from '../icons/IconMostlyCloudy'
import IconRainWeather from '../icons/IconRainWeather'
import { MainWeatherDetails } from './DetailsWeather/MainWeatherDetails'
import { MainWeather } from './Main/MainWeather'

export const WeatherApp = () => {
  return (
    <section className='w-full min-h-[700px] bg-[#202B3B] my-10 rounded-3xl'>
      <div className='flex flex-row'>
        <div className='w-[28%]'>
          <div className=' my-10 mx-5'>
            <div className='w-full'>
              <form>
                <div className='flex flex-row items-center justify-between py-2 px-3 gap-2'>
                  <div className='w-full flex flex-row items-center justify-start h-10 rounded-lg px-2 bg-white'>
                    <IconSearchLocation 
                      fontSize={22} 
                      color='black'
                    />
                    <input 
                      type="text" 
                      className='w-full mx-2 px-1 h-8 outline-none text-black rounded-lg text-[15px]'
                      placeholder='Search for places...'
                    />
                  </div>
                  <div className='h-10'>
                    <button
                      className='bg-slate-400/20 rounded-full p-2'
                    >
                      <IconCurrentLocation 
                        fontSize={22}
                      />
                    </button>
                  </div>
                </div>
              </form>
            </div>
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
          </div>
        </div>
        <div className='w-[72%]'>
          <MainWeather />
        </div>
      </div>
    </section>
  )
}
