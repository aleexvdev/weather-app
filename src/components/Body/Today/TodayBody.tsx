import React, { useEffect, useState } from 'react'
import { getDataByDt, getHoursOfDay } from '../../../utils/functions';
import { ItemForescastHours } from '../../Items/ItemForescastHours';
import { FistBodyToday } from './FistBodyToday';
import { SecondBodyToday } from './SecondBodyToday';
import { TypeFetchWeather, TypeForescastWeather, WeatherListItem } from '../../../types/Type_Weather';

interface TypeTodayBody {
  data: TypeFetchWeather;
  forescast: TypeForescastWeather;
  optionDegree: string;
}

export const TodayBody = ( { data, forescast, optionDegree }: TypeTodayBody ) => {

  const [currentWeatherData, setCurrentWeatherData] = useState<TypeFetchWeather>(data);
  const [forescastWeatherData, setForescastWeatherData] = useState<WeatherListItem | null>(); 
  const [stateTimestamp, setStateTimestamp] = useState<number>(data.dt);
  const hours = getHoursOfDay(forescast.list, data.dt);

  useEffect(() => {
    setCurrentWeatherData(data);
    setStateTimestamp(data.dt)
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
              <button 
                key={'justnow'} 
                className={`text-sm w-20 px-3 py-1 rounded-lg ${data.dt === stateTimestamp || stateTimestamp === null ? 'bg-[#0338a1] text-white': 'text-black font-bold'}`} 
                onClick={() => handleBody(data.dt)}
              >
                Just now
              </button>
              {
                hours.map( (hour) => (
                  <ItemForescastHours 
                    key={hour.timestamp}
                    props={hour} 
                    styled={`text-sm w-20 px-3 py-1 rounded-lg ${hour.timestamp === stateTimestamp ? 'bg-[#0338a1] text-white': 'text-black font-bold hover:text-[#0338a1]'}`} 
                    handleBody={handleBody}
                    stateTimestamp={stateTimestamp}
                  />
                ))
              }
            </div>
          </div>
          {
            forescastWeatherData 
            ? <SecondBodyToday data={forescastWeatherData} city={currentWeatherData.name} timezone={currentWeatherData.timezone} optionDegree={optionDegree} sys={currentWeatherData.sys} /> 
            : <FistBodyToday data={currentWeatherData} optionDegree={optionDegree} />
          }
        </div>
      </div>
    </div>
  )
}
