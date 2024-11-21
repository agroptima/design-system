import type { RefObject } from 'react'
import { useEffect } from 'react'

function useOutsideClick(
  ref: RefObject<HTMLElement | null>,
  callback: () => void,
) {
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      const target = event.target as Node
      if (!target || !target.isConnected) return

      const isOutside = ref.current && !ref.current.contains(target)
      if (isOutside) {
        callback()
      }
    }
    document.addEventListener('mousedown', handleClickOutside, true)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside, true)
    }
  }, [ref, callback])
}

export { useOutsideClick }
