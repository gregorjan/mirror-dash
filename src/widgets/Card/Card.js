import { useSpring } from 'react-spring'

import { Wrapper, Image } from './styled'

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2]
const trans1 = (x, y) => `translate3d(${x / 10 - 200}px,${y / 10 - 120}px,0)`
const trans2 = (x, y) => `translate3d(${x / 8 + 120}px,${y / 8 - 73}px,0)`
const trans3 = (x, y) => `translate3d(${x / 6 + 60}px,${y / 6 + 25}px,0)`
const trans4 = (x, y) => `translate3d(${x / 3.5 - 5}px,${y / 3.5 + 48}px,0)`
const trans5 = (x, y) => `translate3d(${x / 2}px,${y / 2}px,0)`

export const Card = () => {
  const [props, set] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 120, tension: 400, friction: 140 },
  }))
  return (
    <Wrapper
      onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}
    >
      <Image
        color={'blue'}
        size={20}
        style={{ transform: props.xy.interpolate(trans1) }}
      />
      <Image
        color={'red'}
        size={40}
        style={{ transform: props.xy.interpolate(trans2) }}
      />
      <Image
        color={'cornflowerblue'}
        size={60}
        style={{ transform: props.xy.interpolate(trans3) }}
      />
      <Image
        color={'gray'}
        size={80}
        style={{ transform: props.xy.interpolate(trans4) }}
      />
      <Image
        color={'purple'}
        size={25}
        style={{ transform: props.xy.interpolate(trans5) }}
      />
    </Wrapper>
  )
}
