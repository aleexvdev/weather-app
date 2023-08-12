import React, { useState, useMemo, useEffect } from 'react'
import { formatUnixTimestamp, kelvinToCelsius, kelvinToFahrenheit } from '../../utils/functions'
import IconMostlyCloudy from '../../icons/IconMostlyCloudy'
import { IconWindStatus } from '../../icons/WindStatusIcons/IconWindStatus'
import { TypeFetchWeatherMain, TypeLocation } from '../../types/Type_Weather';
import IconLatitude from '../../icons/IconLatitude';
import IconLongitude from '../../icons/IconLongitude';

interface TypeResultsProps {
  cityData: TypeLocation;
  weatherData: TypeFetchWeatherMain | undefined;
  optionDegree: string;
}


export const ResultFormWeather = ( { cityData, weatherData, optionDegree }: TypeResultsProps ) => {

  const temp = useMemo(() => {
    const date = new Date();
    const temperature = weatherData?.temp || date.getDay();
    return optionDegree === 'C' ? kelvinToCelsius(temperature).toFixed(2) : kelvinToFahrenheit(temperature).toFixed(2);
  }, [weatherData, optionDegree]);

  const timedata = useMemo(() => {
    const dt = weatherData?.dt || 0;
    const timezone = weatherData?.timezone || 0;
    return formatUnixTimestamp(dt, timezone);
  }, [weatherData]);

  return (
    <>
      <div className='w-full'>
        <div className='flex flex-col items-center justify-between py-2 px-3'>
          <img src={`../../assets/svg/${weatherData?.icon}.svg`} alt={weatherData?.description} className='inline-block h-44 w-44' />
          <h2 className='text-6xl text-left py-2'>{temp} °{optionDegree}</h2>
          <span className='text-3xl text-left py-2 font-bold tracking-wider'>{timedata[0]}, <span className='text-3xl text-blue-800/70'>{timedata[1]}</span></span>
        </div>
      </div>
      <div className='mx-3 pt-3'>
        <div className='border-b border-gray-600/30'></div>
      </div>
      <div className='w-full'>
        <div className='flex flex-col items-center justify-between pt-2 px-3'>
          <div className='flex flex-row items-center justify-start gap-3 w-full py-2'>
            <IconLatitude 
              fontSize={25} 
            />
            <span className='text-black font-bold tracking-normal'>Lat.<span className='pl-4'>{cityData?.lat}</span></span>
          </div>
          <div className='flex flex-row items-center justify-start gap-3 w-full py-2'>
            <IconLongitude 
              fontSize={25} 
            />
            <span className='text-black font-bold tracking-normal'>Lon.<span className='pl-3'>{cityData.lon}</span></span>
          </div>
        </div>
      </div>
      <div className='mx-3 pt-3'>
        <div className='border-b border-gray-600/30'></div>
      </div>
    </>
  )
}
