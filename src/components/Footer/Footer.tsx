import { socialNetworks } from '../../data/socialNetworks'
import { IconLinkWeb } from '../../icons/IconLinkWeb'
import { ComponentSocialNetwork } from './ComponentSocialNetwork'

export const Footer = () => {




  return (
    <div className='w-full'>
      <div className='flex flex-col items-start justify-start pt-2 px-3'>
        <div className='flex flex-row justify-start w-full items-start'>
          <span className='text-white/50 text-[13px] font-semibold pr-2 tracking-wide'>Weather data provided by</span>
          <span className='text-white/50 text-[13px] font-semibold flex flex-row items-center hover:text-white/95 cursor-pointer tracking-wide'> <IconLinkWeb fontSize={15} /> OpenWeather</span>
        </div>
      </div>
      <div className='flex flex-row items-start justify-start pt-2 px-3'>
        <span className='text-white/50 text-[13px] font-semibold pr-2 tracking-wide'>Made by Alexander Valverde ● AlexVDev</span>
      </div>
      <div className='flex flex-row items-center justify-center px-3 py-5 gap-5'>
        {
          socialNetworks.map( (social) => (
            <ComponentSocialNetwork props={social} />
          ))
        }
      </div>
    </div>
  )
}
