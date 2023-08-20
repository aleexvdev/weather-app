import React from 'react'
import { socialNetworks } from '../../data/socialNetworks'
import { ComponentSocialNetwork } from './ComponentSocialNetwork'
import { useTheme } from '../../context/ThemeContext/ThemeContext';

export const MainFooter = () => {

  const { textColorContent } = useTheme();

  return (
    <div className='w-full flex flex-col md:flex-row items-center justify-center gap-5 py-5'>
      <div className='flex flex-row items-center justify-center px-3'>
        <span className={`${textColorContent} text-[13px] font-semibold tracking-wider`}>Made by Alexander Valverde</span>
      </div>
      <div className='flex flex-row items-center justify-center px-3 gap-5 pb-5 md:pb-2'>
        {
          socialNetworks.map((social) => (
            <ComponentSocialNetwork key={social.id} props={social} />
          ))
        }
      </div>
    </div>
  )
}
