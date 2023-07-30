import React from 'react'
import { IconWindNorth, IconWindStatus } from '../../icons/WindStatusIcons/IconWindStatus'

export const WindStatus = () => {
  return (
    <div className='bg-slate-700/50 w-[180px] h-[165px] rounded-lg shadow-md px-3 py-4'>
      <div className='flex items-center justify-start gap-3'>
        <IconWindStatus fontSize={22} />
        <span className='text-lg text-white font-semibold'>Wind Status</span>
      </div>
      <div className='flex flex-row items-end justify-start gap-2 mt-4'>
        <span className='text-3xl text-white font-bold'>16.5</span>
        <span className='text-gray-600'>km/h</span>
      </div>
      <div className='flex flex-row items-center justify-start gap-2 mt-3'>
        <IconWindNorth className='text-white' fontSize={22} />
        <span className='text-white'>S 192°</span>
      </div>
    </div>
  );
};

