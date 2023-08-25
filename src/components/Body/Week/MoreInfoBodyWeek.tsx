import { WeatherListItem } from '../../../types/Type_Weather';
import { WindStatus } from '../../WeatherComponents/WindStatus';
import { AtmosPressure } from '../../WeatherComponents/AtmosPressure';
import { VisibilityStatus } from '../../WeatherComponents/VisibilityStatus';
import { HumidityStatus } from '../../WeatherComponents/HumidityStatus';
import { RoomTemperature } from '../../WeatherComponents/RoomTemperature';
import { formatDateTxt, kelvinToCelsius, kelvinToFahrenheit } from '../../../utils/functions';
import { useTheme } from '../../../context/ThemeContext/ThemeContext';
import { CardProfile } from '../../Items/CardProfile';

interface TypeMoreInfo {
  data: WeatherListItem[];
  selectedHour: string|number;
  optionDegree: string;
}
export const MoreInfoBodyWeek = ( { data, selectedHour, optionDegree }: TypeMoreInfo ) => {

  const { textColorContent, textColorContent70 } = useTheme();
  const formatDay = data[0] && formatDateTxt(data[0].dt_txt);
  const temp = data[0] && optionDegree === 'C' ? kelvinToCelsius(data[0].main.temp).toFixed(2) : kelvinToFahrenheit(data[0].main.temp).toFixed(2);
  const feels_like = data[0] && optionDegree === 'C' ? kelvinToCelsius(data[0].main.feels_like).toFixed(2) : kelvinToFahrenheit(data[0].main.feels_like).toFixed(2);
  const description = data[0] && data[0].weather[0].description;

  const info = data[0] && data.filter((item) => {
    if (item.dt_txt === selectedHour) {
      return item;
    }
    return false;
  });

  if ((!data || data.length === 0) && info.length === 0) {
    return <div>Loading...</div>; 
  }

  return (
    <div className='w-full h-full md:max-h-[380px]'>
      <div className='flex flex-col md:flex-row items-center justify-between'>
        <div className='md:w-[35%] md:mx-3'>
          <div className='flex flex-col items-center justify-center'>
            <div className='flex flex-col items-center justify-center gap-2'>
              <span className={`text-2xl font-bold ${textColorContent} tracking-normal`}>{formatDay.split(', ')[0]}</span>
              <span className={`text-xl font-bold ${textColorContent} tracking-normal`}>{formatDay.split(', ')[1]}</span>
            </div>
            <div className='w-full h-full'>
              <img src={`../../assets/svg/${info[0].weather[0].icon}.svg`} alt={info[0].weather[0].description} className='inline-block h-40 w-40' />
            </div>
            <span className={`text-3xl ${textColorContent} font-semibold`}>{temp} °{optionDegree}</span>
            <div className='flex flex-col items-center justify-center pt-1'>
              <span className={`${textColorContent70}`}>Feels like {feels_like} °{optionDegree}</span>
              <div className='flex flex-row items-center justify-center gap-2'>
                <img src={`https://openweathermap.org/img/w/${info[0].weather[0].icon}.png`} alt={description} className='inline-block h-9 w-9' />
                <span className={textColorContent70}>{description}</span>
              </div>
            </div>
          </div>
        </div>
        <div className='w-full mt-10 md:mt-0'>
          <div className='flex flex-row items-center justify-center flex-wrap py-0 gap-x-2 gap-y-4'>
            <WindStatus props={info[0]?.wind} />
            <RoomTemperature props={info[0]?.main} optionDegree={optionDegree} />
            <AtmosPressure props={info[0]?.main} />
            <VisibilityStatus props={info[0]?.visibility} />
            <HumidityStatus props={info[0]?.main.humidity} />
            <CardProfile />
          </div>
        </div>
      </div>
    </div>
  )
}
