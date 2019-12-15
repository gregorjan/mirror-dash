import mongoose, { Schema, model, Types } from 'mongoose'

import { connect } from './utils'
import fetch from 'node-fetch'

const WeatherParamsSchema = new Schema({
  key: String,
  lat: String,
  lon: String,
  days: String,
})

const WeatherParameters = model('WeatherParameters', WeatherParamsSchema)

const WeatherSchema = new Schema({
  temp: String,
  min_temp: String,
  max_temp: String,
  pop: String,
  wind_spd: String,
  description: String,
})

const Weather = model('Weather', WeatherSchema)

const createWeatherParams = () => {
  return connect((disconnect) => {
    WeatherParameters.findOneAndUpdate(
      {},
      {
        key: '', //weatherbit.io key
        lat: '',
        lon: '',
        days: '',
      },
      {
        upsert: true,
      },
    ).exec((err, response) => disconnect(err, response))
  })
}

const findWeatherParams = () => {
  return connect((disconnect) =>
    WeatherParameters.findOne({}).exec((err, response) =>
      disconnect(err, response),
    ),
  )
}

const formatWeather = ([
  {
    temp,
    min_temp,
    max_temp,
    pop,
    wind_spd,
    weather: { description },
  },
]) => ({ temp, min_temp, max_temp, pop, wind_spd, description })

const findWeatherAndUpdate = (data) => {
  return connect((disconnect) => {
    return Weather.findOneAndUpdate(
      {},
      formatWeather(data),
      {
        upsert: true,
      },
    ).exec((err, response) => disconnect(err, response))
  })
}

export const updateWeather = (): void => {
  findWeatherParams().then(({ key, lat, lon, days }) => {
    fetch(
      `https://api.weatherbit.io/v2.0/forecast/daily?key=${key}&lat=${lat}&lon=${lon}&days=${days}`,
    )
      .then((res) => res.json())
      .then((json) => findWeatherAndUpdate(json.data))
  })
}
