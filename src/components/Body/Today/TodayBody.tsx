import React, { useEffect, useState } from 'react'
import { getDataByDt, getHoursOfDay } from '../../../utils/functions';
import { ItemForescastHours } from '../../Items/ItemForescastHours';
import { FistBodyToday } from './FistBodyToday';
import { SecondBodyToday } from './SecondBodyToday';
import { TypeFetchWeather, TypeForescastWeather, WeatherListItem } from '../../../types/Type_Weather';

interface TypeTodayBody {
  data: TypeFetchWeather;
  forescast: TypeForescastWeather;
}

export const TodayBody = ( { data, forescast }: TypeTodayBody ) => {

  const [currentWeatherData, setCurrentWeatherData] = useState<TypeFetchWeather>(data);
  const [forescastWeatherData, setForescastWeatherData] = useState<WeatherListItem | null>(); 
  const [stateTimestamp, setStateTimestamp] = useState<number>(data.dt);
  const hours = getHoursOfDay(forescast.list, data.dt);

  useEffect(() => {
    setCurrentWeatherData(data);
  }, [data]);

  useEffect(() => {
    const dataforescast = getDataByDt(forescast, stateTimestamp);
    setForescastWeatherData(dataforescast);
  }, [stateTimestamp]);

  const handleBody = (value: number) => {
    setStateTimestamp(value);
  }

  return (
    <div>
      <div className='w-full'>
        <div className='my-1 px-4 flex flex-col h-full'>
          <div className='mt-4'>
            <div className='flex flex-row items-center justify-center gap-2'>
              <button key={'justnow'} className='text-sm bg-blue-700/80 w-20 px-2 py-1 rounded-lg' onClick={() => handleBody(data.dt)}>Just now</button>
              {
                hours.map( (hour) => (
                  <ItemForescastHours 
                    props={hour} 
                    styled={'text-sm bg-blue-700/80 w-20 px-2 py-1 rounded-lg'} 
                    handleBody={handleBody}
                  />
                ))
              }
            </div>
          </div>
          {
            forescastWeatherData ? <SecondBodyToday data={forescastWeatherData} city={currentWeatherData.name} timezone={currentWeatherData.timezone} /> : <FistBodyToday data={currentWeatherData} />
          }
        </div>
      </div>
    </div>
  )
}
