import { useEffect } from 'react'
import useLocalStorage from './useLocalStorage'

export const usePersistScrollPosition = (key) => {
  const [position, setPosition] = useLocalStorage(key, 0)
  useEffect(() => {
    window.scrollTo(0, position);
    return () => {setPosition(window.scrollY)}
  }, [])
  return position
}