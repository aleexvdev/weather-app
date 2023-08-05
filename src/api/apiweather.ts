import axios, { AxiosResponse } from 'axios';
import { TypeFetchWeather, TypeLocation } from '../types/Type_Weather';
// import { BASE_URL, API_KEY } from '../../env-config.js';

const BASE_URL='http://api.openweathermap.org'
const API_KEY='58826343e1e6a9c581865022fb62cfa3'

export const fetchLocations = async (searchCity: string, limit: number): Promise<TypeLocation[]> => {
  try {
    const response = await axios.get(`${BASE_URL}/geo/1.0/direct?q=${searchCity}&limit=${limit}&appid=${API_KEY}`);
    return response.data;
  } catch (error) { 
    console.error('Error al obtener los resultados de búsqueda:', error);
    return [];
  }
}

export const fetchWeatherData =async (lat: number, lon: number): Promise<TypeFetchWeather> => {
  try {
    const url = `${BASE_URL}/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
    const response: AxiosResponse<TypeFetchWeather> = await axios.post(url);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch weather data.');
  }
}
