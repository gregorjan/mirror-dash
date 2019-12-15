export const typeDefs = `
  type Weather {
    temp: String!
    description: String!
    pop: String!
    windSpeed: String!
    maxTemp: String!
    minTemp: String!
  }

    type WeatherParams {
    key: String!
    lat: String!
    lon: String!
    days: String!
  }

  type Query {
    weather: Weather!
    weatherParams: WeatherParams!
  }

  type Subscription {
    weatherParams: WeatherParams!
    weather: Weather!
  }

  type Mutation {
    updateWeather(temp: String! description: String! pop: String! windSpeed: String! maxTemp: String! minTemp: String!): Weather!
    deleteWeather(id: ID!): Boolean!

    updateWeatherParams(key: String! lat: String! lon: String! days: String!): WeatherParams!
    deleteWeatherParams(id: ID!): Boolean!
  }
`;




