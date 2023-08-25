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
      className='bg-[#0338a1] md:w-[180px] md:h-[135px] rounded-lg shadow-md shadow-black py-3 px-4 w-full h-[100px]'
    >
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
      <div className='grid grid-cols-3 grid-rows-1 md:grid-rows-2 gap-0 md:mt-2 max-h-full'>
        <div className='col-span-1 md:col-span-2 row-span-1'>
          <span className='text-3xl text-white font-bold flex items-center justify-start md:items-end h-full'>{props} %</span>
        </div>
        <div className='col-span-1 md:col-span-2 row-span-1'>
          <span className='text-gray-200/50 flex items-center md:items-end md:justify-start justify-center h-full text-xl'>Humid</span>
        </div>
        <div className='col-span-1 row-span-1 md:col-start-3 md:col-end-4 md:row-start-1 md:row-end-3 flex items-center justify-center'>
          <motion.div
            variants={itemVariants}
            className='w-[25px] h-16 bg-transparent border border-sky-200/50 rounded-xl -top-5 md:top-0 ml-5 md:ml-0'
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
