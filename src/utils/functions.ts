import { weekDays } from "../data/dataWeather";
import { TypeForescastWeather, TypeWeekDays, WeatherListItem } from "../types/Type_Weather";

export function kelvinToCelsius(kelvin: number): number {
  const celsius = kelvin - 273.15;
  return celsius;
}

export function kelvinToFahrenheit(kelvin: number): number {
  const fahrenheit = (kelvin - 273.15) * (9 / 5) + 32;
  return fahrenheit;
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
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  const date = new Date(timestamp * 1000);
  const dayOfWeek = days[date.getDay()];
  const dayOfMonth = date.getDate();
  const monthAbbreviation = months[date.getMonth()];

  return `${dayOfWeek}, ${dayOfMonth} ${monthAbbreviation}`;
}

export function formatDateTxt(dateString: string): string {
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  const date = new Date(dateString);
  const dayOfWeek = days[date.getDay()];
  const dayOfMonth = date.getDate();
  const monthAbbreviation = months[date.getMonth()];

  return `${dayOfWeek}, ${dayOfMonth} ${monthAbbreviation}`;
}

export const getHoursOfDay = (forecastData: WeatherListItem[], dt: number): {timestamp:number,hour:string,dt_txt:string}[] => {
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
      hour: formattedHour,
      dt_txt: forecast.dt_txt
    };
  });

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


export function findWeatherDataByDate(data: WeatherListItem[], dateTxt: string|null): { timestamp: number; hour: string; dt_txt: string; }[] {
  if (dateTxt !== null) {
    const dt_txyparams = dateTxt.split(' ')[0];
    const filteredData = data.filter((item) => item.dt_txt.includes(dt_txyparams));
    const resultArray = filteredData.map((item) => {
      const timestamp = item.dt;
      const hour = item.dt_txt.split(' ')[1].slice(0, 5);
      return { timestamp: timestamp, hour: hour.toString(), dt_txt: item.dt_txt };
    });
    return resultArray;
  }
  return [];
}

export const getDataByDtText = (dataList: TypeForescastWeather, dttext: string|undefined): WeatherListItem | null => {
  const result = dataList.list.find((item) => item.dt_txt === dttext);
  return result ? result : null;
}

export function formatDateWeek(timestamp: string): string {
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  if (timestamp !== '0000-00-00 00:00:00') {
    const date = new Date(timestamp);
    const dayOfWeek = days[date.getDay()];
    const dayOfMonth = date.getDate();
    const monthAbbreviation = months[date.getMonth()];

    return `${dayOfWeek}, ${dayOfMonth} ${monthAbbreviation}`;
  }

  return 'Data not found';
  
}

function formatDateToISO(date: Date): string {
  // const date = new Date(dateString);
  const year = date.getFullYear().toString().padStart(4, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');
  const formattedDate = `${year}-${month}-${day} 12:00:00`;
  return formattedDate;
}

export function getDayNameInEnglish(dateString: string): string {
  const daysInEnglish = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  const date = new Date(dateString);
  const dayIndex = date.getDay();

  return daysInEnglish[dayIndex];
}

export function getDayNameAbrevInEnglish(dateString: string): string {
  const daysInEnglish = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const date = new Date(dateString);
  const dayIndex = date.getDay();

  return daysInEnglish[dayIndex];
}

export function getArrayForecastDays(data: WeatherListItem[]): TypeWeekDays[] | any {
  const formattedData: TypeWeekDays[] = [];

  for (const item of data) {
    const date_format = formatDateToISO(new Date(item.dt * 1000));

    // Verificar si ya hemos agregado datos para esta fecha
    const existingData = formattedData.find(entry => entry.dttext === date_format);
    
    if (!existingData) {
      const dateletter = getDayNameInEnglish(date_format);
      const dateletterabrev = getDayNameAbrevInEnglish(date_format);
      formattedData.push({
        dayweek: dateletter,
        dayweekabrev: dateletterabrev,
        climate: item.weather[0].description,
        temp: kelvinToCelsius(item.main.temp).toFixed(2),
        feelslike: kelvinToCelsius(item.main.feels_like).toFixed(2),
        icon: item.weather[0].icon,
        dt: item.dt,
        dttext: date_format
      });
    }
  }

  return formattedData.length > 0 ? formattedData : [{}];
}


export function getDataTimestampWeek(data: WeatherListItem[], timestamp: string): WeatherListItem[] {
  const targetDate = new Date(timestamp);
  const targetDay = targetDate.getDate();
  const targetMonth = targetDate.getMonth()+1;
  const targetYear = targetDate.getFullYear();

  const filteredData = data.filter(item => {
    const itemDate = new Date(item.dt*1000);
    const itemDay = itemDate.getDate();
    const itemMonth = itemDate.getMonth()+1;
    const itemYear = itemDate.getFullYear();

    return (
      itemDay === targetDay &&
      itemMonth === targetMonth &&
      itemYear === targetYear 
    )
  });

  return filteredData;
}

export const getHoursOfDayTxt = (forecastData: WeatherListItem[], dt: string): {timestamp:number,hour:string,dt_txt:string}[] => {
  const date = new Date(dt);
  const hoursOfDay = forecastData.filter((forecast) => {
    const forecastDate = new Date(forecast.dt_txt);
    return forecastDate.getDate() === date.getDate();
  });
  const formattedHours = hoursOfDay.map((forecast) => {
    const forecastDate = new Date(forecast.dt_txt);
    const hours = forecastDate.getHours();
    const minutes = forecastDate.getMinutes();
    const formattedHour = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
    return {
      timestamp: forecast.dt,
      hour: formattedHour,
      dt_txt: forecast.dt_txt
    };
  });

  return formattedHours;
};
