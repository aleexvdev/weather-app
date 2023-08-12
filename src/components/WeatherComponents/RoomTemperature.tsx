import React from 'react'
import { motion } from 'framer-motion'
import { TypeMainWProp } from '../../types/Type_Weather';
import IconRoomTemperature from '../../icons/RoomTemperature/IconRoomTemperature';
import { kelvinToCelsius, kelvinToFahrenheit } from '../../utils/functions';
import IconTemperatureMax from '../../icons/RoomTemperature/IconTemperatureMax';
import IconTemperatureMin from '../../icons/RoomTemperature/IconTemperatureMin';

interface TypeRoomTemperatureProp {
  props: TypeMainWProp;
  optionDegree: string;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } },
};

const itemVariants = {
  hidden: { opacity: 0, filter: "blur(1px)", y: 20 },
  visible: { opacity: 1, filter: "blur(0)", y: 0, transition: { duration: 0.5, delay: 0.2 } },
};

export const RoomTemperature = ( { props, optionDegree }: TypeRoomTemperatureProp) => {

  const tempmax = props && optionDegree === 'C' ? kelvinToCelsius(props.temp_max).toFixed(2) : kelvinToFahrenheit(props.temp_max).toFixed(2);
  const tempmin = props && optionDegree === 'C' ? kelvinToCelsius(props.temp_min).toFixed(2) : kelvinToFahrenheit(props.temp_max).toFixed(2);

  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className='bg-[#0338a1] w-[180px] h-[135px] rounded-lg shadow-md shadow-black py-3 px-3'
    >
      <div className='flex flex-col items-start justify-between h-full'>
        <motion.div 
          variants={itemVariants}
          className='flex items-center justify-start gap-3'
        >
          <IconRoomTemperature 
            fontSize={22} 
            color='white'
          />
          <span className='text-lg text-white font-semibold'>Temperatures</span>
        </motion.div>
        <motion.div 
          variants={itemVariants}
          className='flex flex-row items-center justify-start gap-2 pl-1'
        >
          <IconTemperatureMax 
            fontSize={20} 
            color='white'
          />
          <span className='text-3xl text-white font-bold'>{tempmax}</span>
          <span className='text-gray-200/50'>máx</span>
        </motion.div>
        <motion.div 
          variants={itemVariants}
          className='flex flex-row items-center justify-start gap-2 pl-1'
        >
          <IconTemperatureMin 
            fontSize={20} 
            color='white'
          />
          <span className='text-3xl text-white font-bold'>{tempmin}</span>
          <span className='text-gray-200/50'>min</span>
        </motion.div>
      </div>
    </motion.div>
  )
}
