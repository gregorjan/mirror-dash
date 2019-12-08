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
