import React, { useEffect, useState } from 'react'
import { FistBodyToday } from './FistBodyToday'
import { TypeFetchWeather, TypeForescastWeather } from '../../../types/Type_Weather';
import { Loading } from '../../Loader/Loading';

interface TypeTodayBody {
  data: TypeFetchWeather;
  forescast: TypeForescastWeather;
  optionDegree: string;
}

export const TodayBody = ( { data, forescast, optionDegree }: TypeTodayBody ) => {

  const styleapp = 'md:w-[830px] md:h-[582px] mt-5';
  const nameapp = 'data';
  const [currentWeatherData, setCurrentWeatherData] = useState<TypeFetchWeather>(data);

  useEffect(() => {
    setCurrentWeatherData(data);
  }, [data]);

  if (!data) {
    return <Loading name={nameapp} style={styleapp} />
  }

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
