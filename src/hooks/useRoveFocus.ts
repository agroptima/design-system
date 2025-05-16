import { useCallback, useEffect, useState } from 'react'
import { type FocusableElement } from '../atoms/Select/Select'
import { KEY_CODES } from '../utils/manageKeyboardActions'

function useRoveFocus(focusableElements: FocusableElement[]) {
  const [isActive, setIsActive] = useState(false)
  const [currentFocus, setCurrentFocus] = useState(isActive ? 0 : -1)
  const size = focusableElements?.length
  console.log('size: ', size, isActive, currentFocus)

  const handleKeyDown = useCallback(
    (e: any) => {
      if (!isActive) return

      if (size) {
        if (e.keyCode === KEY_CODES.DOWN_ARROW) {
          e.preventDefault()
          setCurrentFocus(currentFocus === size - 1 ? 0 : currentFocus + 1)
        } else if (e.keyCode === KEY_CODES.UP_ARROW) {
          e.preventDefault()
          setCurrentFocus(currentFocus === 0 ? size - 1 : currentFocus - 1)
        }
      }
    },
    [size, currentFocus, setCurrentFocus, isActive],
  )

  useEffect(() => {
    if (!isActive) return

    document.addEventListener('keydown', handleKeyDown, false)
    return () => {
      document.removeEventListener('keydown', handleKeyDown, false)
    }
  }, [handleKeyDown, isActive])

  return {
    currentFocus,
    setCurrentFocus,
    focusableElements,
    isActive,
    setIsActive,
  }
}

export default useRoveFocus
