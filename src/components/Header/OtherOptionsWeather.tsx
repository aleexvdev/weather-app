import IconWiCelsius from '../../icons/IconWiCelsius'
import { IconTheme } from '../../icons/Theme/IconTheme'
import IconWiFahrenheit from '../../icons/IconWiFahrenheit'
import { IconMapLocation } from '../../icons/IconMapLocation'
import { useTheme } from '../../context/ThemeContext/ThemeContext';

interface TypeOptionsWeather {
  changeOption: (value: string) => void;
  optionDegree: string;
}

export const OtherOptionsWeather = ( { changeOption, optionDegree }: TypeOptionsWeather ) => {

  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <div className='w-full'>
      <div className='flex flex-row items-center justify-end h-10 gap-4'>
        <button 
          className={`rounded-xl px-2 h-10 w-10 ${optionDegree === 'C' ? 'bg-[#0338a1]' : `${isDarkMode ? 'hover:bg-gray-800/80' : 'hover:bg-gray-200/80'}` }`}
          onClick={() => changeOption('C')}
          title='Celsius'
        >
          <IconWiCelsius 
            fontSize={25} 
            className={`${optionDegree === 'C' ? 'text-white' : `${isDarkMode ? 'text-white/50' : 'text-black'}`}`}
          />
        </button>
        <button 
          className={`rounded-xl p-2 h-10 w-10 ${optionDegree === 'F' ? 'bg-[#0338a1]' : `${isDarkMode ? 'hover:bg-gray-800/80' : 'hover:bg-gray-200/80'}`}`} 
          onClick={() => changeOption('F')}
          title='Fahrenheit'
        >
          <IconWiFahrenheit 
            fontSize={25} 
            className={`${optionDegree === 'F' ? 'text-white' : `${isDarkMode ? 'text-white/50' : 'text-black'}`}`}
          />
        </button>
        <button 
          className='rounded-xl px-2 h-10 w-10 hover:bg-gray-200/80'
          title='Map'
        >
          <IconMapLocation 
            fontSize={25} 
            color='black'
          />
        </button>
        <button 
          className='rounded-full p-2 h-10 w-10'
          onClick={toggleTheme}
        >
          <IconTheme 
            fontSize={30} 
            color='white'
          />
        </button>
      </div>
    </div>
  )
}
