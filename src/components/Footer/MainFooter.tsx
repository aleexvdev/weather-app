import React from 'react'
import { socialNetworks } from '../../data/socialNetworks'
import { ComponentSocialNetwork } from './ComponentSocialNetwork'

export const MainFooter = () => {
  return (
    <div className=''>
      <div className='flex flex-row items-start justify-start pt-2 px-3'>
        <span className='text-black/80 text-[13px] font-semibold pr-2 tracking-wide'>Made by Alexander Valverde ● AlexVDev</span>
      </div>
      <div className='flex flex-row items-center justify-center px-3 pt-5 gap-5'>
        {
          socialNetworks.map((social) => (
            <ComponentSocialNetwork key={social.id} props={social} />
          ))
        }
      </div>
    </div>
  )
}
