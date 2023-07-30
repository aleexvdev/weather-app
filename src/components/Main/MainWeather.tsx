import React, { useState } from 'react'
import { HeaderWeather } from './HeaderWeather'
import { Forescat7Days } from '../WeatherComponents/Forescat7Days'
import { BodyWeather } from '../BodyWeather/BodyWeather'

export const MainWeather = () => {

  const [activeTabIndex, setActiveTabIndex] = useState(0);

  const handleTabChange = (index: number) => {
    setActiveTabIndex(index);
  };
  return (
    <div className=' my-6 mx-5'>
      <HeaderWeather activeTabIndex={activeTabIndex} onTabChange={handleTabChange} />
      <Forescat7Days />
      <BodyWeather content={activeTabIndex} />
    </div>
  )
}
