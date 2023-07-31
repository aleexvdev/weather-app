import React from 'react'
import { IconHumidityStatus } from '../../icons/HumidityIcons/IconHumidityStatus'

export const HumidityStatus = () => {
  return (
    <div className='bg-slate-700/50 w-[180px] h-[135px] rounded-lg shadow-md py-3 px-4 relative'>
      <div className='flex flex-col items-start justify-between h-full'>
        <div className='flex items-center justify-start gap-3'>
          <IconHumidityStatus fontSize={22} />
          <span className='text-lg text-white font-semibold'>Humidity</span>
        </div>
        <div className='flex items-center justify-start gap-2'>
          <div className='flex flex-col items-center justify-start'>
            <span className='text-3xl text-white font-bold'>70%</span>
            <span className='text-gray-600'>Humid</span>
          </div>
          <div
            className='w-[25px] h-16 bg-transparent border border-blue-500 rounded-xl ml-10'
            style={{ position: 'relative' }}
          >
            <div
              className='w-3 h-3 bg-white rounded-full'
              style={{
                position: 'absolute',
                bottom: `50%`,
                left: '50%',
                transform: 'translate(-50%, 50%)',
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  )
}
