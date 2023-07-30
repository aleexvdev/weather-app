import React from 'react'
import { IconPrecipitationSnow, IconPrecipitationStatus } from '../../icons/PrecipitationIcons/IconPrecipitationStatus'

export const PrecipitationStatus = () => {
  return (
    <div className='bg-slate-700/50 w-[180px] h-[165px] rounded-lg shadow-md px-3 py-4'>
      <div className='flex items-center justify-start gap-3'>
        <IconPrecipitationStatus fontSize={22} />
        <span className='text-lg text-white font-semibold'>Precipitation</span>
      </div>
      <div className='flex flex-row items-center justify-start gap-2 mt-4'>
        <span className='text-3xl text-white font-bold'>0.75 %</span>
        <span className='text-gray-600'>1 hour</span>
      </div>
      <div className='flex flex-row items-center justify-start gap-2 mt-3'>
        <IconPrecipitationSnow className='text-white' />
        <span className='text-white'>Nieve</span>
        <span className='text-white'>8.2 mm</span>
      </div>
    </div>
  )
}
