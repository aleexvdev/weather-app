import React from 'react'
import { IconAtmosPressure } from '../../icons/AtmosPressureIcons/IconAtmosPressure'

export const AtmosPressure = () => {
  return (
    <div className='bg-slate-700/50 w-[180px] h-[155px] rounded-lg shadow-md py-3 px-4'>
      <div className='flex items-center justify-start gap-3'>
        <IconAtmosPressure fontSize={22} />
        <span className='text-lg text-white font-semibold'>Pressure</span>
      </div>
      <div className='flex flex-row items-center justify-start gap-2 mt-3'>
        <span className='text-3xl text-white font-bold'>1012</span>
        <span className='text-gray-600'>hPa</span>
      </div>
      <div className='flex flex-col items-center justify-start mt-1'>
        <div>
          <span className='text-white text-[14px]'>Sea</span>
          <span className='text-white text-[14px] pl-2'>1012<span className='text-gray-600 pl-2 text-[14px]'>hPa</span></span>
        </div>
        <div>
          <span className='text-white text-[14px]'>Ground</span>
          <span className='text-white pl-2 text-[14px]'>1012<span className='text-gray-600 pl-2 text-[14px]'>hPa</span></span>
        </div>
      </div>
    </div>
  )
}
