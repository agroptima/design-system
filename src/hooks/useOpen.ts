import { useState } from 'react'

function useOpen(defaultToggle?: boolean) {
  const [isOpen, setIsOpen] = useState(defaultToggle || false)

  const open = () => setIsOpen(true)
  const close = () => setIsOpen(false)

  const toggle = () => setIsOpen(!isOpen)

  return { isOpen, open, close, toggle }
}

export { useOpen }
