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

const createWeatherParams = () => {
  return connect((disconnect) => {
    const NewParams = new WeatherParameters({
      _id: new Types.ObjectId(),
      key: '', //weatherbit.io key
      lat: '',
      lon: '',
      days: '',
    })
    NewParams.save((err, response) => disconnect(err, response))
  })
}

const findWeatherParams = () => {
  return connect((disconnect) =>
    WeatherParameters.findOne({}).exec((err, response) =>
      disconnect(err, response),
    ),
  )
}

export const updateWeather = (): void => {
  findWeatherParams().then(({key, lat, lon, days}) => {
    fetch(
        `https://api.weatherbit.io/v2.0/forecast/daily?key=${key}&lat=${lat}&lon=${lon}&days=${days}`,
      )
        .then((res) => res.json())
        .then((json) => console.log(json.data))
  })
}
