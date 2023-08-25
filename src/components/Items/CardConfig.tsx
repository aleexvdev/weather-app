import React from 'react'
import { motion } from 'framer-motion'
import IconWiCelsius from '../../icons/IconWiCelsius';
import IconWiFahrenheit from '../../icons/IconWiFahrenheit';
import { useTheme } from '../../context/ThemeContext/ThemeContext';

interface TypeCardConfig {
  changeOption: (value: string) => void;
  closeCardConfig: () => void;
}

const listVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
};
const listItemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 }
};

const toggleVariants = {
  active: { x: '100%' },
  inactive: { x: '0%' },
};

export const CardConfig = ( { changeOption, closeCardConfig }: TypeCardConfig ) => {

  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={listVariants}
      className='bg-black rounded-xl p-2 text-white'
    >
      <motion.ul 
        className='w-full text-[18px] sm:text-sm'
        variants={listVariants}
      >
        <motion.li 
          className='px-1 py-2'
          variants={listItemVariants}
          whileHover={{ scale: 1.04 }}
        >
          <button 
            className='flex justify-start items-center' 
            onClick={() => {changeOption('C'); closeCardConfig();}}
            title='Celsius'
          >
            <IconWiCelsius 
              fontSize={25} 
              className='w-12'
            /> 
            <span className='text-[16px]'>Changue to Celsius</span>
          </button>
        </motion.li>
        <motion.li 
          className='px-1 py-2'
          variants={listItemVariants}
          whileHover={{ scale: 1.04 }}
        >
          <button 
            className='flex justify-start items-center' 
            onClick={() => {changeOption('F'); closeCardConfig();}}
            title='Fahrenheit'
          >
            <IconWiFahrenheit 
              fontSize={25} 
              className='w-12'
            /> 
            <span className='text-[16px]'>Changue to Fahrenheit</span>
          </button>
        </motion.li>
        <motion.li 
          className='px-1 py-2'
          variants={listItemVariants}
          whileHover={{ scale: 1.04 }}
        >
          <div className='flex justify-start items-center' onClick={toggleTheme}>
            <div 
              className="flex items-center cursor-pointer w-20" 
              
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
            <span className='text-[16px]'>Changue to Theme</span>
          </div>
        </motion.li>
      </motion.ul>
    </motion.div>
  )
}
