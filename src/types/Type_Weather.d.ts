export type WeeksData = {
  day: string;
  climate: string;
  climate_celsius: number;
  feels_like_celsius: number;
}

export type HoursData = {
  hour: string;
}

export type TabsData = {
  title: string;
}

export type TypeSocialNetworks = {
  id: number;
  social_network: string;
  url: string;
}

export type TypeLocation = {
  name: string;
  lat: number;
  lon: number;
  country: string;
  state: string;
}

export type TypeFetchWeather = {
  coord: {
    lon: number;
    lat: number;
  };
  weather: {
    id: number;
    main: string;
    description: string;
    icon: string;
  }[];
  base: string;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
    sea_level: number;
    grnd_level: number;
    temp_kf: number | null;
  };
  visibility: number;
  wind: {
    speed: number;
    deg: number;
    gust: number;
  };
  rain: {
    "1h": number | null;
    "3h": number | null;
  }[];
  snow: {
    "1h": number | null;
    "3h": number | null;
  }[];
  clouds: {
    all: number;
  };
  dt: number;
  sys: {
    country: string;
    sunrise: number;
    sunset: number;
  };
  timezone: number;
  id: number;
  name: string;
  cod: number;
}

export type TypeFetchWeatherMain = {
  description: string;
  icon: string;
  temp: number;
  feels_like: number;
  dt: number;
  timezone: number;
}

export type TypeResultsProps = {
  weatherData: TypeFetchWeatherMain | undefined;
}

export type WeatherListItem = {
  dt: number;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    sea_level: number;
    grnd_level: number;
    humidity: number;
    temp_kf: number;
  };
  weather: {
    id: number;
    main: string;
    description: string;
    icon: string;
  }[];
  clouds: {
    all: number;
  };
  wind: {
    speed: number;
    deg: number;
    gust: number;
  };
  rain: {
    "1h": number | null;
    "3h": number | null;
  }[];
  snow: {
    "1h": number | null;
    "3h": number | null;
  }[];
  visibility: number;
  pop: number;
  sys: {
    pod: string;
  };
  dt_txt: string;
}

export type TypeCityInfo = {
  id: number;
  name: string;
  coord: {
    lat: number;
    lon: number;
  };
  country: string;
  population: number;
  timezone: number;
  sunrise: number;
  sunset: number;
}

export type TypeForescastWeather = {
  cod: string;
  message: number;
  cnt: number;
  list: WeatherListItem[];
  city: TypeCityInfo;
}

export type TypeDataWeather = {
  current: TypeFetchWeather;
  forecast: TypeForescastWeather;
}

export type TypeWeatherResponseData = {
  data: TypeDataWeather;
  status: number;
  message: string;
}

export type TypeMainWProp = {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  sea_level: number;
  grnd_level: number;
  humidity: number;
  temp_kf: number | null;
}

export type TypeWindWProp = {
  speed: number;
  deg: number;
  gust: number;
}

export type TypeWeatherWProp = {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export type TypeRainWProp = {
  "1h": number | null;
  "3h": number | null;
}[]

export type TypeSnowWProp = {
  "1h": number | null;
  "3h": number | null;
}[]

export type TypeWeekDays = {
  dayweek: string;
  dayweekabrev: string;
  climate: string;
  temp: string;
  feelslike: string;
  icon: string;
  dt: number;
  dttext: string;
}