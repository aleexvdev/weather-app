import React, { useEffect, useState } from 'react'
import { TypeForescastWeather, WeatherListItem } from '../../../types/Type_Weather';
import { DetailsWeekApp } from './DetailsWeekApp';

interface TypeWeekBody {
  forescast: TypeForescastWeather;
  optionDegree: string;
}

export const WeekBody = ( { forescast, optionDegree }: TypeWeekBody ) => {

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
        <div className='my-1 md:my-2 px-1 md:px-3 flex flex-col h-full items-center justify-between'>
          <DetailsWeekApp data={forescastWeatherData} optionDegree={optionDegree} />
        </div>
      </div>
    </div>
  )
}