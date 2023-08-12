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
      className={`min-w-[120px] cursor-pointer rounded-xl bg-red-500`}
      onClick={() => handleDayClick(dt_txt)}
      animate={{ boxShadow: '0 8px 6px rgba(0, 0, 0, 0.1)'}}
      whileHover={{ scale: 1.05, boxShadow: '0 8px 6px rgba(0, 0, 0, 0.1)' }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className={`flex flex-col items-center justify-between w-full h-full rounded-xl`}
        initial={{ scale: 1 }}
        animate={{ scale: 1 }}
      >
        <div className={`flex items-center justify-between px-2 py-1 rounded-tl-xl rounded-tr-xl`}>
          <span className='text-xs text-white px-1'>●</span>
          <span className='text-sm text-white'>{dayweekabrev}</span>
          <span className='text-xs text-white px-1'>●</span>
        </div>
        <div className='w-full border-b border-white'></div>
        <div
          className={`flex items-center justify-center w-full h-full py-2 rounded-bl-xl rounded-br-xl ${
            isSelected
              ? 'bg-[#0338a1] text-white'
              : 'bg-[#acd9f8] text-black'
          }`}
        >
          <span className='text-5xl font-semibold py-2'>{day}</span>
        </div>
      </motion.div>
    </motion.div>
  ); 
}
