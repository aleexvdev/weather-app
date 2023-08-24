import React, { useState, useEffect } from 'react'
import { HeaderWeather } from './Header/HeaderWeather'
import { BodyWeather } from './Body/BodyWeather'
import { FormWeather } from './Form/FormWeather'
import { ResultFormWeather } from './Form/ResultFormWeather'
import { Footer } from './Footer/Footer'
import { TypeFetchWeather, TypeFetchWeatherMain, TypeForescastWeather, TypeLocation } from '../types/Type_Weather'
import { fetchWeatherDataAll } from '../api/apiweather'
import { Title } from './Title/Title'
import { useTheme } from '../context/ThemeContext/ThemeContext'
import { datacountries } from '../data/dataCountries'

export const WeatherApp = () => {

  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [cityData, setCityData] = useState<TypeLocation>();
  const [weatherData, setWeatherData] = useState<TypeFetchWeatherMain>();
  const [currentWeather, setCurrentWeather] = useState<TypeFetchWeather>();
  const [forescastWeather, setForescastWeather] = useState<TypeForescastWeather>();
  const [optionDegree, setOptionDegree] = useState<string>('C');
  const { backgroundContent } = useTheme();

  useEffect(() => {
    if (!cityData) {
      const randomIndex = Math.floor(Math.random() * datacountries.length);
      const randomLocation: TypeLocation = datacountries[randomIndex];
      setCityData(randomLocation);
    }
  }, []);
  

  useEffect(() => {
    if (cityData) {
      const { lat, lon } = cityData;
      const fetchData = async () => {
        const response = await fetchWeatherDataAll(lat, lon);
        if (response.status === 200) {
          const { dt, timezone, weather, main } = response.data.current;
          const { description, icon } = weather[0];
          const { temp, feels_like } = main;
  
          setCurrentWeather(response.data.current);
          setForescastWeather(response.data.forecast);
          setWeatherData({
            description,
            temp,
            feels_like,
            dt,
            timezone,
            icon
          });
        }
      }
      fetchData();
    }
  }, [cityData]);

  const handleTabChange = (index: number) => {
    setActiveTabIndex(index);
  };

  const selectedCity = (city: TypeLocation) => {
    setCityData(city);
  }

  const changeOption = ( value: string ) => {
    setOptionDegree(value);
  }

  return (
    <section className={`h-[100%] md:min-h-[550px] ${backgroundContent} rounded-3xl mt-10`}>
      <div className='flex md:flex-row w-full flex-col'>
        <div className='md:w-[28%]'>
          <div className='md:my-6 md:mx-5 mx-3 my-5'>
            <Title changeOption={changeOption} />
            <FormWeather selectedCity={selectedCity} />
            {cityData&&<ResultFormWeather cityData={cityData} weatherData={weatherData} optionDegree={optionDegree} />}
            <Footer />
          </div>
        </div>
        <div className='md:w-[72%]'>
          <div className='my-6 mx-5'>
            <HeaderWeather activeTabIndex={activeTabIndex} onTabChange={handleTabChange} changeOption={changeOption} optionDegree={optionDegree} />
            {
              currentWeather && forescastWeather ? <BodyWeather content={activeTabIndex} currentWeather={currentWeather} forescastWeather={forescastWeather} optionDegree={optionDegree} /> : <div>loading</div>
            }
            
          </div>
        </div>
      </div>
    </section>
  )
}
