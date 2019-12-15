import * as React from 'react'
import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'

import { WidgetWrapper } from '../../atoms'
import * as S from './styled'

const HELLO = gql`
  query {
    weather {
      temp
      description
      pop
      windSpeed
      maxTemp
      minTemp
    }
  }
`

export const Weather: React.FC = () => {
  const { loading, error, data } = useQuery(HELLO)
  if (loading) {
    return <div>loading...</div>
  }
  if (error) {
    return <div>error...</div>
  }

  const {
    temp,
    minTemp,
    maxTemp,
    description,
    pop,
    windSpeed,
    timeStamp,
  } = data.weather

  return (
    <WidgetWrapper location={[0, 0]} dimensions={[3, 2]}>
      <div>temp: {temp}</div>
      <div>minTemp: {minTemp}</div>
      <div>maxTemp: {maxTemp}</div>
      <div>description: {description}</div>
      <div>pop: {pop}</div>
      <div>windSpeed: {windSpeed}</div>
    </WidgetWrapper>
  )
}
