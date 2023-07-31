import React from 'react'
import { IconSunrise, IconSunset } from '../../icons/SunriseSunsetIcons/IconSunriseSunset'

export const SunriseSunsetStatus = () => {
  return (
    <div className='bg-slate-700/50 w-[180px] h-[135px] rounded-lg shadow-md py-3 px-4'>
      <div className='flex flex-col items-start justify-between h-full'>
        <div className='flex items-center justify-start gap-3'>
          <span className='text-lg text-white font-semibold'>Sunrise & Sunset</span>
        </div>
        <div className='flex flex-row items-center justify-start gap-4'>
          <IconSunrise className='text-white' fontSize={22} />
          <span className='text-white'>6:30 AM</span>
        </div>
        <div className='flex flex-row items-center justify-start gap-4'>
          <IconSunset className='text-white' fontSize={22} />
          <span className='text-white'>7:00 PM</span>
        </div>
      </div>
    </div>
  )
}
