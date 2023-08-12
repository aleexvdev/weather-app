import { useTheme } from '../../context/ThemeContext/ThemeContext';
import { socialNetworks } from '../../data/socialNetworks'
import { IconLinkWeb } from '../../icons/IconLinkWeb'
import { ComponentSocialNetwork } from './ComponentSocialNetwork'

export const Footer = () => {

  const { textColorContent70 } = useTheme();

  return (
    <div className='w-full min-h-[50px] flex flex-col justify-end'>
      <div className='flex flex-col items-center'>
        <div className='flex flex-col items-start justify-start pt-2 px-3'>
          <div className='flex flex-row justify-start w-full items-start'>
            <span className={`${textColorContent70} text-[13px] pr-2 tracking-wide`}>Weather data provided by</span>
            <span className={`${textColorContent70} text-[13px] flex flex-row items-center hover:text-blue-500 cursor-pointer tracking-wide`}>
              <IconLinkWeb fontSize={15} />
              <span>OpenWeather</span>
            </span>
          </div>
        </div>
        {/* <div className='flex flex-row items-start justify-start pt-2 px-3'>
          <span className='text-black/80 text-[13px] font-semibold pr-2 tracking-wide'>Made by Alexander Valverde ● AlexVDev</span>
        </div> */}
        <div className='flex flex-row items-center justify-center px-3 pt-5 gap-5'>
          {
            socialNetworks.map((social) => (
              <ComponentSocialNetwork key={social.id} props={social} />
            ))
          }
        </div>
      </div>
    </div>
  );
}
