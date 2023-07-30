import React from 'react'
import IconWiCelsius from '../../icons/IconWiCelsius'
import IconGraphWeather from '../../icons/IconGraphWeather'

export const OtherOptionsWeather = () => {
  return (
    <div className='w-full'>
      <div className='flex flex-row items-center justify-end h-10 gap-4'>
        <button className='bg-slate-400/20 rounded-full p-2 h-10 w-10'>
          <IconWiCelsius fontSize={22} />
        </button>
        <button className='rounded-full p-2 h-10 w-10'>
          <IconGraphWeather fontSize={22} />
        </button>
      </div>
    </div>
  )
}
