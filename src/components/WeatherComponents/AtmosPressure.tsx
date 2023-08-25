import React from 'react'
import { motion } from 'framer-motion'
import { IconAtmosPressure } from '../../icons/AtmosPressureIcons/IconAtmosPressure'
import { TypeMainWProp } from '../../types/Type_Weather';

interface TypeAtmosPressureProp {
  props: TypeMainWProp;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } },
};

const itemVariants = {
  hidden: { opacity: 0, filter: "blur(1px)", y: 20 },
  visible: { opacity: 1, filter: "blur(0)", y: 0, transition: { duration: 0.5, delay: 0.2 } },
};

export const AtmosPressure = ( { props }: TypeAtmosPressureProp ) => {

  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className='bg-[#0338a1] md:w-[180px] md:h-[135px] rounded-lg shadow-md shadow-black py-3 px-4 w-full h-[100px]'
    >
      <motion.div 
        variants={itemVariants}
        className='flex items-center justify-start gap-3'
      >
        <IconAtmosPressure fontSize={22} />
        <span className='text-lg text-white font-semibold'>Pressure</span>
      </motion.div>
      <div className='flex md:flex-col flex-row items-center md:items-start justify-between gap-6 md:gap-0'>
        <motion.div 
          variants={itemVariants}
          className='flex flex-row items-center justify-start gap-2 mt-1'
        >
          <span className='text-3xl text-white font-bold'>{props?.pressure}</span>
          <span className='text-gray-200/50'>hPa</span>
        </motion.div>
        <motion.div 
          variants={itemVariants}
          className='flex flex-col items-start justify-start mt-0'
        >
          <div>
            <span className='text-white text-[14px]'>Sea</span>
            <span className='text-white text-[14px] pl-2'>{props?.sea_level}<span className='text-gray-200/50 pl-2 text-[14px]'>hPa</span></span>
          </div>
          <div>
            <span className='text-white text-[14px]'>Ground</span>
            <span className='text-white pl-2 text-[14px]'>{props?.grnd_level}<span className='text-gray-200/50 pl-2 text-[14px]'>hPa</span></span>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}
