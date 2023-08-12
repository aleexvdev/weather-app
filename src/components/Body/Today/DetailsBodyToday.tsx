import React from 'react'
import { WindStatus } from '../../WeatherComponents/WindStatus'
import { VisibilityStatus } from '../../WeatherComponents/VisibilityStatus'
import { HumidityStatus } from '../../WeatherComponents/HumidityStatus'
import { AtmosPressure } from '../../WeatherComponents/AtmosPressure'
import { RoomTemperature } from '../../WeatherComponents/RoomTemperature'
import { TypeMainWProp, TypeRainWProp, TypeSnowWProp, TypeWeatherWProp, TypeWindWProp } from '../../../types/Type_Weather'
import { formatUnixTimestamp } from '../../../utils/functions'
import { SunriseSunsetStatus } from '../../WeatherComponents/SunriseSunsetStatus'

interface TypeSys {
  country: string;
  sunrise: number;
  sunset: number;
}

interface TypeDetailsWeather {
  main: TypeMainWProp;
  weather: TypeWeatherWProp;
  wind: TypeWindWProp;
  visibility: number;
  rain: TypeRainWProp;
  snow: TypeSnowWProp;
  optionDegree: string;
  sys: TypeSys;
  timezone: number;
}

export const DetailsBodyToday = ( { main, weather, wind, visibility, rain, snow, optionDegree, sys, timezone }: TypeDetailsWeather ) => {

  const sunrise = formatUnixTimestamp(sys.sunrise, timezone);
  const sunset = formatUnixTimestamp(sys.sunset, timezone);

  return (
    <div className='w-full'>
      <h2 className='py-3 text-xl text-black tracking-wide font-bold'>Today's Highlights</h2>
      <div className='flex flex-row items-center justify-center gap-10 flex-wrap py-2'>
        <WindStatus props={wind} />
        <AtmosPressure props={main} />
        <RoomTemperature props={main} optionDegree={optionDegree} />
      </div>
      <div className='flex flex-row items-center justify-center gap-10 flex-wrap py-2'>
        <VisibilityStatus props={visibility} />
        <HumidityStatus props={main.humidity} />
        <SunriseSunsetStatus sunrise={sunrise} sunset={sunset} />
      </div>
    </div>
  )
}

