import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
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
    <div className='w-full relative'>
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
        <div className='px-3 absolute z-10 w-full'>
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: results.length > 0 ? 1 : 0, y: results.length > 0 ? 0 : -10 }}
            transition={{ duration: 0.3 }}
            className='bg-[#2d4f8a] rounded-lg py-2 px-3'
          >
            {results.length > 0 &&
              results.map((city: TypeLocation) => (
                <motion.div
                  key={city.lat}
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2, delay: 0.05 * results.indexOf(city) }}
                  className='py-1 text-[15px] flex items-center justify-start cursor-pointer'
                  onClick={() => {
                    selectedCity(city);
                    setResults([]);
                    setSearch('');
                  }}
                >
                  <span className='w-10'>{city.country}</span>
                  <span className='w-full'>{city.name}, {city.state}</span>
                </motion.div>
              ))}
          </motion.div>
        </div>
      </form>
    </div>
  )
}
