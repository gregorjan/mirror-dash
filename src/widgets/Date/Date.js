import { useState, useEffect } from 'preact/hooks'
import { useSpring, interpolate } from 'react-spring'
import { add } from 'vec-la'
import { useDrag } from 'react-use-gesture'

import * as S from './styled'

import { getDate } from '../../utils'

//TODO snap to real grid
const round = (arr) => arr.map((number) => (number / 100).toFixed(0) * 100)

export const DateWidget = () => {
  const [{ pos }, set] = useSpring(() => ({
    pos: [0, 0],
    config: { mass: 5, tension: 500, friction: 100 },
  }))

  const bind = useDrag(({ down, movement, memo = pos.getValue() }) => {
    set({
      pos: down ? add(movement, memo) : round(add(movement, memo)),
    })
    return memo
  })

  const [dateTime, setDateTime] = useState(getDate())
  const dateInterval = setInterval(() => setDateTime(getDate()), 1000)

  useEffect(() => {
    return () => {
      clearInterval(dateInterval)
    }
  }, [dateInterval])

  const { date, time } = dateTime
  return (
    <S.Wrapper
      {...bind()}
      style={{
        transform: interpolate(
          [pos],
          ([x, y]) => `translate3d(${x}px,${y}px,0)`,
        ),
      }}
    >
      <S.Time>{time}</S.Time>
      <S.Date>{date}</S.Date>
    </S.Wrapper>
  )
}
