import { useState, useEffect } from 'react'

export function useAnimation() {
  const [isAnimating, setIsAnimating] = useState(false)
  const [animationSpeed, setAnimationSpeed] = useState(1)

  useEffect(() => {
    if (isAnimating) {
      const root = document.documentElement
      root.style.setProperty('--animation-speed', `${3 / animationSpeed}s`)
    }
  }, [animationSpeed, isAnimating])

  const toggleAnimation = () => {
    setIsAnimating(!isAnimating)
  }

  const changeSpeed = (speed) => {
    setAnimationSpeed(speed)
  }

  return {
    isAnimating,
    animationSpeed,
    toggleAnimation,
    changeSpeed
  }
}