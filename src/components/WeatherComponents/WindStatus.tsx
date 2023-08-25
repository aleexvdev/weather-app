import React from 'react'
import { motion } from 'framer-motion'
import { IconWindNorth, IconWindStatus } from '../../icons/WindStatusIcons/IconWindStatus'
import { TypeWindWProp } from '../../types/Type_Weather';
import { getCardinalPoint, mpsToKmph } from '../../utils/functions';

interface TypeWindProp {
  props: TypeWindWProp;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } },
};

const itemVariants = {
  hidden: { opacity: 0, filter: "blur(1px)", y: 20 },
  visible: { opacity: 1, filter: "blur(0)", y: 0, transition: { duration: 0.5, delay: 0.2 } },
};

export const WindStatus = ( { props }: TypeWindProp ) => {

  const speedkmh = props && mpsToKmph(props.speed);
  const cardinal = props && getCardinalPoint(props.deg);

  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className='bg-[#0338a1] md:w-[180px] md:h-[135px] h-[100px] rounded-lg shadow-md shadow-black py-3 px-4 w-full'
    >
      <div className='flex flex-col items-start justify-between h-full'>
        <motion.div 
          variants={itemVariants}
          className='flex items-center justify-start gap-3'
        >
          <IconWindStatus 
            fontSize={22} 
            color='white'
          />
          <span className='text-lg text-white font-semibold'>Wind Status</span>
        </motion.div>
        <div className='flex md:flex-col flex-row items-center md:items-start justify-between gap-6 md:gap-0'>
          <motion.div
            variants={itemVariants}
            className='flex flex-row items-center justify-start gap-2'
          >
            <span className='text-3xl text-white font-bold'>{speedkmh}</span>
            <span className='text-gray-200/50'>km/h</span>
          </motion.div>
          <motion.div 
            variants={itemVariants}
            className='flex flex-row items-center justify-start gap-2 md:mt-3'
          >
            <IconWindNorth className='text-white' fontSize={22} />
            <span className='text-white'>{cardinal?.punto} {props?.deg}°</span>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};
