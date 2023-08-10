import React from 'react'
import { WeatherListItem } from '../../types/Type_Weather';
import { getDayNameInEnglish } from '../../utils/functions';

interface ItemWeatherProps {
  props: WeatherListItem;
  handleDayClick: (dttext: string) => void;
}

export const ItemDayWeather = ( { props, handleDayClick }: ItemWeatherProps ) => {

  const { dt, dt_txt } = props;

  const dayweekabrev = getDayNameInEnglish(dt_txt);
  const date = dt_txt.split(' ')[0];
  const day = date.split('-')[2];

  return (
    <div 
      key={dt} 
      className='min-w-[120px] cursor-pointer'
      onClick={() => handleDayClick(dt_txt)}
    >
      <div className='flex flex-col items-center justify-between w-full h-full bg-black rounded-xl'>
        <div className='flex items-center justify-between px-2 py-1 gap-3 rounded-tl-xl rounded-tr-xl '>
          <span className='text-xs'>●</span>
          <span className='text-sm'>{dayweekabrev}</span>
          <span className='text-xs'>●</span>
        </div>
        <div className='flex items-center justify-center bg-blue-700 w-full h-full py-2 rounded-bl-xl rounded-br-xl'>
          <span className='text-6xl font-semibold'>{day}</span>
        </div>
      </div>
    </div>
  )
}
