import React, { useMemo } from 'react'
import { DetailsBodyToday } from './DetailsBodyToday'

import { formatDate, kelvinToCelsius, secondsToTimezone } from '../../../utils/functions';
import { TypeRainWProp, TypeSnowWProp, WeatherListItem } from '../../../types/Type_Weather';

interface TypeSecondBody {
  data: WeatherListItem;
  city: string;
  timezone: number;
}
export const SecondBodyToday = ( { data, city, timezone }: TypeSecondBody ) => {

  const { main, dt, weather, clouds, visibility, wind } = data;
  const { feels_like, grnd_level, sea_level, pressure, temp } = main;
  const { icon } = weather[0];
  const rain:TypeRainWProp = [];
  const snow:TypeSnowWProp = [];

  const dayformat = formatDate(dt);
  const utc = secondsToTimezone(timezone);

  const feelsLike = useMemo(() => {
    const temperature = feels_like || 0;
    return kelvinToCelsius(temperature).toFixed(1);
  }, [feels_like]);

  const temperature = useMemo(() => {
    const date = new Date();
    const temperature = temp || date.getDay();
    return kelvinToCelsius(temperature).toFixed(1);
  }, [temp]);


  return (
    <div>
      <div className='mt-3'>
        <div className='flex flex-row justify-between items-center w-full'>
          <div className='w-full flex flex-col justify-center items-start gap-10'>
            <h3 className='text-6xl font-semibold text-white tracking-wide'>{city}</h3>
            <span className='text-gray-400/80 text-4xl'>{temperature} °C</span>
          </div>
          <div className='w-full flex items-center justify-center'>
            <div className='flex items-center justify-center px-5'>
              <img src={`../../assets/svg/${icon}.svg`} alt="" className='inline-block h-44 w-44' />
            </div>
          </div>
          <div className='w-full flex flex-col items-end justify-center '>
            <span className='text-gray-400/50 text-[14px]'>{dayformat}</span>
            <span className='text-gray-400/50 text-[14px]'>Timezone {utc}</span>
            <span className='text-gray-400/50 text-[14px]'>Feels like {feelsLike} °C</span>
            <span className='text-gray-400/50 text-[14px]'>Cloudiness {clouds.all}%</span>
          </div>
        </div>
      </div>
      <DetailsBodyToday main={main} weather={weather[0]} wind={wind} visibility={visibility} rain={rain} snow={snow} />
</div>
  )
}
