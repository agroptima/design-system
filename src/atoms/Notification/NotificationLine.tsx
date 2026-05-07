'use client'
import './NotificationCenter.scss'
import React from 'react'
import { classNames } from '../../utils/classNames'
import { IconButton } from '../Button'
import { Icon } from '../Icon'

export interface NotificationLineProps extends React.ComponentPropsWithoutRef<'div'> {
  title: string
  date: string
  isRead?: boolean
  expandLabel?: string
  collapseLabel?: string
  className?: string
  clearAccessibilityLabel: string
  onClick?: () => void
  onClear: () => void
  children: React.ReactNode
}

function NotificationLine({
  title,
  date,
  isRead = false,
  expandLabel = 'View more',
  collapseLabel = 'View less',
  className,
  clearAccessibilityLabel,
  onClick = () => {},
  onClear,
  children,
}: NotificationLineProps) {
  function handleClear(event: React.MouseEvent) {
    event.stopPropagation()
    onClear()
  }

  return (
    <div className={classNames('notification-line', className)}>
      <div className="notification-line-head" onClick={onClick}>
        <span className="notification-line-title">
          {!isRead && <Icon variant="primary" name="TimelineCircleSelected" />}
          {title}
        </span>
        <div className="notification-line-aside">
          <span className="notification-line-date">{date}</span>
          <IconButton
            type="button"
            size="3"
            icon="Close"
            accessibilityLabel={clearAccessibilityLabel}
            onClick={handleClear}
          />
        </div>
      </div>
      <details className="notification-line-description">
        <summary data-open={collapseLabel} data-close={expandLabel}></summary>
        <p>{children}</p>
      </details>
    </div>
  )
}

export { NotificationLine }
