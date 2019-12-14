import * as React from 'react'
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

import { WidgetWrapper } from '../../atoms'
import * as S from './styled'

const HELLO = gql`
  query {
    weather
  }
`;



export const Weather: React.FC = () => {
  const { loading, error, data } = useQuery(HELLO);
  console.log(loading, error, data)
  if (loading) {
    return <div>loading...</div>
  }
  if (error) {
    return <div>error...</div>
  }
  
  return (
    <WidgetWrapper location={[0, 0]} dimensions={[3, 2]}>
     {JSON.stringify(data)}
    </WidgetWrapper>
  )
}
