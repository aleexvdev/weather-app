import React from 'react'
import IconWiCelsius from '../../icons/IconWiCelsius'
import IconGraphWeather from '../../icons/IconGraphWeather'
import { IconTheme } from '../../icons/Theme/IconTheme'
import IconWiFahrenheit from '../../icons/IconWiFahrenheit'

interface TypeOptionsWeather {
  changeOption: (value: string) => void;
}

export const OtherOptionsWeather = ( { changeOption }: TypeOptionsWeather ) => {
  return (
    <div className='w-full'>
      <div className='flex flex-row items-center justify-end h-10 gap-4'>
        <button 
          className='rounded-full p-2 h-10 w-10 hover:bg-slate-400/20' 
          onClick={() => changeOption('C')}
        >
          <IconWiCelsius fontSize={25} />
        </button>
        <button 
          className='rounded-full p-2 h-10 w-10 hover:bg-slate-400/20' 
          onClick={() => changeOption('F')}
        >
          <IconWiFahrenheit fontSize={25} />
        </button>
        <button className='rounded-full p-2 h-10 w-10 hover:bg-slate-400/20'>
          <IconGraphWeather fontSize={25} />
        </button>
        <button className='rounded-full p-2 h-10 w-10'>
          <IconTheme fontSize={30} />
        </button>
      </div>
    </div>
  )
}
