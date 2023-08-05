import { months, weekDays } from "../data/dataWeather";

export function kelvinToCelsius(kelvin: number): number {
  const celsius = kelvin - 273.15;
  return celsius;
}

export function formatUnixTimestamp(timestamp: number, timezone: number): [string, string] {
  const date = new Date(timestamp*1000);
  const dayOfWeek = weekDays[date.getDay()];
  const horaEnMilisegundos = date.getTime() + timezone * 1000;
  const horaConOffset = new Date(horaEnMilisegundos);
  const horas = horaConOffset.getUTCHours().toString().padStart(2, '0');
  const minutos = horaConOffset.getUTCMinutes().toString().padStart(2, '0');
  const formattedTime = `${horas}:${minutos}`;
  return [dayOfWeek, formattedTime];
}
