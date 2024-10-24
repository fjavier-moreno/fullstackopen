import { useState, useEffect } from 'react'
import weatherService from '../services/weather'
import Notification from './Notification'

const Weather = ({ lat, long }) => {
	const [weather, setWeather] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null)

  useEffect(() => {
    weatherService
      .getWeather(lat, long)
      .then(response => {
        setWeather(response)
      })
      .catch(error => {
        setErrorMessage(`Error getting weather: ${error.message}`)
      })
  }, [lat, long])

	if (errorMessage) {
		return (
			<Notification message={errorMessage} />
		)
	}

	if (!weather) {
    return <div>Loading weather data...</div>
  }

const icon = weather.weather[0]
	return (
    <div>
      <h2>Weather in {weather.name}</h2>
      <p>Temperature: {weather.main.temp} Celsius</p>
			<img src={`https://openweathermap.org/img/wn/${icon.icon}@2x.png`} alt={icon.description} />
      <p>Wind: {weather.wind.speed} m/s</p>
    </div>
  )
}

export default Weather