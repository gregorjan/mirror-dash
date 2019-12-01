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

  const { date, time } = dateTime
  return (
    <WidgetWrapper>
      <S.Time>{time}</S.Time>
      <S.Date>{date}</S.Date>
    </WidgetWrapper>
  )
}
