import React, { useState } from 'react'
import { HeaderWeather } from './Header/HeaderWeather'
import { BodyWeather } from './Body/BodyWeather'
import { FormWeather } from './Form/FormWeather'
import { ResultFormWeather } from './Form/ResultFormWeather'

export const WeatherApp = () => {

  const [activeTabIndex, setActiveTabIndex] = useState(0);

  const handleTabChange = (index: number) => {
    setActiveTabIndex(index);
  };

  return (
    <section className='w-full min-h-[700px] bg-[#202B3B] my-8 rounded-3xl'>
      <div className='flex flex-row'>
        <div className='w-[28%]'>
          <div className=' my-6 mx-5'>
            <FormWeather />
            <ResultFormWeather />
          </div>
        </div>
        <div className='w-[72%]'>
          <div className=' my-6 mx-5'>
            <HeaderWeather activeTabIndex={activeTabIndex} onTabChange={handleTabChange} />
            <BodyWeather content={activeTabIndex} />
          </div>
        </div>
      </div>
    </section>
  )
}
