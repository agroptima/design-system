import { IconButton, IconButtonProps } from './IconButton'
import { Icon } from './Icon'
import './Alert.scss'

export type Variant = 'info' | 'success' | 'warning' | 'error'

export interface AlertProps extends React.ComponentPropsWithoutRef<'div'> {
  id: string
  variant?: Variant
  text: string
  button?: IconButtonProps
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
  className = '',
  fitContent = false,
  text,
  button,
  ...props
}: AlertProps): React.JSX.Element {
  const fitContentClass = fitContent ? 'fit-content' : ''
  const cssClasses = ['alert', variant, className, fitContentClass].join(' ')

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
