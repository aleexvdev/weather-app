import React from 'react'
import { IconVisibilityStatus, IconWeatherVis } from '../../icons/VisibilityIcons/IconVisibilityStatus'
import { visionMeasurement } from '../../utils/functions';

interface TypeVisibilityProp {
  props: number;
}

export const VisibilityStatus = ( { props }: TypeVisibilityProp ) => {

  const vision: string = visionMeasurement(props/10000);

  return (
    <div className='bg-slate-700/50 w-[180px] h-[135px] rounded-lg shadow-md py-3 px-4'>
      <div className='flex flex-col items-start justify-between h-full'>
        <div className='flex items-center justify-start gap-3'>
          <IconVisibilityStatus fontSize={22} />
          <span className='text-lg text-white font-semibold'>Visibility</span>
        </div>
        <div className='flex flex-row items-center justify-start gap-2'>
          <span className='text-3xl text-white font-bold'>{props}</span>
          <span className='text-gray-600'>meters</span>
        </div>
        <div className='flex flex-row items-center justify-start gap-2 mt-3'>
          <IconWeatherVis className='text-white' fontSize={22} />
          <span className='text-white'>{vision}</span>
        </div>
      </div>
    </div>
  )
}


