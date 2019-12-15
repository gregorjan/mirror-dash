import { Schema, model } from 'mongoose'

import fetch from 'node-fetch'

const url = 'http://localhost:4000'

// mutation UpdateWeather {
//     updateWeather(temp: "10", description: "10", pop: "10", windSpeed: "10", maxTemp: "10", minTemp: "10") { 
//       temp
//     } 
//   }

const query = `
    {
        weather {
            temp
        }
    }
`

export const updateWeather = () => {
  fetch(url, {
    method: 'POST',
    Accept: 'api_version=2',
    'Content-Type': 'application/graphql',
    body: JSON.stringify({ query })
  })
    .then((response) => response)
    .then((data) => {
      console.log('Here is the data: ', data)
    })
}

// export const updateWeather = (): void => {
//   findWeatherParams().then(({ key, lat, lon, days }) => {
//     fetch(
//       `https://api.weatherbit.io/v2.0/forecast/daily?key=${key}&lat=${lat}&lon=${lon}&days=${days}`,
//     )
//       .then((res) => res.json())
//       .then((json) => findWeatherAndUpdate(json.data))
//   })
// }

// export const getWeather = () => {
//   return connect((disconnect) =>
//     Weather.findOne({}).exec((err, response) => disconnect(err, response)),
//   )
// }
