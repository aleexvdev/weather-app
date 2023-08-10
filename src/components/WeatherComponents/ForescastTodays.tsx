import React from 'react'
import { ItemDayWeather } from '../Items/ItemDayWeather'
import { WeatherListItem } from '../../types/Type_Weather';

interface TypeForescastTodays {
  data: WeatherListItem[];
  handleDayClick: (dt: string) => void;
}

export const ForescastTodays = ( { data, handleDayClick }: TypeForescastTodays ) => {

  const dataWeek: WeatherListItem[] = getDataWeek(data);
  console.log(data);
  console.log(dataWeek);


  return (
    <div className='w-full'>
      <div className='my-1'>
        <div className='flex flex-row items-center justify-between py-0 gap-3'>
            {
              dataWeek.map( week => (
                <ItemDayWeather props={week} handleDayClick={handleDayClick} />
              ))
            }
        </div>
      </div>
    </div>
  )
}

function getDataWeek(data: WeatherListItem[]): WeatherListItem[] {
  const existingData: WeatherListItem[] = [];
  const processedDays: { [key: string]: boolean } = {};

  data.forEach(item => {
    const date = item.dt_txt.split(' ')[0]; // Extraer la fecha sin la hora
    if (!processedDays[date]) {
      processedDays[date] = true;
      existingData.push(item);
    }
  });

  return existingData;
}