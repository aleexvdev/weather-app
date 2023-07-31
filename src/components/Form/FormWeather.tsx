import React from 'react'
import IconSearchLocation from '../../icons/IconSearchLocation'
import IconCurrentLocation from '../../icons/IconCurrentLocation'

export const FormWeather = () => {
  return (
    <div className='w-full'>
      <form>
        <div className='flex flex-row items-center justify-between py-2 px-3 gap-2'>
          <div className='w-full flex flex-row items-center justify-start h-10 rounded-lg px-2 bg-white'>
            <IconSearchLocation 
              fontSize={22} 
              color='black'
            />
            <input 
              type="text" 
              className='w-full mx-2 px-1 h-8 outline-none text-black rounded-lg text-[15px]'
              placeholder='Search for places...'
            />
          </div>
          <div className='h-10'>
            <button
              className='bg-slate-400/20 rounded-full p-2'
            >
              <IconCurrentLocation 
                fontSize={22}
              />
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}
