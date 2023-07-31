import React from 'react'
import { WeeksData } from '../../types/Type_Weather';
import { IconRainy2 } from '../../icons/IconRainy2';

interface ItemWeatherProps {
  props: WeeksData;
}

export const ItemDayWeather = ( { props }: ItemWeatherProps ) => {
  const { day, climate_celsius, feels_like_celsius } = props;

  return (
    <div className='bg-white/80 rounded-xl py-4 px-1 w-24'>
      <div className='flex flex-col items-center'>
        <div className='flex items-center'>
          <span className='text-black font-medium text-lg'>{day}</span>
        </div>
        <div className='h-20'>
          <IconRainy2 />
        </div>
        <div className='flex flex-row items-center justify-center gap-2'>
          <span className='text-black font-medium text-lg'>{climate_celsius}°</span>
          <span className='text-gray-500 text-lg'>{feels_like_celsius}°</span>
        </div>
      </div>
      
    </div>
  )
}
