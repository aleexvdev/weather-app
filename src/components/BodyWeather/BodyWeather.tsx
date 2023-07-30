import React from 'react'
import { TodayBody } from './TodayBody';
import { WeekBody } from './WeekBody';

interface TypePropsBodyWeather {
  content: number;
}

export const BodyWeather = ({ content }: TypePropsBodyWeather) => {

  if (content === 0) {
    return <TodayBody />
  } else {
    return <WeekBody />
  }
}
