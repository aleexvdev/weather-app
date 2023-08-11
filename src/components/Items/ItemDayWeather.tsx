import { motion } from 'framer-motion';
import { WeatherListItem } from '../../types/Type_Weather';
import { getDayNameInEnglish } from '../../utils/functions';

interface ItemWeatherProps {
  props: WeatherListItem;
  handleDayClick: (dttext: string) => void;
  isSelected: boolean;
}

export const ItemDayWeather = ( { props, handleDayClick, isSelected }: ItemWeatherProps ) => {

  const { dt, dt_txt } = props;

  const dayweekabrev = getDayNameInEnglish(dt_txt);
  const date = dt_txt.split(' ')[0];
  const day = date.split('-')[2];

  return (
    <motion.div 
      key={dt} 
      className='min-w-[120px] cursor-pointer rounded-xl'
      onClick={() => handleDayClick(dt_txt)}
      initial={{ backgroundColor: '#247eeb' }}
      animate={{ backgroundColor: isSelected ? '#247eeb' : '#2356DC' }}
      transition={{ duration: 0.3 }}
    >
      <motion.div 
        className={`flex flex-col items-center justify-between w-full h-full rounded-xl ${ isSelected ? 'bg-[#247eeb]' : 'bg-blue-700/90'}`}
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.12 }}
        animate={{ scale: isSelected ? 1.12 : 1  }}
      >
        <div className='flex items-center justify-between px-2 py-1 gap-3 rounded-tl-xl rounded-tr-xl'>
          <span className='text-xs'>●</span>
          <span className='text-sm'>{dayweekabrev}</span>
          <span className='text-xs'>●</span>
        </div>
        <div className='w-full border-b border-white'></div>
        <div className={`flex items-center justify-center w-full h-full py-2 rounded-bl-xl rounded-br-xl`}>
          <span className='text-5xl font-semibold py-2'>{day}</span>
        </div>
      </motion.div>
    </motion.div>
  )

}
