'use client'
import './NotificationCenter.scss'
import React from 'react'
import { classNames } from '../../utils/classNames'
import { Icon } from '../Icon'

export interface NotificationEmptyStateProps {
  title: string
  date: string
  className?: string
}

function NotificationEmptyState({
  title,
  date,
  className,
}: NotificationEmptyStateProps) {
  return (
    <div
      className={classNames(
        'notification-line',
        'notification-empty-state',
        className,
      )}
    >
      <div className="notification-line-head">
        <span className="notification-line-title">
          <Icon variant="success" name="Check" />
          {title}
        </span>
        <span className="notification-line-date">{date}</span>
      </div>
    </div>
  )
}

export { NotificationEmptyState }
