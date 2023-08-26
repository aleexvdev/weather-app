import React, { useState, useEffect, useMemo } from 'react'
import { formatUnixTimestamp, kelvinToCelsius, kelvinToFahrenheit } from '../../utils/functions'
import { TypeFetchWeatherMain, TypeLocation } from '../../types/Type_Weather';
import IconLatitude from '../../icons/IconLatitude';
import IconLongitude from '../../icons/IconLongitude';
import { useTheme } from '../../context/ThemeContext/ThemeContext';
import { Loading } from '../Loader/Loading';

interface TypeResultsProps {
  cityData: TypeLocation;
  weatherData: TypeFetchWeatherMain | undefined;
  optionDegree: string;
}


export const ResultFormWeather = ( { cityData, weatherData, optionDegree }: TypeResultsProps ) => {

  const { textColorContent, colorIcon, isDarkMode } = useTheme();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadingTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Wait 3 seconds before setting isLoading to false

    return () => {
      clearTimeout(loadingTimeout);
    };
  }, []);

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
      {isLoading ? (
        <Loading name='results' style={'md:w-auto md:h-[450px]'} /> // Show loading component
      ) : (
          <>
            <div className='w-full'>
              <div className='flex flex-col items-center justify-between py-2 px-3'>
                <img src={`../../assets/svg/${weatherData?.icon}.svg`} alt={weatherData?.description} className='inline-block h-44 w-44' />
                <h2 className={`${textColorContent} text-6xl text-left py-2`}>{temp} °{optionDegree}</h2>
                <span className={`${textColorContent} text-3xl text-left py-2 font-bold tracking-wider`}>{timedata[0]}, <span className={`text-3xl ${isDarkMode ? 'text-blue-400/90' : 'text-blue-800/70'}`}>{timedata[1]}</span></span>
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
                    color={colorIcon}
                  />
                  <span className={`${textColorContent} ${isDarkMode ? 'font-medium' : 'font-bold'} tracking-normal`}>Lat.<span className='pl-4'>{cityData?.lat}</span></span>
                </div>
                <div className='flex flex-row items-center justify-start gap-3 w-full py-2'>
                  <IconLongitude 
                    fontSize={25} 
                    color={colorIcon}
                  />
                  <span className={`${textColorContent} ${isDarkMode ? 'font-medium' : 'font-bold'} tracking-normal`}>Lon.<span className='pl-3'>{cityData?.lon}</span></span>
                </div>
              </div>
            </div>
            <div className='mx-3 pt-3'>
              <div className='border-b border-gray-600/30'></div>
            </div>
          </>
      )}
    </>
  );

  /* const temp = useMemo(() => {
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
          <h2 className={`${textColorContent} text-6xl text-left py-2`}>{temp} °{optionDegree}</h2>
          <span className={`${textColorContent} text-3xl text-left py-2 font-bold tracking-wider`}>{timedata[0]}, <span className={`text-3xl ${isDarkMode ? 'text-blue-400/90' : 'text-blue-800/70'}`}>{timedata[1]}</span></span>
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
              color={colorIcon}
            />
            <span className={`${textColorContent} ${isDarkMode ? 'font-medium' : 'font-bold'} tracking-normal`}>Lat.<span className='pl-4'>{cityData?.lat}</span></span>
          </div>
          <div className='flex flex-row items-center justify-start gap-3 w-full py-2'>
            <IconLongitude 
              fontSize={25} 
              color={colorIcon}
            />
            <span className={`${textColorContent} ${isDarkMode ? 'font-medium' : 'font-bold'} tracking-normal`}>Lon.<span className='pl-3'>{cityData?.lon}</span></span>
          </div>
        </div>
      </div>
      <div className='mx-3 pt-3'>
        <div className='border-b border-gray-600/30'></div>
      </div>
    </>
  ) */
}
