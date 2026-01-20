'use client'
import './Popover.scss'
import React, { useRef } from 'react'
import { useOpen } from '../../hooks/useOpen'
import { useOutsideClick } from '../../hooks/useOutsideClick'
import { classNames } from '../../utils/classNames'

type Actions = {
  isOpen: boolean
  close: () => void
  open: () => void
  toggle: () => void
}

export type Horizontal = 'left' | 'right' | 'center'

export type Position = Horizontal | `top-${Horizontal}`

export interface PopoverProps {
  renderButton: (props: Actions) => React.ReactNode
  position?: Position
  className?: string
  children: React.ReactNode
}

function Popover({
  renderButton,
  position = 'left',
  className,
  children,
}: PopoverProps) {
  const { isOpen, close, open, toggle } = useOpen()

  const popoverRef = useRef(null)
  useOutsideClick(popoverRef, close)

  return (
    <div
      className={classNames('popover-container', className)}
      ref={popoverRef}
    >
      {renderButton({ isOpen, close, open, toggle })}
      <div
        className={classNames('popover-menu-container', position, {
          hidden: !isOpen,
        })}
        onClick={close}
        aria-hidden={!isOpen}
      >
        <div className="backdrop"></div>
        {children}
      </div>
    </div>
  )
}

export { Popover }
