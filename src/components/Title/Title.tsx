import React from 'react'
import { useTheme } from '../../context/ThemeContext/ThemeContext';

export const Title = () => {

  const { textColorContent } = useTheme();

  return (
    <div className='flex flex-row items-center justify-center pb-2'>
      <img src={'../../../assets/svg/logo.svg'} alt={'Whater App'} className='inline-block h-16 w-16' />
      <h1 className={`text-2xl font-bold ${textColorContent}`}>Whather App</h1>
    </div>
  )
}
