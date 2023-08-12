import React from 'react'
import { motion } from 'framer-motion'
import { IconHumidityStatus } from '../../icons/HumidityIcons/IconHumidityStatus'

interface TypeHumidityProp {
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

export const HumidityStatus = ( { props }: TypeHumidityProp ) => {

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
          <IconHumidityStatus 
            color='white'
            fontSize={25} 
          />
          <span className='text-lg text-white font-semibold'>Humidity</span>
        </motion.div>
        <div className='flex items-center justify-start gap-2'>
          <motion.div 
            variants={itemVariants}
            className='flex flex-col items-start justify-start'
          >
            <span className='text-3xl text-white font-bold'>{props} %</span>
            <span className='text-gray-200/50'>Humid</span>
          </motion.div>
          <motion.div
            variants={itemVariants}
            className='w-[25px] h-16 bg-transparent border border-sky-200/50 rounded-xl ml-10'
            style={{ position: 'relative' }}
          >
            <div
              className='w-3 h-3 bg-yellow-500 rounded-full'
              style={{
                position: 'absolute',
                bottom: `${props}%`,
                left: '50%',
                transform: 'translate(-50%, 50%)',
              }}
            ></div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}
