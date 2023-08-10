import React, { useEffect, useState } from 'react'
import { TypeForescastWeather, WeatherListItem } from '../../../types/Type_Weather';
import { DetailsWeekApp } from './DetailsWeekApp';

interface TypeWeekBody {
  forescast: TypeForescastWeather;
}

export const WeekBody = ( { forescast }: TypeWeekBody ) => {

  const [forescastWeatherData, setForescastWeatherData] = useState<WeatherListItem[]>(); 

  useEffect(() => {
    setForescastWeatherData(forescast.list);
  }, [forescast]);

  if (!forescastWeatherData) {
    return <div>dddd</div>
  }


  return (
    <div>
      <div className='w-full'>
        <div className='my-1 px-3 flex flex-col h-full items-center justify-between'>
          <DetailsWeekApp data={forescastWeatherData} />
        </div>
      </div>
    </div>
  )
}