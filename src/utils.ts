interface Date {
  day: string
  date: string
  time: string
}

const weekDays = [
  'neděle',
  'pondělí',
  'úterý',
  'středa',
  'čtvrtek',
  'pátek',
  'sobota',
]

export const getDate = (): Date => {
  const date = new Date()

  return {
    day: weekDays[date.getDay()],
    date: date.toLocaleDateString('cs-CZ', {
      day: 'numeric',
      month: 'long',
    }),
    time: date.toLocaleTimeString('cs-CZ', {
      hour: 'numeric',
      minute: 'numeric',
    }),
  }
}

export const calcPosition = (
  movement: number[],
  memo: number[],
  viewport: number[],
  grid: number[],
  size: number[],
  dimensions: number[],
): number[] => {
  return size.map((s, i) => {
    const pos =
      s * Math.round(((movement[i] + memo[i]) / viewport[i]) * grid[i])

    if (pos < 0) {
      return 0
    }

    if (pos + size[i] * dimensions[i] > viewport[i]) {
      return viewport[i] - size[i] * dimensions[i]
    }
    return pos
  })
}
