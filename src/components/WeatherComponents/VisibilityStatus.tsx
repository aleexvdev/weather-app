import React from 'react'
import { motion } from 'framer-motion'
import { IconVisibilityStatus, IconWeatherVis } from '../../icons/VisibilityIcons/IconVisibilityStatus'
import { visionMeasurement } from '../../utils/functions';

interface TypeVisibilityProp {
  props: number;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } },
};

const itemVariants = {
  hidden: { opacity: 0, filter: "blur(1px)", y: 20 },
  visible: { opacity: 1, filter: "blur(0)", y: 0, transition: { duration: 0.5, delay: 0.2 } },
};

export const VisibilityStatus = ( { props }: TypeVisibilityProp ) => {

  const vision: string = visionMeasurement(props/10000);

  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className='bg-[#0338a1] md:w-[180px] md:h-[135px] rounded-lg shadow-md shadow-black py-3 px-4 w-full h-[100px]'
    >
      <div className='flex flex-col items-start justify-between h-full'>
        <motion.div 
          variants={itemVariants}
          className='flex items-center justify-center gap-3'
        >
          <IconVisibilityStatus 
            fontSize={22} 
            color='white'
          />
          <span className='text-lg text-white font-semibold'>Visibility</span>
        </motion.div>
        <div className='flex md:flex-col flex-row items-center md:items-start justify-center gap-6 md:gap-0'>
          <motion.div 
            variants={itemVariants}
            className='flex flex-row items-center justify-start gap-2'
          >
            <span className='text-3xl text-white font-bold'>{props}</span>
            <span className='text-gray-200/50'>meters</span>
          </motion.div>
          <motion.div 
            variants={itemVariants}
            className='flex flex-row items-center justify-start gap-2 md:mt-[13px]'
          >
            <IconWeatherVis 
              color='white'
              fontSize={22} 
            />
            <span className='text-white'>{vision}</span>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}


