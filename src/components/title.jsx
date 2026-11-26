import useReveal from './usereveal'

export default function Title({ children }) {
  const ref = useReveal()
  return <h2 ref={ref} className="title">{children}</h2>
}