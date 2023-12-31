import React from 'react'

interface HoursProps {
  timestamp: number;
  hour: string;
  dt_txt: string;
}

interface ItemHoursProps {
  props: HoursProps;
  styled: string;
  handleBody: (timestamp: number, dtt_txt: string) => void;
  stateTimestamp: number;
}

export const ItemForescastHours = ({ props, styled, handleBody, stateTimestamp }: ItemHoursProps) => {
  const { timestamp, hour, dt_txt } = props;
  return (
    <button key={timestamp} className={styled} onClick={() => handleBody(timestamp, dt_txt)}>{hour}</button>
  )
}
