import { WeatherListItem } from '../../../types/Type_Weather';
import { WindStatus } from '../../WeatherComponents/WindStatus';
import { AtmosPressure } from '../../WeatherComponents/AtmosPressure';
import { VisibilityStatus } from '../../WeatherComponents/VisibilityStatus';
import { HumidityStatus } from '../../WeatherComponents/HumidityStatus';
import { RoomTemperature } from '../../WeatherComponents/RoomTemperature';
import { formatDateTxt, kelvinToCelsius } from '../../../utils/functions';

interface TypeMoreInfo {
  data: WeatherListItem[];
  selectedHour: string;
}
export const MoreInfoBodyWeek = ( { data, selectedHour }: TypeMoreInfo ) => {

  const formatDay = data[0] && formatDateTxt(data[0].dt_txt);
  const temp = data[0] && kelvinToCelsius(data[0].main.temp).toFixed(2);
  const feels_like = data[0] && kelvinToCelsius(data[0].main.feels_like).toFixed(2);
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
            <h4 className='text-2xl'>{formatDay}</h4>
            <div className='w-full h-full'>
              <img src={`../../assets/svg/${info[0].weather[0].icon}.svg`} alt="" className='inline-block h-44 w-44' />
            </div>
            <span className='text-3xl text-gray-400'>{temp} °C </span>
            <div className='flex flex-col items-center justify-center pt-3'>
              <span className='text-lg text-gray-400'>Feels like {feels_like} °C </span>
              <span className='text-lg text-gray-400'>{description}</span>
            </div>
          </div>
        </div>
        <div>
          <div className='flex flex-row items-center justify-between flex-wrap py-2 gap-2'>
            {info && <WindStatus props={info[0]?.wind} /> }
            { info && <RoomTemperature props={info[0]?.main} /> }
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
