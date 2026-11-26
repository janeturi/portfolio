import useReveal from './usereveal'

export default function Doodle({ src, size = 100, rotate = 0, delay = 0, style }) {
  const ref = useReveal()
  return (
    <img
      ref={ref}
      className="doodle"
      src={src}
      alt=""
      aria-hidden="true"
      style={{ width: size, '--rot': `${rotate}deg`, '--d': `${delay}s`, ...style }}
    />
  )
}