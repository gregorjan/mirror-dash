import { useState, useEffect } from 'preact/hooks'

import { WidgetWrapper } from '../../atoms'
import * as S from './styled'

import { getDate } from '../../utils'

export const DateWidget = () => {
  const [dateTime, setDateTime] = useState(getDate())
  const dateInterval = setInterval(() => setDateTime(getDate()), 1000)

  useEffect(() => {
    return () => {
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
