import React, { useMemo } from 'react'
import { DetailsBodyToday } from './DetailsBodyToday'
import { formatDate, kelvinToCelsius, secondsToTimezone } from '../../../utils/functions';
import { TypeRainWProp, TypeSnowWProp, WeatherListItem } from '../../../types/Type_Weather';

interface TypeSys {
  country: string;
  sunrise: number;
  sunset: number;
}

interface TypeSecondBody {
  data: WeatherListItem;
  city: string;
  timezone: number;
  optionDegree: string;
  sys: TypeSys;
}

export const SecondBodyToday = ( { data, city, timezone, optionDegree, sys }: TypeSecondBody ) => {

  const { main, dt, weather, clouds, visibility, wind } = data;
  const { feels_like, temp } = main;
  const { description, icon } = weather[0];
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
      <div className='mt-2'>
        <div className='flex flex-row justify-between items-center w-full'>
          <div className='w-full flex flex-col justify-center items-start gap-10'>
            <h3 className='text-6xl font-semibold text-black tracking-wide'>{city}</h3>
            <span className='text-gray-800/70 font-semibold text-4xl'>{temperature} °{optionDegree}</span>
          </div>
          <div className='w-full flex items-center justify-center'>
            <div className='flex flex-col items-center justify-center px-5'>
              <img src={`../../../assets/svg/${icon}.svg`} alt={description} className='inline-block h-44 w-44' />
            </div>
          </div>
          <div className='w-full flex flex-col items-end justify-center'>
            <span className='text-black/70 font-semibold text-[14px]'>{dayformat}</span>
            <span className='text-black/70 font-semibold text-[14px]'>Timezone {utc}</span>
            <span className='text-black/70 font-semibold text-[14px]'>Feels like {feelsLike} °{optionDegree}</span>
            <span className='text-black/70 font-semibold text-[14px]'>Cloudiness {clouds.all}%</span>
            <div className='flex flex-row items-center justify-center mt-3 gap-2'>
              <img src={`https://openweathermap.org/img/w/${icon}.png`} alt={description} className='inline-block h-9 w-9' />
              <span className='text-black/70 font-semibold text-[14px]'>{description}</span>
            </div>
          </div>
        </div>
      </div>
      <DetailsBodyToday main={main} weather={weather[0]} wind={wind} visibility={visibility} rain={rain} snow={snow} optionDegree={optionDegree} sys={sys} timezone={timezone} />
</div>
  )
}
