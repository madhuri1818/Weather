import axios from 'axios';
const URL = "https://api.openweathermap.org/data/2.5/weather";
const API_KEY = "e5f06f182e580fa11611dd107cac8137";
export const fetchData = async (query) => {
  try {
    const { data } = await axios.get(URL, {
      params: {
        q: query,
        units: 'metric',
        apiKey: API_KEY,
      }
    });
    return data;
  } catch (error) {
    throw error;
  }
};
