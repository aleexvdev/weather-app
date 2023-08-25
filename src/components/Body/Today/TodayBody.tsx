import React, { useEffect, useState } from 'react'
import { FistBodyToday } from './FistBodyToday'
import { TypeFetchWeather, TypeForescastWeather } from '../../../types/Type_Weather';

interface TypeTodayBody {
  data: TypeFetchWeather;
  forescast: TypeForescastWeather;
  optionDegree: string;
}

export const TodayBody = ( { data, forescast, optionDegree }: TypeTodayBody ) => {

  const [currentWeatherData, setCurrentWeatherData] = useState<TypeFetchWeather>(data);

  useEffect(() => {
    setCurrentWeatherData(data);
  }, [data]);

  return (
    <div>
      <div className='w-full'>
        <div className='my-2 px-2 md:px-4 flex flex-col h-full'>
          <FistBodyToday data={currentWeatherData} optionDegree={optionDegree} />
        </div>
      </div>
    </div>
  )
}
