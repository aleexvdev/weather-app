import React, { useMemo } from 'react'
import { DetailsBodyToday } from './DetailsBodyToday'
import { TypeFetchWeather } from '../../../types/Type_Weather'
import { formatDate, formatUnixTimestamp, kelvinToCelsius, secondsToTimezone } from '../../../utils/functions'
import { IconSunrise, IconSunset } from '../../../icons/SunriseSunsetIcons/IconSunriseSunset'

interface TypeFirstBody {
  data: TypeFetchWeather
}
export const FistBodyToday = ( { data }: TypeFirstBody ) => {

  const { name: city, main, dt, timezone, weather, clouds, wind, visibility, rain, snow, sys } = data;
  const { feels_like, temp } = main;
  const { icon } = weather[0];

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

  const sunrise = formatUnixTimestamp(sys.sunrise, timezone);
  const sunset = formatUnixTimestamp(sys.sunset, timezone);

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
          <div className='w-full flex flex-col items-end justify-center'>
            <div className='w-full flex flex-col items-end justify-center'>
              <span className='text-gray-200/60 text-[14px]'>{dayformat}</span>
              <span className='text-gray-200/60 text-[14px]'>Timezone {utc}</span>
              <span className='text-gray-200/60 text-[14px]'>Feels like {feelsLike} °C</span>
              <span className='text-gray-200/60 text-[14px]'>Cloudiness {clouds.all}%</span>
            </div>
            <div className='flex flex-col items-center justify-center mt-3 gap-2'>
              <div className='flex flex-row items-center justify-start gap-2'>
                <IconSunrise className='text-white' fontSize={22} />
                <span className='text-gray-200/60 text-[14px]'>Sunrise {sunrise[1]}</span>
              </div>
              <div className='flex flex-row items-center justify-start gap-2'>
                <IconSunset className='text-white' fontSize={22} />
                <span className='text-gray-200/60 text-[14px]'>Sunset {sunset[1]}</span>
              </div>
            </div>

          </div>
        </div>
      </div>
      <DetailsBodyToday main={main} weather={weather[0]} wind={wind} visibility={visibility} rain={rain} snow={snow} />
    </div>
  )
}
