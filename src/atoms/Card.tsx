import './Card.scss'
import React, { useState } from 'react'
import { Icon, IconType } from './Icon'
import { ButtonProps } from './Button'

export type Variant = 'primary'

export interface CardProps extends React.ComponentPropsWithoutRef<'div'> {
  title: string
  description: string
  button?: ButtonProps
  variant?: Variant
}

export function Card({
  title,
  description,
  button,
  variant = 'primary',
  ...props
}: CardProps): React.JSX.Element {
  const cssClasses = ['card', variant].join(' ')
  return (
    <div className={cssClasses}>
      <span>{title}</span>
      <p>{description}</p>
    </div>
  )
}
