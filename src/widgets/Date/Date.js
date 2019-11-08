import { useState, useEffect } from 'preact/hooks'
import { useSpring, config } from 'react-spring'

import * as S from './styled'

import { getDate } from '../../utils'

export const DateWidget = () => {
  const [dateTime, setDateTime] = useState(getDate())
  const [props] = useSpring(() => ({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: config.molasses,
  }))

  const dateInterval = setInterval(() => setDateTime(getDate()), 1000)

  useEffect(() => {
    return () => {
      clearInterval(dateInterval)
    }
  }, [dateInterval])

  const { date, time } = dateTime
  return (
    <S.Wrapper style={props}>
      <S.Time>{time}</S.Time>
      <S.Date>{date}</S.Date>
    </S.Wrapper>
  )
}
