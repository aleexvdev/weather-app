import React from 'react'
import { IconWindNorth, IconWindStatus } from '../../icons/WindStatusIcons/IconWindStatus'
import { TypeWindWProp } from '../../types/Type_Weather';
import { getCardinalPoint, mpsToKmph } from '../../utils/functions';

interface TypeWindProp {
  props: TypeWindWProp;
}
export const WindStatus = ( { props }: TypeWindProp ) => {

  const { speed, deg } = props;

  const speedkmh = mpsToKmph(speed);
  const cardinal = getCardinalPoint(deg);

  return (
    <div className='bg-slate-700/50 w-[180px] h-[135px] rounded-lg shadow-md py-3 px-4'>
      <div className='flex flex-col items-start justify-between h-full'>
        <div className='flex items-center justify-start gap-3'>
          <IconWindStatus fontSize={22} />
          <span className='text-lg text-white font-semibold'>Wind Status</span>
        </div>
        <div className='flex flex-row items-end justify-start gap-2'>
          <span className='text-3xl text-white font-bold'>{speedkmh}</span>
          <span className='text-gray-600'>km/h</span>
        </div>
        <div className='flex flex-row items-center justify-start gap-2 mt-3'>
          <IconWindNorth className='text-white' fontSize={22} />
          <span className='text-white'>{cardinal.punto} {deg}°</span>
        </div>
      </div>
    </div>
  );
};

