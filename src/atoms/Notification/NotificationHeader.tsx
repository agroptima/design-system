'use client'
import './NotificationCenter.scss'
import React from 'react'
import { classNames } from '../../utils/classNames'
import { IconButton } from '../Button'
import type { Variant } from '../Button/IconButton'
import { Popover, type Position } from '../Popover'

export interface NotificationHeaderProps {
  title: string
  className?: string
  children: React.ReactNode
}

function NotificationHeader({
  title,
  className,
  children,
}: NotificationHeaderProps) {
  return (
    <div className={classNames('notification-header', className)}>
      <div className="notification-header-title">{title}</div>
      <div className="notification-header-content">{children}</div>
    </div>
  )
}

export { NotificationHeader }
