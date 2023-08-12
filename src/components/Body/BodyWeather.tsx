import React from 'react'
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
}
