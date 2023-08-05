import { HoursData, TabsData, WeeksData } from "../types/Type_Weather";

export const weeks: WeeksData[] = [
  {
    "day": "Sun",
    "climate": "nublado",
    "climate_celsius": 5,
    "feels_like_celsius": 7
  },
  {
    "day": "Mon",
    "climate": "soleado",
    "climate_celsius": 20,
    "feels_like_celsius": 22
  },
  {
    "day": "Tue",
    "climate": "lluvioso",
    "climate_celsius": 15,
    "feels_like_celsius": 13
  },
  {
    "day": "Wed",
    "climate": "nublado",
    "climate_celsius": 18,
    "feels_like_celsius": 19
  },
  {
    "day": "Thu",
    "climate": "ventoso",
    "climate_celsius": 14,
    "feels_like_celsius": 11
  },
  {
    "day": "Fri",
    "climate": "lluvioso",
    "climate_celsius": 12,
    "feels_like_celsius": 9
  },
  {
    "day": "Sat",
    "climate": "parcialmente nublado",
    "climate_celsius": 21,
    "feels_like_celsius": 23
  }
];

export const tabs: TabsData[] = [
  {
    "title": "Today",
  },
  {
    "title": "Week",
  }
]; 

export const hours: HoursData[] = [
  {
    hour: "6:00"
  },
  {
    hour: "9:00"
  },
  {
    hour: "12:00"
  },
  {
    hour: "15:00"
  },
  {
    hour: "18:00"
  },
  {
    hour: "21:00"
  }
];

export const hours_justnow: HoursData[] = [
  {
    hour: "Just Now"
  },
  {
    hour: "6:00"
  },
  {
    hour: "9:00"
  },
  {
    hour: "12:00"
  },
  {
    hour: "15:00"
  },
  {
    hour: "18:00"
  },
  {
    hour: "21:00"
  }
];

export const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
export const months = [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

