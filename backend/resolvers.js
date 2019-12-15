import { WeatherParams, Weather } from './models'

export const resolvers = {
  Subscription: {
    weather: {
      subscribe: (_, {}, { pubsub }) => {
        return pubsub.asyncIterator('newWeather')
      },
    },
    weatherParams: {
      subscribe: (_, {}, { pubsub }) => {
        return pubsub.asyncIterator('weatherParams')
      },
    },
  },

  Query: {
    weather: () => Weather.findOne({}),
    weatherParams: () => WeatherParams.findOne({}),
  },

  Mutation: {
    updateWeather: async (
      _,
      { temp, description, pop, windSpeed, maxTemp, minTemp },
    ) => {
      return await Weather.findOneAndUpdate(
        {},
        {
          temp,
          description,
          pop,
          windSpeed,
          maxTemp,
          minTemp,
        },
        {
          upsert: true,
          new: true,
        },
      )
    },
    deleteWeather: async () => {
      Weather.findOneAndDelete({})
    },

    updateWeatherParams: async (_, { key, lat, lon, days }, { pubsub }) => {
      const weatherParams = await WeatherParams.findOneAndUpdate(
        {},
        {
          key,
          lat,
          lon,
          days,
        },
        {
          upsert: true,
          new: true,
        },
      )
      pubsub.publish('WeatherParams', { WeatherParams: weatherParams })
      return weatherParams
    },
    deleteWeatherParams: async () => {
      WeatherParams.findOneAndDelete({})
    },
  },
}
