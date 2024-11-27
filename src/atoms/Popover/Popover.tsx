'use client'
import { useOutsideClick } from '../../utils/useOutsideClick'
import { classNames } from '../../utils/classNames'
import { useOpen } from '../../utils/useOpen'
import { useRef } from 'react'
import './Popover.scss'

export interface PopoverProps {
  renderButton: (props: {
    isOpen: boolean
    close: () => void
    open: () => void
    toggle: () => void
  }) => React.ReactNode
  position?: 'left' | 'right' | 'center'
  children: React.ReactNode
}

function Popover({ renderButton, position = 'left', children }: PopoverProps) {
  const { isOpen, close, open, toggle } = useOpen()

  const popoverRef = useRef(null)
  useOutsideClick(popoverRef, close)

  return (
    <div className="popover-container" ref={popoverRef}>
      {renderButton({ isOpen, close, open, toggle })}
      {isOpen && (
        <div
          className={classNames('popover-menu-container', position)}
          onClick={close}
        >
          {children}
        </div>
      )}
    </div>
  )
}

export { Popover }
