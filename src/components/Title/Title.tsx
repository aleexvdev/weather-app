import React, { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { useTheme } from '../../context/ThemeContext/ThemeContext';
import IconSettings from '../../icons/IconSettings';
import { CardConfig } from '../Items/CardConfig';

interface TypeTitle {
  changeOption: (value: string) => void;
}

export const Title = ( { changeOption }: TypeTitle ) => {

  const [showCardConfig, setShowCardConfig] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const { isDarkMode, textColorContent } = useTheme();

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleClickOutside = (event: MouseEvent) => {
    if (cardRef.current && !cardRef.current.contains(event.target as Node)) {
      setShowCardConfig(false);
    }
  };

  const closeCardConfig = () => {
    setShowCardConfig(false);
  }

  return (
    <div className='relative w-full pb-2 px-3' ref={cardRef}>
      <div className='flex flex-row items-center justify-between md:justify-center'>
        <div className='flex flex-row items-center justify-center'>
          <img src={'../../../assets/svg/logo.svg'} alt={'Whater App'} className='inline-block h-16 w-16' />
          <h1 className={`md:text-2xl text-3xl font-bold ${textColorContent}`}>Whather App</h1>
        </div>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className='flex items-center justify-center md:hidden'
        >
          <IconSettings 
            fontSize={25}
            cursor={'pointer'}
            className={`${isDarkMode ? 'text-white' : 'text-[#0338a1]'}`}
            onClick={() => setShowCardConfig(!showCardConfig)}
          />
        </motion.button>
      </div>
      {showCardConfig && (
        <div
          className='absolute right-3 top-12 z-50 w-60 sm:w-36 md:hidden'
        >
          <CardConfig changeOption={changeOption} closeCardConfig={closeCardConfig} />
        </div>
      )}
    </div>
  )
}
