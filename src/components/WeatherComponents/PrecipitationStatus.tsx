import React from 'react'
import { IconPrecipitationSnow, IconPrecipitationStatus } from '../../icons/PrecipitationIcons/IconPrecipitationStatus'
import { TypeRainWProp, TypeSnowWProp } from '../../types/Type_Weather';

interface TypePrecipitationProp {
  rain: TypeRainWProp;
  snow: TypeSnowWProp;
}

interface TypeRain {
  value: string;
  time: number;
}

interface TypeSnow {
  value: string;
  time: number;
}

export const PrecipitationStatus = ( { rain, snow }: TypePrecipitationProp ) => {

  const datarain: TypeRain[] = rain!==undefined ? [{value: `${rain[1]} mm`, time: 1}] : [{value: 'Not available', time: 0}];
  const datasnow: TypeSnow[] = snow!==undefined ? [{value: `${snow[0]} mm`, time: 1}] : [{value: 'Not available', time: 0}];

  return (
    <div className='bg-slate-700/50 w-[180px] h-[135px] rounded-lg shadow-md py-3 px-4'>
      <div className='flex flex-col items-start justify-between h-full'>
        <div className='flex items-center justify-start gap-3'>
          <IconPrecipitationStatus fontSize={22} />
          <span className='text-lg text-white font-semibold'>Precipitation</span>
        </div>
        <div className='flex flex-row items-center justify-start gap-2'>
          <span className='text-lg text-white font-bold'>{datarain[0].value}</span>
          <span className='text-gray-600 text-sm'>{datarain[0].time ? `${datarain[0].time} hour` : ''}</span>
        </div>
        <div className='flex flex-row items-center justify-start gap-2 mt-3'>
          <IconPrecipitationSnow className='text-white' />
          <span className='text-white'>{datasnow[0].value ? `${datarain[0].value}` : ''}</span>
        </div>
      </div>
      
    </div>
  )
}
