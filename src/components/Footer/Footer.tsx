import { useTheme } from '../../context/ThemeContext/ThemeContext'
import { IconLinkWeb } from '../../icons/IconLinkWeb'

export const Footer = () => {

  const { textColorContent70 } = useTheme();

  return (
    <div className='w-full min-h-[60px] flex flex-col justify-end'>
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
      </div>
    </div>
  );
}
