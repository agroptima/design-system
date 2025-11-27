import './Timeline.scss'
import Link from 'next/link'
import React from 'react'
import { classNames } from '../../utils/classNames'
import { Icon } from '../Icon'

export interface MilestoneProps extends React.HTMLAttributes<HTMLLIElement> {
  title: string
  description: string
  isSelected?: boolean
  href?: string
}

export function Milestone({
  title,
  description,
  isSelected = false,
  href = '',
  className,
  ...props
}: MilestoneProps) {
  return (
    <li
      className={classNames('milestone-item', { selected: isSelected })}
      {...props}
    >
      <div className="left-wrapper">
        <Icon
          name={isSelected ? 'TimelineCircleSelected' : 'TimelineCircleDefault'}
        />
      </div>
      <div className="right-wrapper">
        {href === '' ? (
          <span className="milestone-title">{title}</span>
        ) : (
          <Link href={href} className={classNames('milestone-title-link')}>
            <span className="milestone-title">{title}</span>
          </Link>
        )}
        <p className="milestone-description">{description}</p>
      </div>
    </li>
  )
}
