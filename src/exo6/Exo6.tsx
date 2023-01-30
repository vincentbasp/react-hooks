import { useEffect, useState } from "react";

export const Exo6 = () => {
    const [count, setCount] = useState<number>(0)
    const handleClick = () => setCount(prevCount => prevCount + 1)

    useEffect(() => {
      const timer = window.setInterval(() => {
        setCount(prevCount => prevCount + 1)
      }, 1000)
      return () => {
        clearInterval(timer)
      }
    }, [])

    useEffect(() => {
      document.title = `Compteur ${count}`
    }, [count])

    return <button onClick={handleClick}>Incrémenter {count}</button>
  }