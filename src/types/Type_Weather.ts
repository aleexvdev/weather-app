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
  };
  visibility: number;
  wind: {
    speed: number;
    deg: number;
    gust: number;
  };
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
