import { createContext } from 'react'

export const Context = createContext({
  grid: [0, 0],
  viewport: [0, 0],
  size: [0, 0],
  canMove: false,
})
