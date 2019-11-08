import { Component } from 'preact'

import * as S from './styled'

import { Date } from '../widgets'

export default class App extends Component {
  render() {
    return (
      <S.App>
        <S.GlobalStyle />
        <Date />
      </S.App>
    )
  }
}
