import { motion } from 'framer-motion';
import { WeatherListItem } from '../../../types/Type_Weather';
import { MoreInfoBodyWeek } from './MoreInfoBodyWeek';
import { useTheme } from '../../../context/ThemeContext/ThemeContext';

interface TypeContentInfoWeek {
  data: WeatherListItem[];
  selectedHour: string|number;
  onHourClick: (dt: string) => void;
  optionDegree: string;
}
export const ContentInfoWeek = ( { data, selectedHour, onHourClick, optionDegree }: TypeContentInfoWeek ) => {

  const { textColorContent, isDarkMode } = useTheme();

  if (!data || data.length === 0) {
    return <div>Loading...</div>; 
  }

  if (!selectedHour && data) {
    selectedHour = data[0].dt_txt;
  }

  const sortDataByHour = orderDataByHour(data);

  return (
    <div className='w-full min-h-screen md:min-h-[433px] mt-5 md:mt-0 md:py-2'>
      <h2 className={`mt-5 md:mt-9 text-xl ${textColorContent} tracking-wide font-medium`}>Highlights of the Week</h2>
      <div className='flex flex-col md:flex-row items-center justify-between min-h-[380px] md:min-h-[380px]'>
        <div className='w-full md:w-[60px] md:max-h-[410px]'>
          <div className='flex flex-row flex-wrap md:flex-col items-center justify-center gap-4 py-5 md:py-0'>
            {sortDataByHour.map(hour => (
              <motion.button
                key={hour.dt_txt}
                className={`text-sm w-auto px-2 py-1 rounded-lg ${
                  selectedHour === hour.dt_txt 
                  ? `${isDarkMode ? 'bg-[#80C6FF] text-black font-medium' : 'bg-[#0338a1] text-white font-medium'}` 
                  : `${isDarkMode ? 'text-white/70 font-medium hover:text-[#80C6FF]' : 'text-black font-semibold hover:text-[#0338a1]'}`
                }`}
                onClick={() => onHourClick(hour.dt_txt)}
                whileTap={{ scale: 0.9, opacity: 0.8 }}
              >
                {formatHour(hour.dt_txt)}
              </motion.button>
            ))}
          </div>
        </div>
        <div className='md:pb-0 pb-5 md:mb-4'>
          <MoreInfoBodyWeek data={data} selectedHour={selectedHour} optionDegree={optionDegree} />
        </div>
      </div>
    </div>
  )
}

const orderDataByHour = (data: WeatherListItem[]): WeatherListItem[] => {
  return data.slice().sort((a, b) => {
    const hourA = parseInt(a.dt_txt.split(' ')[1].split(':')[0], 10);
    const hourB = parseInt(b.dt_txt.split(' ')[1].split(':')[0], 10);
    return hourA - hourB;
  });
}

const formatHour = (hour: string) => {
  const parts = hour.split(' ')[1].split(':');
  return `${parseInt(parts[0], 10) < 10 ? '0'+parseInt(parts[0], 10) : parseInt(parts[0], 10)}:${parts[1]}`;
};

