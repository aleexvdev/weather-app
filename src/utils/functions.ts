import { daysOfWeek, weekDays } from "../data/dataWeather";
import { TypeForescastWeather, TypeWeekDays, WeatherListItem } from "../types/Type_Weather";

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

export function secondsToTimezone(offsetSeconds: number): string {
  const hours = Math.floor(Math.abs(offsetSeconds) / 3600);
  const minutes = Math.floor((Math.abs(offsetSeconds) % 3600) / 60);
  const sign = offsetSeconds >= 0 ? '+' : '-';

  return `UTC${sign}${padNumber(hours)}:${padNumber(minutes)}`;
}

export function formatDate(timestamp: number): string {
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  const date = new Date(timestamp * 1000);
  const dayOfWeek = days[date.getDay()];
  const dayOfMonth = date.getDate();
  const monthAbbreviation = months[date.getMonth()];

  return `${dayOfWeek}, ${dayOfMonth} ${monthAbbreviation}`;
}

export const getHoursOfDay = (forecastData: WeatherListItem[], dt: number) => {
  const date = new Date(dt * 1000);
  const hoursOfDay = forecastData.filter((forecast) => {
    const forecastDate = new Date(forecast.dt * 1000);
    return forecastDate.getDate() === date.getDate();
  });
  const formattedHours = hoursOfDay.map((forecast) => {
    const forecastDate = new Date(forecast.dt * 1000);
    const hours = forecastDate.getHours();
    const minutes = forecastDate.getMinutes();
    const formattedHour = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
    return {
      timestamp: forecast.dt,
      hour: formattedHour
    };
  });

  /* formattedHours.unshift({
    timestamp: dt*1000,
    hour: 'Just now'
  }) */

  return formattedHours;
};

export const getDataByDt = (dataList: TypeForescastWeather, dt: number): WeatherListItem | null => {
  const result = dataList.list.find((item) => item.dt === dt);
  return result ? result : null;
}

function padNumber(num: number): string {
  return num.toString().padStart(2, '0');
}

export function mpsToKmph(velocidadMps: number): string {
  const velocidadKmph = (velocidadMps * 3.6).toFixed(2);
  return velocidadKmph;
}

export function getCardinalPoint(deg: number): {punto: string;} {
  const puntosCardinales = [
    { punto: "N", icono: "north" },
    { punto: "NE", icono: "northeast" },
    { punto: "E", icono: "east" },
    { punto: "SE", icono: "southeast" },
    { punto: "S", icono: "south" },
    { punto: "SW", icono: "southwest" },
    { punto: "W", icono: "west" },
    { punto: "NW", icono: "northwest" },
  ];

  const index = Math.floor(((deg % 360) + 360) % 360 / 45);
  return puntosCardinales[index];
} 

export function visionMeasurement(value: number): string {
  if (value >= 6) {
    return "Very low";
  } else if (value >= 3) {
    return "Low";
  } else if (value >= 2) {
    return "Moderate";
  } else if (value >= 1) {
    return "High";
  } else {
    return "Excellent";
  }
} 

function getNextDay (current_date: any) {
  current_date.setDate(current_date.getDate() + 1);
  var year = current_date.getFullYear();
  var month = String(current_date.getMonth() + 1).padStart(2, '0');
  var day = String(current_date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

function getSixDay (current_date: any) {
  current_date.setDate(current_date.getDate() + 5);
  var year = current_date.getFullYear();
  var month = String(current_date.getMonth() + 1).padStart(2, '0');
  var day = String(current_date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;

}

export function getFormattedData(data: WeatherListItem[]): TypeWeekDays[]|any {
  const current_date = new Date();
  var next_date = getNextDay(current_date);
  var end_date = getSixDay(current_date);
  const startDate = new Date(next_date); 
  const endDate = new Date(end_date);

  const formattedData = [];

  for (let date = startDate; date < endDate; date.setDate(date.getDate() + 1)) {
    const filteredData = data.filter((item) => {
      const itemDate = new Date(item.dt_txt);
      return itemDate.getDate() === date.getDate();
    });

    const avgTemp = filteredData.reduce((acc, item) => acc + item.main.temp, 0) / filteredData.length;
    const avgFeelsLike = filteredData.reduce((acc, item) => acc + item.main.feels_like, 0) / filteredData.length;
    const climate = filteredData[0]?.weather[0]?.description ?? 'unknown';
    const icon = filteredData[0]?.weather[0]?.icon ?? '03n';

    if (climate !== 'unknown') {
      formattedData.push({
        day: daysOfWeek[date.getDay()],
        climate,
        temp: kelvinToCelsius(avgTemp).toFixed(2), // Convert Kelvin to Celsius
        feels_like: kelvinToCelsius(avgFeelsLike).toFixed(2), // Convert Kelvin to Celsius
        icon
      });
    }
  }

  return formattedData;
}
