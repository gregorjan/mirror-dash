import { useState } from 'preact/hooks'
import * as S from './styled'

export const DateWidget = () => {
  const [date, setDate] = useState(new Date())

  setInterval(() => setDate(new Date()), 200)

  return (
    <S.Wrapper>
      <S.Time>{date.toLocaleTimeString()}</S.Time>
      <S.Date>{date.toLocaleDateString()}</S.Date>
    </S.Wrapper>
  )
}
