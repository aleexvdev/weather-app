import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import IconSearchLocation from '../../icons/IconSearchLocation'
import IconCurrentLocation from '../../icons/IconCurrentLocation'
import { fetchLocations } from '../../api/apiweather';
import { TypeLocation } from '../../types/Type_Weather';
import IconCloseCircle from '../../icons/IconCloseCircle';

type TypeFormProps = {
  selectedCity: (city: TypeLocation) => void;
}

export const FormWeather = ( {selectedCity}: TypeFormProps ) => {

  const [search, setSearch] = useState<string>('');
  const [results, setResults] = useState<TypeLocation[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      if (search.trim().length > 0) {
        const results = await fetchLocations(search, 6);
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

  const onResetSearch = () => {
    setResults([]);
    setSearch('');
  }

  return (
    <div className='w-full relative'>
      <form onSubmit={onSubmitForm}>
        <div className='flex flex-row items-center justify-between py-2 px-3 gap-2'>
          <motion.div
            className='w-full flex flex-row items-center justify-start h-10 rounded-lg px-2 bg-white border hover:shadow-sm hover:shadow-sky-400/70'
            whileHover={{ borderColor: '#0ea5e9' }}
          >
            <IconSearchLocation 
              fontSize={30} 
              color='gray'
            />
            <div className='flex items-center justify-between'>
              <input 
                type="text" 
                className='w-full mx-2 px-1 h-8 outline-none text-black rounded-lg text-[15px]'
                placeholder='Search for places...'
                value={search}
                onChange={onChangeForm}
              />
              <div className='w-10'>
                {
                  search.length > 0 &&
                  <IconCloseCircle 
                    fontSize={20}
                    className='text-black'
                    cursor={'pointer'}
                    onClick={onResetSearch}
                  />
                }
              </div>
              
            </div>
            <button
              className='rounded-full p-1 hover:bg-slate-500/40 ml-2'
              title='My location'
            >
              <IconCurrentLocation 
                fontSize={22}
                color='gray'
                className='hover:text-black'
              />
            </button>
          </motion.div>
        </div>
        <div className='px-3 absolute z-10 w-full'>
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: results.length > 0 ? 1 : 0, y: results.length > 0 ? 0 : -10 }}
            transition={{ duration: 0.3 }}
            className='bg-white rounded-lg py-2'
          >
            {results.length > 0 &&
              results.map((city: TypeLocation) => (
                <motion.div
                  key={city.lat}
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2, delay: 0.05 * results.indexOf(city) }}
                  className='rounded-lg cursor-pointer hover:bg-[#0044ff46] py-1 px-3'
                  onClick={() => {
                    selectedCity(city);
                    setResults([]);
                    setSearch('');
                  }}
                >
                  <div className='flex items-center justify-start text-[15px]'>
                    <div className='w-10'>
                      <img 
                        src={`https://flagcdn.com/48x36/${city.country.toLowerCase()}.png`} 
                        alt={city.country} className="h-2 w-4"
                      />
                    </div>
                    <span className='w-full'>{city.name}, {city.state}</span>
                  </div>
                  
                </motion.div>
              ))}
          </motion.div>
        </div>
      </form>
    </div>
  );
}
