import React, { useState, useEffect } from 'react'
import IconSearchLocation from '../../icons/IconSearchLocation'
import IconCurrentLocation from '../../icons/IconCurrentLocation'
import { fetchLocations } from '../../api/apiweather';
import { TypeLocation } from '../../types/Type_Weather';

type TypeFormProps = {
  selectedCity: (city: TypeLocation) => void;
}

export const FormWeather = ( {selectedCity}: TypeFormProps ) => {

  const [search, setSearch] = useState<string>('');
  const [results, setResults] = useState<TypeLocation[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      if (search.trim().length > 0) {
        const results = await fetchLocations(search, 5); // Limitamos a 5 resultados
        setResults(results);
      } else {
        setResults([]);
      }
    };

    fetchData();
  }, [search])
  

  const onChangeForm = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = evt.target;
    setSearch(value);
  }

  const onSubmitForm = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
  }


  return (
    <div className='w-full'>
      <form onSubmit={onSubmitForm}>
        <div className='flex flex-row items-center justify-between py-2 px-3 gap-2'>
          <div className='w-full flex flex-row items-center justify-start h-10 rounded-lg px-2 bg-white'>
            <IconSearchLocation 
              fontSize={22} 
              color='black'
            />
            <input 
              type="text" 
              className='w-full mx-2 px-1 h-8 outline-none text-black rounded-lg text-[15px]'
              placeholder='Search for places...'
              value={search}
              onChange={onChangeForm}
            />
            <button
              className='bg-slate-500/80 rounded-full p-1'
            >
              <IconCurrentLocation 
                fontSize={22}
              />
            </button>
          </div>
        </div>
        <div className='px-3'>
          <div className='bg-black rounded-lg py-2 px-3'>
            {
              (results.length > 0) &&
                results.map((city: TypeLocation) => (
                  <div key={city.lat} className='py-1 text-[15px] flex items-center justify-start' onClick={()=>selectedCity(city)}>
                    <span className='w-10'>{city.country}</span>
                    <span>{city.name}, {city.state}</span>
                  </div>
                )
              )
            }
          </div>
          
        </div>
      </form>
    </div>
  )
}
