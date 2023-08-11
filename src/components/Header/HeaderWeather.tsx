import React, { useState } from 'react'
import { TabWeather } from '../Tabs/TabWeather'
import { OtherOptionsWeather } from './OtherOptionsWeather'
import { tabs } from '../../data/dataWeather'

interface TypeMainHeader {
  activeTabIndex: number;
  onTabChange: (index: number) => void;
  changeOption: (value: string) => void;
}

export const HeaderWeather = ({ activeTabIndex, onTabChange, changeOption }: TypeMainHeader ) => {


  return (
    <div className='flex flex-row items-center justify-between py-2 px-3'>
      <TabWeather tabs={tabs} activeTabIndex={activeTabIndex} onTabChange={onTabChange} />
      <OtherOptionsWeather changeOption={changeOption} />
    </div>
  )
}
