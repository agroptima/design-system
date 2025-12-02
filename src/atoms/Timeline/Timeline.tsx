import './Timeline.scss'
import React from 'react'
import { classNames } from '../../utils/classNames'

export type Variant = 'primary'
export interface TimelineProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: Variant
}

export function Timeline({
  className,
  variant = 'primary',
  children,
  ...props
}: TimelineProps) {
  return (
    <div
      className={classNames('timeline-container', variant, className)}
      {...props}
    >
      <div className="timeline-rail">
        <ol className={classNames('milestones-list')}>{children}</ol>
      </div>
    </div>
  )
}
