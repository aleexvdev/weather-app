import React, { useEffect, useState } from 'react'
import { DetailsBodyWeek } from './DetailsBodyWeek'
import { ForescastTodays } from '../../WeatherComponents/ForescastTodays'
import { TypeForescastWeather, TypeWeekDays } from '../../../types/Type_Weather';
import { getFormattedData } from '../../../utils/functions';


interface TypeWeekBody {
  forescast: TypeForescastWeather;
}

export const WeekBody = ( { forescast }: TypeWeekBody ) => {

  const [forescastWeatherData, setForescastWeatherData] = useState<TypeForescastWeather>(); 
  const [weekForescast, setWeekForescast] = useState<TypeWeekDays[]>([]);


  useEffect(() => {
    setForescastWeatherData(forescast);
    if (forescastWeatherData) {
      const weekdata = getFormattedData(forescastWeatherData.list);
      setWeekForescast(weekdata);
    }
  }, [forescast]);

  return (
    <div>
      <div className='w-full'>
        <div className='my-5 px-3 flex flex-col h-full items-center justify-between'>
          <ForescastTodays data={weekForescast} />
          <DetailsBodyWeek />
        </div>
      </div>
    </div>
  )
}
