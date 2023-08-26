import React, { useEffect, useState } from 'react'
import { TypeForescastWeather, WeatherListItem } from '../../../types/Type_Weather';
import { DetailsWeekApp } from './DetailsWeekApp';
import { Loading } from '../../Loader/Loading';

interface TypeWeekBody {
  forescast: TypeForescastWeather;
  optionDegree: string;
}

export const WeekBody = ( { forescast, optionDegree }: TypeWeekBody ) => {

  const styleapp = 'md:w-[830px] md:h-[582px] mt-5';
  const nameapp = 'data';

  const [forescastWeatherData, setForescastWeatherData] = useState<WeatherListItem[]>(); 

  useEffect(() => {
    setForescastWeatherData(forescast.list);
  }, [forescast]);

  if (!forescastWeatherData) {
    return <Loading name={nameapp} style={styleapp} />
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