'use client'
import './Modal.scss'
import React, { useEffect } from 'react'
import { classNames } from '../../utils/classNames'

export interface ModalDialogProps extends React.HTMLAttributes<HTMLDivElement> {
  onClose?: () => void
  details?: boolean
  scrollable?: boolean
}

export function ModalDialog({
  className,
  onClose,
  children,
  details = false,
  scrollable = false,
  ...props
}: ModalDialogProps) {
  const handleClick = (event: React.MouseEvent) => {
    if (event.target !== event.currentTarget) return
    onClose?.()
  }

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose?.()
      }
    }
    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [onClose])

  return (
    <>
      <div className="modal-backdrop"></div>
      <div
        role="dialog"
        className={classNames('modal', className, { 'modal-details': details })}
        onClick={handleClick}
        {...props}
      >
        <div
          className={classNames('modal-dialog', {
            'modal-dialog-scrollable': scrollable,
          })}
        >
          <div className="modal-content">{children}</div>
        </div>
      </div>
    </>
  )
}
