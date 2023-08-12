import React, { useState, useEffect } from 'react'
import { HeaderWeather } from './Header/HeaderWeather'
import { BodyWeather } from './Body/BodyWeather'
import { FormWeather } from './Form/FormWeather'
import { ResultFormWeather } from './Form/ResultFormWeather'
import { Footer } from './Footer/Footer'
import { TypeFetchWeather, TypeFetchWeatherMain, TypeForescastWeather, TypeLocation } from '../types/Type_Weather'
import { fetchWeatherDataAll } from '../api/apiweather'
import { Title } from './Title/Title'

const data: TypeLocation = {
  name: 'Huacho',
  lat: -11.108524,
  lon: -77.6103295,
  country: 'PE',
  state: 'Lima'
};

export const WeatherApp = () => {

  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [cityData, setCityData] = useState<TypeLocation>(data);
  const [weatherData, setWeatherData] = useState<TypeFetchWeatherMain>();
  const [currentWeather, setCurrentWeather] = useState<TypeFetchWeather>();
  const [forescastWeather, setForescastWeather] = useState<TypeForescastWeather>();
  const [optionDegree, setOptionDegree] = useState<string>('C');

  const handleTabChange = (index: number) => {
    setActiveTabIndex(index);
  };

  const selectedCity = (city: TypeLocation) => {
    setCityData(city);
  }

  const changeOption = ( value: string ) => {
    setOptionDegree(value);
  }

  useEffect(() => {
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
  }, [cityData]);

  return (
    <section className='min-h-[700px] bg-[#80c6ff] rounded-3xl mt-10'>
      <div className='flex flex-row w-full'>
        <div className='w-[28%]'>
          <div className=' my-6 mx-5'>
            <Title />
            <FormWeather selectedCity={selectedCity} />
            <ResultFormWeather cityData={cityData} weatherData={weatherData} optionDegree={optionDegree} />
            <Footer />
          </div>
        </div>
        <div className='w-[72%]'>
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
