import { WeatherListItem } from '../../../types/Type_Weather';
import { WindStatus } from '../../WeatherComponents/WindStatus';
import { AtmosPressure } from '../../WeatherComponents/AtmosPressure';
import { VisibilityStatus } from '../../WeatherComponents/VisibilityStatus';
import { HumidityStatus } from '../../WeatherComponents/HumidityStatus';
import { RoomTemperature } from '../../WeatherComponents/RoomTemperature';
import { formatDateTxt, kelvinToCelsius, kelvinToFahrenheit } from '../../../utils/functions';

interface TypeMoreInfo {
  data: WeatherListItem[];
  selectedHour: string;
  optionDegree: string;
}
export const MoreInfoBodyWeek = ( { data, selectedHour, optionDegree }: TypeMoreInfo ) => {

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

  if (!data || data.length === 0) {
    return <div>Loading...</div>; 
  }

  return (
    <div className='w-full max-h-[380px] mt-5'>
      <div className='flex items-center justify-between'>
        <div className='w-1/4 ml-3'>
          <div className='flex flex-col items-center justify-center'>
            <div className='flex flex-col items-center justify-center gap-2'>
              <span className='text-2xl font-bold text-black tracking-normal'>{formatDay.split(', ')[0]}</span>
              <span className='text-xl font-bold text-black tracking-normal'>{formatDay.split(', ')[1]}</span>
            </div>
            <div className='w-full h-full'>
              <img src={`../../assets/svg/${info[0].weather[0].icon}.svg`} alt={info[0].weather[0].description} className='inline-block h-44 w-44' />
            </div>
            <span className='text-3xl text-black font-semibold'>{temp} °{optionDegree}</span>
            <div className='flex flex-col items-center justify-center pt-1'>
              <span className='text-black/70 font-semibold'>Feels like {feels_like} °{optionDegree}</span>
              <div className='flex flex-row items-center justify-center gap-2'>
                <img src={`https://openweathermap.org/img/w/${info[0].weather[0].icon}.png`} alt={description} className='inline-block h-9 w-9' />
                <span className='text-black/70 font-semibold'>{description}</span>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className='flex flex-row items-center justify-between flex-wrap py-2 gap-2'>
            {info && <WindStatus props={info[0]?.wind} /> }
            { info && <RoomTemperature props={info[0]?.main} optionDegree={optionDegree} /> }
            { info && <AtmosPressure props={info[0]?.main} /> }
          </div>
          <div className='flex flex-row items-center justify-center gap-2 py-2'>
            { info && <VisibilityStatus props={info[0]?.visibility} /> }
            { info && <HumidityStatus props={info[0]?.main.humidity} /> }
          </div>
        </div>
      </div>
    </div>
  )
}
