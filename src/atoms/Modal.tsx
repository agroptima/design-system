import { classNames } from '../utils/classNames'
import { Button, ButtonProps } from './Button'
import { Icon } from './Icon'
import './Modal.scss'

export type Variant =
  | 'info'
  | 'success'
  | 'warning'
  | 'error'
  | 'discard'
  | 'details'

export enum IconVariant {
  info = 'Info',
  success = 'Check',
  warning = 'Warning',
  error = 'Error',
  discard = 'Warning',
}

export interface ModalProps extends React.ComponentPropsWithoutRef<'div'> {
  id: string
  variant?: Variant
  title: string
  buttons: ButtonProps[]
}

export function Modal({
  id,
  className,
  variant = 'info',
  title,
  buttons,
  children,
  ...props
}: ModalProps): React.JSX.Element {
  const cssClasses = classNames('modal', variant, className)

  return (
    <div className="modal-container">
      <div className="backdrop"></div>
      <div
        role="dialog"
        aria-labelledby={`${id}-title`}
        aria-describedby={`${id}-body`}
        className={cssClasses}
        {...props}
      >
        <div className="header">
          {variant !== 'details' && (
            <Icon name={IconVariant[variant]} className={variant} />
          )}
          <h4 id={`${id}-title`} className="title">
            {title}
          </h4>
        </div>
        {variant === 'details' && <div className="divider" />}
        <div id={`${id}-body`} className="body">
          {children}
        </div>
        <div className="footer">
          {buttons.map(({ ...button }) => (
            <Button key={button.label} {...button} />
          ))}
        </div>
      </div>
    </div>
  )
}
