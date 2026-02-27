'use client'
import './NotificationCenter.scss'
import React from 'react'
import { classNames } from '../../utils/classNames'

export interface NotificationHeaderProps {
  title: string
  className?: string
  children: React.ReactNode
  actions?: React.ReactNode
}

function NotificationHeader({
  title,
  className,
  children,
  actions,
}: NotificationHeaderProps) {
  return (
    <div className={classNames('notification-header', className)}>
      <div className="notification-header-title">{title}</div>
      <div className="notification-header-content">
        {children}
        {actions && (
          <div className="notification-header-actions">{actions}</div>
        )}
      </div>
    </div>
  )
}

export { NotificationHeader }
