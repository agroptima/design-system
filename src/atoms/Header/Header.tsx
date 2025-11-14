import './Header.scss'
import React from 'react'
import { classNames } from '../../utils/classNames'

export interface HeaderProps {
  className?: string
  children?: React.ReactNode
}

export function Header({ className, children }: HeaderProps) {
  return <header className={classNames('header', className)}>{children}</header>
}
