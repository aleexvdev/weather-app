import React from 'react'
import { IconVisibilityStatus, IconWeatherVis } from '../../icons/VisibilityIcons/IconVisibilityStatus'

export const VisibilityStatus = () => {
  return (
    <div className='bg-slate-700/50 w-[180px]  h-[165px] rounded-lg shadow-md px-3 py-4'>
      <div className='flex items-center justify-start gap-3'>
        <IconVisibilityStatus fontSize={22} />
        <span className='text-lg text-white font-semibold'>Visibility</span>
      </div>
      <div className='flex flex-row items-center justify-start gap-2 mt-4'>
        <span className='text-3xl text-white font-bold'>15</span>
        <span className='text-gray-600'>meters</span>
      </div>
      <div className='flex flex-row items-center justify-start gap-2 mt-3'>
        <IconWeatherVis className='text-white' fontSize={22} />
        <span className='text-white'>Excelent</span>
      </div>
    </div>
  )
}


