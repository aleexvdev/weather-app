import { motion } from 'framer-motion'
import IconWiCelsius from '../../icons/IconWiCelsius'
import IconWiFahrenheit from '../../icons/IconWiFahrenheit'
import { IconMapLocation } from '../../icons/IconMapLocation'
import { useTheme } from '../../context/ThemeContext/ThemeContext';

interface TypeOptionsWeather {
  changeOption: (value: string) => void;
  optionDegree: string;
}

const toggleVariants = {
  active: { x: '100%' },
  inactive: { x: '0%' },
};

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
            className={`${optionDegree === 'C' ? 'text-white' : `${isDarkMode ? 'text-white/80' : 'text-black'}`}`}
          />
        </button>
        <button 
          className={`rounded-xl p-2 h-10 w-10 ${optionDegree === 'F' ? 'bg-[#0338a1]' : `${isDarkMode ? 'hover:bg-gray-800/80' : 'hover:bg-gray-200/80'}`}`} 
          onClick={() => changeOption('F')}
          title='Fahrenheit'
        >
          <IconWiFahrenheit 
            fontSize={25} 
            className={`${optionDegree === 'F' ? 'text-white' : `${isDarkMode ? 'text-white/80' : 'text-black'}`}`}
          />
        </button>
        {/* <button 
          className='rounded-xl px-2 h-10 w-10 hover:bg-gray-200/80'
          title='Map'
        >
          <IconMapLocation 
            fontSize={25} 
            color='black'
          />
        </button> */}
        <div 
          className="flex items-center h-screen cursor-pointer" 
          onClick={toggleTheme}
        >
          <div className={`relative w-14 h-7 rounded-full ${isDarkMode ? 'bg-[#4dafff]' : 'bg-[#0338A1]' }`}>
            <motion.div
              className="absolute w-7 h-7 bg-yellow-500 rounded-full"
              variants={toggleVariants}
              initial="inactive"
              animate={isDarkMode ? 'active' : 'inactive'}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
