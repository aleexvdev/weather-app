import React from 'react'
import { TypeWeekDays } from '../../types/Type_Weather';

interface ItemWeatherProps {
  props: TypeWeekDays;
}

export const ItemDayWeather = ( { props }: ItemWeatherProps ) => {
  const { day, climate, temp, feels_like, icon  } = props;

  return (
    <div key={day} className='bg-white/80 rounded-xl py-4 px-1 w-36'>
      <div className='flex flex-col items-center'>
        <div className='flex items-center'>
          <span className='text-black font-medium text-lg'>{day}</span>
        </div>
        <div className='h-20 w-full'>
          <div className='flex items-center justify-center px-2'>
              <img src={`../../assets/svg/${icon}.svg`} alt={climate} className='inline-block h-20 w-20' />
            </div>
        </div>
        <div className='flex flex-row items-center justify-center gap-2'>
          <span className='text-black font-medium text-lg'>{temp}°</span>
          <span className='text-gray-500 text-lg'>{feels_like}°</span>
        </div>
      </div>
      
    </div>
  )
}
