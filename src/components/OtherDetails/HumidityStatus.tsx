import React from 'react'
import { IconHumidityStatus } from '../../icons/HumidityIcons/IconHumidityStatus'

export const HumidityStatus = () => {
  return (
    <div className='bg-slate-700/50 w-[180px] h-[165px] rounded-lg shadow-md p-4 relative'>
      <div className='flex items-center justify-start gap-3'>
        <IconHumidityStatus fontSize={22} />
        <span className='text-lg text-white font-semibold'>Humidity</span>
      </div>
      <div className='flex items-center justify-between mt-2 gap-2 '>
        <div className='flex flex-col items-center justify-start mt-0'>
          <span className='text-3xl text-white font-bold'>70%</span>
          <span className='text-gray-600'>Humid</span>
        </div>
        <div
          className='w-7 h-20 bg-transparent border border-blue-500 rounded-xl'
          style={{ position: 'relative' }}
        >
          <div
            className='w-3 h-3 bg-white rounded-full'
            style={{
              position: 'absolute',
              bottom: `40%`,
              left: '50%',
              transform: 'translate(-50%, 50%)',
            }}
          ></div>
        </div>
        
      </div>
      
    </div>
  )
}
