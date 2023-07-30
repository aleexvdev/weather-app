import React from 'react'
import { TabWeather } from '../Tabs/TabWeather'
import { OtherOptionsWeather } from './OtherOptionsWeather'
import { tabs } from '../../data/dataWeather'

interface TypeMainHeader {
  activeTabIndex: number;
  onTabChange: (index: number) => void;
}

export const HeaderWeather = ({ activeTabIndex, onTabChange }: TypeMainHeader ) => {
  return (
    <div className='flex flex-row items-center justify-between py-2 px-3'>
      <TabWeather tabs={tabs} activeTabIndex={activeTabIndex} onTabChange={onTabChange} />
      <OtherOptionsWeather />
    </div>
  )
}
