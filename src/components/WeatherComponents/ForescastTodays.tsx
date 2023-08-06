import React from 'react'
import { ItemDayWeather } from '../Items/ItemDayWeather'
import { TypeWeekDays } from '../../types/Type_Weather';

interface TypeForescastTodays {
  data: TypeWeekDays[];
}

export const ForescastTodays = ( { data }: TypeForescastTodays ) => {

  const weeksdata = data;

  return (
    <div className='w-full'>
      <div className='my-1'>
        {
          weeksdata ? 
          (
            <div className='flex flex-row items-center justify-between py-3'>
              {
                weeksdata.map( week => (
                  <ItemDayWeather props={week} />
                ))
              }
            </div>
          ) :
          (
            <div>Loadding</div>
          )
        }
      </div>
    </div>
  )
}
