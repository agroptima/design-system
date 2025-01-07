import './Alert.scss'
import type { ReactElement } from 'react'
import { classNames } from '../../utils/classNames'
import type { IconButtonProps } from '../Button'
import { IconButton } from '../Button'
import { Icon } from '../Icon'

export type Variant = 'info' | 'success' | 'warning' | 'error'

export interface AlertProps extends React.ComponentPropsWithoutRef<'div'> {
  id: string
  variant?: Variant
  text: string | ReactElement
  button?: IconButtonProps
  fadeOut?: boolean
  fitContent?: boolean
}

export enum IconVariant {
  info = 'Info',
  success = 'Check',
  warning = 'Warning',
  error = 'Error',
}

export function Alert({
  id,
  variant = 'success',
  className,
  fitContent = false,
  fadeOut = false,
  text,
  button,
  ...props
}: AlertProps): React.JSX.Element {
  const cssClasses = classNames('alert', variant, className, {
    'fit-content': fitContent,
    'fade-out': fadeOut,
  })

  return (
    <div
      role="alert"
      aria-labelledby={`${id}-text`}
      className={cssClasses}
      {...props}
    >
      <div className="information-container">
        <Icon name={IconVariant[variant]} className={variant} />
        <span id={`${id}-text`} className="text">
          {text}
        </span>
      </div>
      {button && <IconButton {...button} variant="primary" />}
    </div>
  )
}
