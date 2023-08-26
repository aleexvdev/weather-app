/* import React from 'react'
import { TodayBody } from './Today/TodayBody';
import { WeekBody } from './Week/WeekBody';
import { TypeFetchWeather, TypeForescastWeather } from '../../types/Type_Weather';

interface TypePropsBodyWeather {
  content: number;
  currentWeather: TypeFetchWeather;
  forescastWeather: TypeForescastWeather;
  optionDegree: string;
}

export const BodyWeather = ({ content, currentWeather, forescastWeather, optionDegree }: TypePropsBodyWeather) => {

  if (content === 0) {
    return <TodayBody data={currentWeather} forescast={forescastWeather} optionDegree={optionDegree} />
  } else {
    return <WeekBody forescast={forescastWeather} optionDegree={optionDegree} />
  }

} */
import React, { useState, useEffect } from 'react';
import { TodayBody } from './Today/TodayBody';
import { WeekBody } from './Week/WeekBody';
import { TypeFetchWeather, TypeForescastWeather } from '../../types/Type_Weather';
import { Loading } from '../Loader/Loading';

interface TypePropsBodyWeather {
  content: number;
  currentWeather: TypeFetchWeather;
  forescastWeather: TypeForescastWeather;
  optionDegree: string;
}

export const BodyWeather = ({ content, currentWeather, forescastWeather, optionDegree }: TypePropsBodyWeather) => {

  const styleapp = "md:w-[830px] md:h-[582px] mt-5";
  const nameapp = content === 0 ? "today's data" : "week data" ;
  const [isLoading, setIsLoading] = useState(true);
  const [renderComponent, setRenderComponent] = useState<JSX.Element | null>(<Loading name={nameapp} styles={styleapp} />);
  
  useEffect(() => {
    setIsLoading(true);
    const loadingTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Wait 3 seconds before setting isLoading to false

    const dataTimeout = setTimeout(() => {
      if (content === 0) {
        setRenderComponent(
          <TodayBody data={currentWeather} forescast={forescastWeather} optionDegree={optionDegree} />
        );
      } else {
        setRenderComponent(
          <WeekBody forescast={forescastWeather} optionDegree={optionDegree} />
        );
      }
    }, 1000); // Wait 5 seconds (3 seconds loading + 2 seconds data)

    return () => {
      clearTimeout(loadingTimeout);
      clearTimeout(dataTimeout);
    };
  }, [content, currentWeather, forescastWeather, optionDegree]);

  return isLoading ? <Loading name={nameapp} styles={styleapp} /> : renderComponent;
}

