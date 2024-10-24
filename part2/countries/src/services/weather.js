import axios from 'axios'

const api_key = import.meta.env.VITE_WEATHER_API_KEY

const getWeather = (lat, long) => {
	const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&appid=${api_key}`
	const request = axios.get(`${url}`)
	return request.then(response => response.data)
}

export default { getWeather }