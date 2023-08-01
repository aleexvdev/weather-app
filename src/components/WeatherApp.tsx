import React, { useState } from 'react'
import { HeaderWeather } from './Header/HeaderWeather'
import { BodyWeather } from './Body/BodyWeather'
import { FormWeather } from './Form/FormWeather'
import { ResultFormWeather } from './Form/ResultFormWeather'
import { Footer } from './Footer/Footer'

export const WeatherApp = () => {

  const [activeTabIndex, setActiveTabIndex] = useState(0);

  const handleTabChange = (index: number) => {
    setActiveTabIndex(index);
  };

  return (
    <section className='min-h-[700px] bg-[#202B3B] rounded-3xl mt-10'>
      <div className='flex flex-row w-full'>
        <div className='w-[28%]'>
          <div className=' my-6 mx-5'>
            <FormWeather />
            <ResultFormWeather />
            <Footer />
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
