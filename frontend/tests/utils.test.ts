import { calcPosition } from '../src/utils'

const viewport = [1600, 900]
const grid = [16, 9]
const size = [100, 100]
const dimensions = [2, 2]

describe('calcPosition', () => {
  test('no movement', () => {
    expect(
      calcPosition([0, 0], [0, 0], viewport, grid, size, dimensions),
    ).toStrictEqual([0, 0])
  })
  test('moveX', () => {
    expect(
      calcPosition([100, 0], [0, 0], viewport, grid, size, dimensions),
    ).toStrictEqual([100, 0])
  })
  test('moveY', () => {
    expect(
      calcPosition([0, 100], [0, 0], viewport, grid, size, dimensions),
    ).toStrictEqual([0, 100])
  })
  test('move-X', () => {
    expect(
      calcPosition([-100, 0], [0, 0], viewport, grid, size, dimensions),
    ).toStrictEqual([0, 0])
  })
  test('move-Y', () => {
    expect(
      calcPosition([0, -100], [0, 0], viewport, grid, size, dimensions),
    ).toStrictEqual([0, 0])
  })
  test('movement and memo', () => {
    expect(
      calcPosition([100, -100], [-100, 100], viewport, grid, size, dimensions),
    ).toStrictEqual([0, 0])
  })
})
