import React from 'react'
import { WindStatus } from '../../WeatherComponents/WindStatus'
import { VisibilityStatus } from '../../WeatherComponents/VisibilityStatus'
import { HumidityStatus } from '../../WeatherComponents/HumidityStatus'
import { AtmosPressure } from '../../WeatherComponents/AtmosPressure'
import { RoomTemperature } from '../../WeatherComponents/RoomTemperature'
import { TypeMainWProp, TypeRainWProp, TypeSnowWProp, TypeWeatherWProp, TypeWindWProp } from '../../../types/Type_Weather'
import { formatUnixTimestamp } from '../../../utils/functions'
import { SunriseSunsetStatus } from '../../WeatherComponents/SunriseSunsetStatus'
import { useTheme } from '../../../context/ThemeContext/ThemeContext'

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

  const { textColorContent } = useTheme();
  const sunrise = formatUnixTimestamp(sys.sunrise, timezone);
  const sunset = formatUnixTimestamp(sys.sunset, timezone);

  return (
    <div className='w-full mt-5 md:mt-2'>
      <h2 className={`py-3 text-xl ${textColorContent} tracking-wide font-medium`}>Today's Highlights</h2>
      <div className='flex flex-row items-center justify-center gap-y-5 gap-x-16 flex-wrap py-2'>
        <WindStatus props={wind} />
        <AtmosPressure props={main} />
        <RoomTemperature props={main} optionDegree={optionDegree} />
        <VisibilityStatus props={visibility} />
        <HumidityStatus props={main.humidity} />
        <SunriseSunsetStatus sunrise={sunrise} sunset={sunset} />
      </div>
    </div>
  )
}

