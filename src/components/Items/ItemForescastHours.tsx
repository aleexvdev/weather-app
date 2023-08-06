import React from 'react'

interface HoursProps {
  timestamp: number;
  hour: string;
}

interface ItemHoursProps {
  props: HoursProps;
  styled: string;
  handleBody: (timestamp: number) => void;
}

export const ItemForescastHours = ({ props, styled, handleBody }: ItemHoursProps) => {
  const { timestamp, hour } = props;
  return (
    <button key={timestamp} className={styled} onClick={() => handleBody(timestamp)}>{hour}</button>
  )
}
