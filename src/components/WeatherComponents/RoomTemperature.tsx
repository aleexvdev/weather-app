import React from 'react'
import { TypeMainWProp } from '../../types/Type_Weather';
import IconRoomTemperature from '../../icons/RoomTemperature/IconRoomTemperature';
import { kelvinToCelsius } from '../../utils/functions';
import IconTemperatureMax from '../../icons/RoomTemperature/IconTemperatureMax';
import IconTemperatureMin from '../../icons/RoomTemperature/IconTemperatureMin';

interface TypeRoomTemperatureProp {
  props: TypeMainWProp;
}

export const RoomTemperature = ( { props }: TypeRoomTemperatureProp) => {

  const { temp_max, temp_min } = props;

  const tempmax = kelvinToCelsius(temp_max).toFixed(2);
  const tempmin = kelvinToCelsius(temp_min).toFixed(2);

  return (
    <div className='bg-slate-700/50 w-[180px] h-[135px] rounded-lg shadow-md py-3 px-4'>
      <div className='flex flex-col items-start justify-between h-full'>
        <div className='flex items-center justify-start gap-3'>
          <IconRoomTemperature fontSize={22} />
          <span className='text-lg text-white font-semibold'>Temperatures</span>
        </div>
        <div className='flex flex-row items-center justify-start gap-2'>
          <IconTemperatureMax fontSize={20} />
          <span className='text-3xl text-white font-bold'>{tempmax}</span>
          <span className='text-gray-600'>máx</span>
        </div>
        <div className='flex flex-row items-center justify-start gap-2'>
          <IconTemperatureMin fontSize={20} />
          <span className='text-3xl text-white font-bold'>{tempmin}</span>
          <span className='text-gray-600'>min</span>
        </div>
      </div>
    </div>
  )
}
