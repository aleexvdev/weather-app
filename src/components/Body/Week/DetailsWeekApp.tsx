import React, { useState, useEffect } from 'react'
import { WeatherListItem } from '../../../types/Type_Weather';
import { ForescastTodays } from '../../WeatherComponents/ForescastTodays';
import { ContentInfoWeek } from './ContentInfoWeek';
import { Loading } from '../../Loader/Loading';

interface TypeDetailsWeekApp {
  data: WeatherListItem[];
  optionDegree: string;
}

export const DetailsWeekApp = ( { data, optionDegree }: TypeDetailsWeekApp ) => {

  const [forecastData, setForecastData] = useState<WeatherListItem[]>([]);
  const [selectedDay, setSelectedDay] = useState<string|number>();
  const [selectedHour, setSelectedHour] = useState<string|number>('');
  const [isSelected, setIsSelected] = useState<string|number>('');

  useEffect(() => {
    if (data.length > 0) {
      setForecastData(data);
      setSelectedDay(data[0].dt_txt);
      setSelectedHour(data[0].dt_txt);
      setIsSelected(data[0].dt_txt);
    }
  }, [data]);

  const handleDayClick = (day: string) => {
    setSelectedDay(day);
    setSelectedHour('');
    setIsSelected(day);
  };

  const handleHourClick = (hour: string) => {
    setSelectedHour(hour);
  };
  
  const filteredData = forecastData.filter(item => {
    const itemDate = new Date(item.dt_txt);
    if (selectedDay) {
      const selectedDate = new Date(selectedDay);
      return (
        itemDate.getDate() === selectedDate.getDate() &&
        itemDate.getMonth() === selectedDate.getMonth() &&
        itemDate.getFullYear() === selectedDate.getFullYear()
      );
    }
    return false;
  });

  return (  
    <div className='w-full h-full'>
      <div className='mt-4 px-0 md:px-3 flex flex-col h-full items-center justify-between'>
        <ForescastTodays 
          data={forecastData} 
          handleDayClick={handleDayClick} 
          isSelectedDay={isSelected}
        />
        <ContentInfoWeek 
          data={filteredData}
          selectedHour={selectedHour}
          onHourClick={handleHourClick}
          optionDegree={optionDegree}
        />
      </div>
    </div>
  )
}
