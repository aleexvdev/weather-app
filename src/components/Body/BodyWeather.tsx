import React from 'react'
import { TodayBody } from './Today/TodayBody';
import { WeekBody } from './Week/WeekBody';
import { TypeFetchWeather, TypeForescastWeather } from '../../types/Type_Weather';

interface TypePropsBodyWeather {
  content: number;
  currentWeather: TypeFetchWeather;
  forescastWeather: TypeForescastWeather;
}

export const BodyWeather = ({ content, currentWeather, forescastWeather }: TypePropsBodyWeather) => {

  if (content === 0) {
    return <TodayBody data={currentWeather} forescast={forescastWeather} />
  } else {
    return <WeekBody />
  }
}
