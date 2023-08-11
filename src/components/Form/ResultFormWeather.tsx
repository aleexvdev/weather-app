import React, { useState, useMemo, useEffect } from 'react'
import { formatUnixTimestamp, kelvinToCelsius } from '../../utils/functions'
import IconMostlyCloudy from '../../icons/IconMostlyCloudy'
import { IconWindStatus } from '../../icons/WindStatusIcons/IconWindStatus'
import { TypeFetchWeatherMain } from '../../types/Type_Weather';

interface TypeResultsProps {
  weatherData: TypeFetchWeatherMain | undefined;
  optionDegree: string;
}


export const ResultFormWeather = ( { weatherData, optionDegree }: TypeResultsProps ) => {

  const [feelsLike, setFeelsLike] = useState<string>('')

  /* const feelsLike = useMemo(() => {
    const temperature = weatherData?.feels_like || 0;
    return kelvinToCelsius(temperature).toFixed();
  }, [weatherData]); */

  useEffect(() => {
    const temperature = weatherData?.feels_like || 0;
    const feelsLike = optionDegree === 'C' ? kelvinToCelsius(temperature).toFixed(1) : temperature.toFixed(1);
    setFeelsLike(feelsLike);
  }, [weatherData]);
  

  const temp = useMemo(() => {
    const date = new Date();
    const temperature = weatherData?.temp || date.getDay();
    return kelvinToCelsius(temperature).toFixed(1);
  }, [weatherData]);

  const timedata = useMemo(() => {
    const dt = weatherData?.dt || 0;
    const timezone = weatherData?.timezone || 0;
    return formatUnixTimestamp(dt, timezone);
  }, [weatherData]);

  return (
    <>
      <div className='w-full'>
        <div className='flex flex-col items-center justify-between py-2 px-3'>
          <img src={`../../assets/svg/${weatherData?.icon}.svg`} alt="" className='inline-block h-44 w-44' />
          <h2 className='text-6xl text-left py-2'>{temp} °C</h2>
          <span className='text-2xl text-left py-2'>{timedata[0]}, <span className='text-2xl text-gray-500'>{timedata[1]}</span></span>
        </div>
      </div>
      <div className='mx-3 pt-3'>
        <div className='border-b border-gray-600'></div>
      </div>
      <div className='w-full'>
        <div className='flex flex-col items-center justify-between py-2 px-3'>
          <div className='flex flex-row items-center justify-start gap-3 w-full py-2'>
            <IconMostlyCloudy fontSize={25} />
            <span>{weatherData?.description}</span>
          </div>
          <div className='flex flex-row items-center justify-start gap-3 w-full py-2'>
            <IconWindStatus fontSize={25} />
            <span>Feels like {feelsLike} °C</span>
          </div>
        </div>
      </div>
    </>
  )
}
