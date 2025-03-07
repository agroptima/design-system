'use client'
import './Modal.scss'
import React, { useEffect, useRef } from 'react'
import { classNames } from '../../utils/classNames'

export interface ModalDialogProps
  extends React.HTMLAttributes<HTMLDialogElement> {
  isOpen?: boolean
  onClose?: () => void
  details?: boolean
  scrollable?: boolean
}

export function ModalDialog({
  className,
  isOpen = true,
  onClose,
  children,
  details = false,
  scrollable = false,
  ...props
}: ModalDialogProps) {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const handleClick = (event: React.MouseEvent) => {
    if (event.target !== event.currentTarget) return
    onClose?.()
  }

  useEffect(() => {
    keepScrollbarSpace()
    window.addEventListener('resize', keepScrollbarSpace)

    return () => {
      removeScrollbarSpace()
      window.removeEventListener('resize', keepScrollbarSpace)
    }
  }, [])

  useEffect(() => {
    if (isOpen) {
      dialogRef.current?.showModal()
    } else {
      dialogRef.current?.close()
    }
  }, [isOpen])

  return (
    <dialog
      ref={dialogRef}
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
    </dialog>
  )
}

function keepScrollbarSpace() {
  const html = document.documentElement
  const scrollbarWidth = window.innerWidth - html.clientWidth
  const hasScrollbar = scrollbarWidth > 0

  if (hasScrollbar) {
    html.style.setProperty('--modal-scroll-width', `${scrollbarWidth}px`)
    html.classList.add('modal-scroll')
  } else {
    html.style.setProperty('--modal-scroll-width', '0px')
    html.classList.remove('modal-scroll')
  }
}

function removeScrollbarSpace() {
  const html = document.documentElement
  html.classList.remove('modal-scroll')
  html.style.setProperty('--modal-scroll-width', '0px')
}
