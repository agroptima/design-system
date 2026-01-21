'use client'
import './NotificationCenter.scss'
import React from 'react'
import { classNames } from '../../utils/classNames'
import { Icon } from '../Icon'

export interface NotificationLineProps {
  title: string
  date: string
  description: string
  isRead?: boolean
  expandLabel?: string
  collapseLabel?: string
  className?: string
}

function NotificationLine({
  title,
  date,
  description,
  isRead = false,
  expandLabel = 'View more',
  collapseLabel = 'View less',
  className,
}: NotificationLineProps) {
  return (
    <div className={classNames('notification-line', className)}>
      <div className="notification-line-head">
        <span className="notification-line-title">
          {!isRead && <Icon variant="primary" name="TimelineCircleSelected" />}
          {title}
        </span>
        <span className="notification-line-date">{date}</span>
      </div>
      <details className="notification-line-description">
        <summary data-open={collapseLabel} data-close={expandLabel}></summary>
        <p>{description}</p>
      </details>
    </div>
  )
}

export { NotificationLine }
