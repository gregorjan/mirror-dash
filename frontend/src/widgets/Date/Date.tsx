import * as React from 'react'

import { WidgetWrapper } from '../../atoms'
import * as S from './styled'

import { getDate } from '../../utils'

export const Date: React.FC = () => {
  const [dateTime, setDateTime] = React.useState(getDate())
  const dateInterval = setInterval(() => setDateTime(getDate()), 1000)

  React.useEffect(() => {
    return (): void => {
      clearInterval(dateInterval)
    }
  }, [dateInterval])

  const { day, date, time } = dateTime
  return (
    <WidgetWrapper location={[13, 0]} dimensions={[3, 2]}>
      <S.Time>{time}</S.Time>
      <S.Day>{day}</S.Day>
      <S.Date>{date}</S.Date>
    </WidgetWrapper>
  )
}
