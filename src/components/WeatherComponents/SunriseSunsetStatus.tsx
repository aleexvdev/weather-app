import React from 'react'
import { motion } from 'framer-motion'
import { IconSunrise, IconSunset } from '../../icons/SunriseSunsetIcons/IconSunriseSunset'

interface TypeSunriseSunset {
  sunset: string[];
  sunrise: string[];
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } },
};

const itemVariants = {
  hidden: { opacity: 0, filter: "blur(1px)", y: 20 },
  visible: { opacity: 1, filter: "blur(0)", y: 0, transition: { duration: 0.5, delay: 0.2 } },
};

export const SunriseSunsetStatus = ( { sunrise, sunset }: TypeSunriseSunset ) => {
  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className='bg-[#0338a1] w-[180px] h-[135px] rounded-lg shadow-md shadow-black py-3 px-4'
    >
      <div className='flex flex-col items-start justify-between h-full'>
        <motion.div 
          variants={itemVariants}
          className='flex items-center justify-start gap-3'
        >
          <span className='text-lg text-white font-semibold'>Sunrise & Sunset</span>
        </motion.div>
        <motion.div 
          variants={itemVariants}
          className='flex flex-row items-center justify-start gap-4'
        >
          <IconSunrise className='text-white' fontSize={22} />
          <span className='text-white'>{sunrise[1]}</span>
        </motion.div>
        <motion.div 
          variants={itemVariants}
          className='flex flex-row items-center justify-start gap-4'
        >
          <IconSunset className='text-white' fontSize={22} />
          <span className='text-white'>{sunset[1]}</span>
        </motion.div>
      </div>
    </motion.div>
  )
}
