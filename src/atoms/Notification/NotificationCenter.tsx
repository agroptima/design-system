'use client'
import './NotificationCenter.scss'
import React from 'react'
import { classNames } from '../../utils/classNames'
import { IconButton } from '../Button'
import type { Variant } from '../Button/IconButton'
import { Popover, type Position } from '../Popover'

export interface NotificationCenterProps {
  position?: Position
  className?: string
  variant?: Variant
  accessibilityLabel?: string
  children: React.ReactNode
}

function NotificationCenter({
  position = 'right',
  className,
  variant = 'secondary',
  accessibilityLabel = 'Open notifications center',
  children,
}: NotificationCenterProps) {
  return (
    <Popover
      position={position}
      className={classNames('notification-center-container', className)}
      renderButton={({ toggle }) => (
        <IconButton
          icon="Notification"
          variant={variant}
          accessibilityLabel={accessibilityLabel}
          onClick={toggle}
        />
      )}
      closeOnClick={false}
    >
      <div className="notification-center">{children}</div>
    </Popover>
  )
}

export { NotificationCenter }
