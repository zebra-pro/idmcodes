import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const ScrollToTop = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // for smooth scrolling, use 'auto' for instant jump
    })
  }, [pathname])

  return null
}

export default ScrollToTop
