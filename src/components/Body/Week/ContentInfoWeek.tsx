import { WeatherListItem } from '../../../types/Type_Weather';
import { formatDateTxt, kelvinToCelsius } from '../../../utils/functions';
import { MoreInfoBodyWeek } from './MoreInfoBodyWeek';

interface TypeContentInfoWeek {
  data: WeatherListItem[];
  selectedHour: string;
  onHourClick: (dt: string) => void;
}
export const ContentInfoWeek = ( { data, selectedHour, onHourClick }: TypeContentInfoWeek ) => {

  if (!data || data.length === 0) {
    return <div>Loading...</div>; 
  }

  if (!selectedHour && data) {
    selectedHour = data[0].dt_txt;
  }

  const sortDataByHour = orderDataByHour(data);

  /* return (
    <div className='w-full min-h-[430px] mt-4'>
      <h2 className='mt-4 text-xl'>Highlights of the Week</h2>
        <div className='flex flex-row items-center justify-between mt-5'>
          <div className='w-[60px] min-h-[380px]'>
            <div className='flex flex-col items-center justify-center gap-4 h-full'>
              {
                sortDataByHour.map( hour => (
                  <button key={hour.dt_txt} className='text-sm bg-blue-700/80 w-12 px-2 py-1 rounded-lg' onClick={()=>onHourClick(hour.dt_txt)}>{formatHour(hour.dt_txt)}</button>
                ))
              }
            </div>
          </div>
          <div className='w-full h-full'>
            <div className='flex flex-row items-center justify-between flex-wrap gap-2'>
              { data && <MoreInfoBodyWeek data={data} selectedHour={selectedHour} /> }
            </div>
          </div>
        </div>
    </div>
  ) */
  return (
    <div className='w-full min-h-[430px] mt-4'>
      <h2 className='mt-4 text-xl'>Highlights of the Week</h2>
      <div className='flex flex-row items-center justify-between min-h-[390px]'>
        <div className='w-[60px] max-h-[410px]'>
          <div className='flex flex-col items-center justify-center gap-4'>
            {sortDataByHour.map(hour => (
              <button
                key={hour.dt_txt}
                className='text-sm bg-blue-700/80 w-12 px-2 py-1 rounded-lg'
                onClick={() => onHourClick(hour.dt_txt)}
              >
                {formatHour(hour.dt_txt)}
              </button>
            ))}
          </div>
        </div>
        <div className='w-full h-full'>
          <div className='flex flex-row items-center justify-between flex-wrap gap-2'>
            {data && <MoreInfoBodyWeek data={data} selectedHour={selectedHour} />}
          </div>
        </div>
      </div>
    </div>
  );
  
}

function orderDataByHour(data: WeatherListItem[]): WeatherListItem[] {
  return data.slice().sort((a, b) => {
    const hourA = parseInt(a.dt_txt.split(' ')[1].split(':')[0], 10);
    const hourB = parseInt(b.dt_txt.split(' ')[1].split(':')[0], 10);
    return hourA - hourB;
  });
}

const formatHour = (hour: string) => {
  const parts = hour.split(' ')[1].split(':');
  return `${parseInt(parts[0], 10)}:${parts[1]}`;
};
