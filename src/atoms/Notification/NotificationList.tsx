'use client'
import './NotificationCenter.scss'
import React from 'react'
import { classNames } from '../../utils/classNames'

export interface NotificationListProps {
  className?: string
  children: React.ReactNode
}

function NotificationList({ className, children }: NotificationListProps) {
  return (
    <div className={classNames('notification-list', className)}>{children}</div>
  )
}

export { NotificationList }
