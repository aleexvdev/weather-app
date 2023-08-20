import React, { useMemo } from 'react'
import { DetailsBodyToday } from './DetailsBodyToday'
import { formatDate, kelvinToCelsius, secondsToTimezone } from '../../../utils/functions'
import { TypeFetchWeather } from '../../../types/Type_Weather'
import { useTheme } from '../../../context/ThemeContext/ThemeContext'


interface TypeFirstBody {
  data: TypeFetchWeather;
  optionDegree: string;
}
export const FistBodyToday = ( { data, optionDegree }: TypeFirstBody ) => {

  const { textColorContent, textColorGray, textColorContent70 } = useTheme();

  const { name: city, main, dt, timezone, weather, clouds, wind, visibility, rain, snow, sys } = data;
  const { feels_like, temp } = main;
  const { description, icon } = weather[0];

  const dayformat = formatDate(dt);
  const utc = secondsToTimezone(timezone);

  const feelsLike = useMemo(() => {
    const temperature = feels_like || 0;
    return kelvinToCelsius(temperature).toFixed(2);
  }, [feels_like]);

  const temperature = useMemo(() => {
    const date = new Date();
    const temperature = temp || date.getDay();
    return kelvinToCelsius(temperature).toFixed(2);
  }, [temp]);

  return (
    <div>
      <div className='md:mt-2'>
        <div className='w-full grid grid-cols-2 grid-rows-2 md:grid-cols-3 md:grid-rows-1 gap-x-0 gap-y-0'>
          <div className='col-span-1 row-span-1 md:col-span-1 md:row-span-1 order-1 md:order-1'>
            <div className='w-full flex flex-col justify-center items-start gap-10 h-56'>
              <h3 className={`text-4xl md:text-5xl font-bold  ${textColorContent} tracking-normal`}>{city}</h3>
              <span className={`${textColorGray} font-semibold text-3xl md:text-4xl`}>{temperature} °{optionDegree}</span>
            </div>
          </div>
          <div className='col-span-2 row-span-1 md:col-span-1 md:row-span-1 order-3 md:order-2'>
            <div className='w-full h-full flex items-center justify-center'>
              <div className='flex items-center justify-center px-2 md:px-5'>
                <img src={`../../assets/svg/${icon}.svg`} alt={description} className='inline-block h-56 w-56 md:h-56 md:w-56' />
              </div>
            </div>
          </div>
          <div className='col-span-1 row-span-1 md:col-span-1 md:row-span-1 order-2 md:order-3'>
            <div className='w-full flex flex-col items-center md:items-end justify-center'>
              <div className={`w-full flex flex-col items-end md:items-end justify-center ${textColorContent70} h-56`}>
                <span className='text-[14px]'>{dayformat}</span>
                <span className='text-[14px]'>Timezone {utc}</span>
                <span className='text-[14px]'>Feels like {feelsLike} °{optionDegree}</span>
                <span className='text-[14px]'>Cloudiness {clouds.all}%</span>
                <div className='flex flex-row items-center justify-center mt-3 gap-2'>
                  <img src={`https://openweathermap.org/img/w/${icon}.png`} alt={description} className='inline-block h-9 w-9' />
                  <span className='text-[14px]'>{description}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <DetailsBodyToday main={main} weather={weather[0]} wind={wind} visibility={visibility} rain={rain} snow={snow} optionDegree={optionDegree} sys={sys} timezone={timezone} />
    </div>
  )

}
