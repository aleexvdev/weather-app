import { motion } from 'framer-motion'
import { IconSunrise, IconSunset } from '../../icons/SunriseSunsetIcons/IconSunriseSunset';
import { useTheme } from '../../context/ThemeContext/ThemeContext';

interface TypeCardMoreData {
  dayformat: string;
  utc: string;
  feelsLike: number|string;
  clouds: number|string;
  description: string;
  icon: string;
  sunset: string[];
  sunrise: string[];
  optionDegree: string;
}

interface TypeCard {
  data: TypeCardMoreData;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } },
};

const itemVariants = {
  hidden: { opacity: 0, filter: "blur(1px)", y: 20 },
  visible: { opacity: 1, filter: "blur(0)", y: 0, transition: { duration: 0.5, delay: 0.2 } },
};

export const CardMoreData = ( { data }: TypeCard ) => {

  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className='bg-[#0338a1] w-[65%] h-full rounded-lg shadow-md shadow-black py-3 px-4 text-white'
    >
      <div className='flex flex-col items-center justify-center h-full'>
        <div 
          className={`w-full flex flex-col items-end md:items-end justify-center`}
        >
          <motion.p variants={itemVariants} className='text-[14px]'>{data.dayformat}</motion.p>
          <motion.p variants={itemVariants} className='text-[14px]'>Timezone {data.utc}</motion.p>
          <motion.p variants={itemVariants} className='text-[14px]'>Feels like {data.feelsLike} °{data.optionDegree}</motion.p>
          <motion.p variants={itemVariants} className='text-[14px]'>Cloudiness {data.clouds}%</motion.p>
          <motion.div 
            variants={itemVariants}
            className='flex flex-row items-center justify-center gap-2'
          >
            <img src={`https://openweathermap.org/img/w/${data.icon}.png`} alt={data.description} className='inline-block h-9 w-9' />
            <span className='text-[14px]'>{data.description}</span>
          </motion.div>
          <motion.div 
            variants={itemVariants}
            className='flex flex-row items-center justify-start gap-4'
          >
            <IconSunrise className='text-yellow-300' fontSize={22} />
            <p className='text-[14px]'>{data.sunrise[1]}</p>
          </motion.div>
          <motion.div 
            variants={itemVariants}
            className='flex flex-row items-center justify-start gap-4'
          >
            <IconSunset className='text-yellow-300' fontSize={22} />
            <p className='text-[14px]'>{data.sunset[1]}</p>
          </motion.div>
        </div>
      </div>
    </motion.div> 
  )
}
