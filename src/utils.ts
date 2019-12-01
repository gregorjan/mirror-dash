interface Date {
  date: string
  time: string
}

export const getDate = (): Date => {
  const date = new Date()
  const year = date.getUTCFullYear()
  const day = date.getUTCDate()
  const month = date.getUTCMonth() + 1
  const hours = date.getUTCHours()
  const minutes = date.getUTCMinutes()

  const parsedHours = hours < 10 ? `0${hours}` : hours
  const parsedMinutes = minutes < 10 ? `0${minutes}` : minutes

  return {
    date: `${day}. ${month}. ${year}`,
    time: `${parsedHours}:${parsedMinutes}`,
  }
}
