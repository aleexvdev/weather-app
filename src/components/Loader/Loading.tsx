import React from 'react'
import { useTheme } from '../../context/ThemeContext/ThemeContext'
import { IconLoading } from '../../icons/IconLoading';

interface TypeLoading {
  style: string;
  name: string;
}

export const Loading = ( { style, name }: TypeLoading ) => {

  const { textColorContent } = useTheme();

  return (
    <div className={`w-auto h-auto ${style} flex items-center justify-center`}>
      <div className='flex flex-col items-center justify-center h-full'>
        <IconLoading className='w-20 h-20 relative' />
        <span className={`${textColorContent} text-2xl absolute z-30 mt-28`}>Loading {name}...</span>
      </div>
    </div>
  )
}
