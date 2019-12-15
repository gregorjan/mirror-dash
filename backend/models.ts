import { model } from 'mongoose'

const Weather = model('Weather', {
  temp: String,
  minTemp: String,
  maxTemp: String,
  pop: String,
  windSpeed: String,
  description: String,
})

const WeatherParams = model('WeatherParams', {
  key: String,
  lat: String,
  lon: String,
  days: String,
})

module.exports = {
  Weather,
  WeatherParams,
}
