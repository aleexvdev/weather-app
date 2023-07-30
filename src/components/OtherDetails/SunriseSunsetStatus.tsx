import React from 'react'
import { IconSunrise, IconSunset } from '../../icons/SunriseSunsetIcons/IconSunriseSunset'

export const SunriseSunsetStatus = () => {
  return (
    <div className='bg-slate-700/50 w-[180px] h-[165px] rounded-lg shadow-md px-3 py-4'>
      <div className='flex items-center justify-start gap-3'>
        <span className='text-lg text-white font-semibold'>Sunrise & Sunset</span>
      </div>
      <div className='flex flex-row items-center justify-start gap-4 mt-3'>
        <IconSunrise className='text-white' fontSize={22} />
        <span className='text-white'>6:30 AM</span>
      </div>
      <div className='flex flex-row items-center justify-start gap-4 mt-3'>
        <IconSunset className='text-white' fontSize={22} />
        <span className='text-white'>7:00 PM</span>
      </div>
    </div>
  )
}
