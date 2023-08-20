import { TabWeather } from '../Tabs/TabWeather'
import { OtherOptionsWeather } from './OtherOptionsWeather'
import { tabs } from '../../data/dataWeather'

interface TypeMainHeader {
  activeTabIndex: number;
  onTabChange: (index: number) => void;
  changeOption: (value: string) => void;
  optionDegree: string;
}

export const HeaderWeather = ({ activeTabIndex, onTabChange, changeOption, optionDegree }: TypeMainHeader ) => {

  return (
    <div className='flex flex-row items-center justify-between py-2 px-1 md:px-3'>
      <TabWeather tabs={tabs} activeTabIndex={activeTabIndex} onTabChange={onTabChange} />
      <OtherOptionsWeather changeOption={changeOption} optionDegree={optionDegree} />
    </div>
  )
}
