import axios from 'axios'

const URL = 'https://api.openweathermap.org/data/2.5/weather'
const API_KEY = '0016478d7bc3fcaa5e0fa51ac74dc55e'

export const fetchWeather = async (query) => {
  const {data} = await axios.get(URL, {
    params: {
      q: query,
      units:'metric',
      APPID: API_KEY
    }
  })
  return data
}
