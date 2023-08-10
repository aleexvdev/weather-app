import React from 'react'
import { WindStatus } from '../../WeatherComponents/WindStatus'
import { PrecipitationStatus } from '../../WeatherComponents/PrecipitationStatus'
import { VisibilityStatus } from '../../WeatherComponents/VisibilityStatus'
import { HumidityStatus } from '../../WeatherComponents/HumidityStatus'
import { AtmosPressure } from '../../WeatherComponents/AtmosPressure'
import { RoomTemperature } from '../../WeatherComponents/RoomTemperature'
import { TypeMainWProp, TypeRainWProp, TypeSnowWProp, TypeWeatherWProp, TypeWindWProp } from '../../../types/Type_Weather'

interface TypeDetailsWeather {
  main: TypeMainWProp;
  weather: TypeWeatherWProp;
  wind: TypeWindWProp;
  visibility: number;
  rain: TypeRainWProp;
  snow: TypeSnowWProp;
}

export const DetailsBodyToday = ( { main, weather, wind, visibility, rain, snow }: TypeDetailsWeather ) => {
  return (
    <div className='w-full'>
      <h2 className='py-3 text-xl'>Today's Highlights</h2>
      <div className='flex flex-row items-center justify-center gap-10 flex-wrap py-2'>
        <WindStatus props={wind} />
        <AtmosPressure props={main} />
        <RoomTemperature props={main} />
      </div>
      <div className='flex flex-row items-center justify-center gap-10 flex-wrap py-2'>
        <VisibilityStatus props={visibility} />
        <HumidityStatus props={main.humidity} />
      </div>
    </div>
  )
}

