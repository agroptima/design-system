'use client'
import './NotificationCenter.scss'
import React from 'react'
import { classNames } from '../../utils/classNames'
import { Badge } from '../Badge'
import { IconButton } from '../Button'
import type { Variant } from '../Button/IconButton'
import type { IconSize } from '../Icon'
import { Popover, type Position } from '../Popover'

export interface NotificationCenterProps {
  position?: Position
  className?: string
  variant?: Variant
  accessibilityLabel?: string
  hasNewNotifications?: boolean
  size?: IconSize
  children: React.ReactNode
}

function NotificationCenter({
  position = 'right',
  size = '6',
  className,
  variant = 'secondary',
  hasNewNotifications = false,
  accessibilityLabel = 'Open notifications center',
  children,
}: NotificationCenterProps) {
  return (
    <Popover
      position={position}
      className={classNames('notification-center-container', className)}
      renderButton={({ toggle }) => (
        <div className="notification-button-container">
          {hasNewNotifications && (
            <Badge
              className="new-notifications-dot"
              variant="notification"
              isDot
            />
          )}
          <IconButton
            icon="Notification"
            variant={variant}
            accessibilityLabel={accessibilityLabel}
            size={size}
            onClick={toggle}
          />
        </div>
      )}
      closeOnClick={false}
    >
      <div className="notification-center">{children}</div>
    </Popover>
  )
}

export { NotificationCenter }
