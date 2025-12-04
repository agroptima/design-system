import './ButtonGroup.scss'
import React from 'react'
import { classNames } from '../../utils/classNames'

export interface ButtonGroupProps extends React.HTMLAttributes<HTMLDivElement> {}

export function ButtonGroup({ className, children }: ButtonGroupProps) {
  return <div className={classNames('button-group', className)}>{children}</div>
}
