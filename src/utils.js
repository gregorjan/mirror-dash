export const getDate = () => {
  const date = new Date()
  const year = date.getUTCFullYear()
  const day = date.getUTCDate()
  const month = date.getUTCMonth() + 1
  let hours = date.getUTCHours()
  let minutes = date.getUTCMinutes()

  minutes = minutes < 10 ? `0${minutes}` : minutes
  hours = hours < 10 ? `0${hours}` : hours

  return { date: `${day}. ${month}. ${year}`, time: `${hours}:${minutes}` }
}

export const calcCursorPosition = (x, y) => [
  x - window.innerWidth / 2,
  y - window.innerHeight / 2,
]

export const Planetoids = [
  {
    key: '1',
    color: 'red',
    translate: (x, y) => `translate3d(${x / 2 + 25}px,${y / 2 - 160}px,0)`,
    size: 15,
  },
  {
    key: '2',
    color: 'cornflowerblue',
    translate: (x, y) => `translate3d(${x / 3.2 - 80}px,${y / 3.2 + 95}px,0)`,
    size: 25,
  },
  {
    key: '3',
    color: 'darksalmon',
    translate: (x, y) => `translate3d(${x / 3.9 + 269}px,${y / 3.9 - 362}px,0)`,
    size: 30,
  },
  {
    key: '4',
    color: 'burlywood',
    translate: (x, y) => `translate3d(${x / 4.7 - 320}px,${y / 4.7 + 240}px,0)`,
    size: 40,
  },
  {
    key: '5',
    color: 'brown',
    translate: (x, y) => `translate3d(${x / 5.1 + 220}px,${y / 5.1 + 160}px,0)`,
    size: 55,
  },
  {
    key: '6',
    color: 'mediumslateblue',
    translate: (x, y) => `translate3d(${x / 5.8 + 395}px,${y / 5.8 - 26}px,0)`,
    size: 60,
  },
  {
    key: '7',
    color: 'plum',
    translate: (x, y) => `translate3d(${x / 6.2 - 600}px,${y / 6.2 - 123}px,0)`,
    size: 70,
  },
]
