import { useState } from 'react'
import { Button, ButtonProps } from './Button'
import { Icon } from './Icon'
import './Modal.scss'

export type Variant = 'info' | 'success' | 'warning' | 'error' | 'discard'

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
  showModal?: boolean
}

export function Modal({
  id,
  variant = 'info',
  title,
  buttons,
  showModal = true,
  children,
  ...props
}: ModalProps): React.JSX.Element {
  const [isModalShown, setIsModalShown] = useState(showModal)

  const cssClasses = ['modal', variant].join(' ')

  function withHideModal(onClick?: React.MouseEventHandler | undefined) {
    return function (event: React.MouseEvent<Element, MouseEvent>) {
      setIsModalShown(false)

      if (onClick !== undefined) onClick(event)
    }
  }

  return (
    <>
      {isModalShown && (
        <div className="modal-container">
          <div
            role="dialog"
            aria-labelledby={`${id}-title`}
            aria-describedby={`${id}-body`}
            className={cssClasses}
            {...props}
          >
            <div className="header">
              <Icon name={IconVariant[variant]} className={variant} />
              <h4 id={`${id}-title`} className="title">
                {title}
              </h4>
            </div>
            <div id={`${id}-body`} className="body">
              {children}
            </div>
            <div className="footer">
              {buttons.map(({ onClick, ...button }) => (
                <Button
                  key={button.label}
                  {...button}
                  onClick={withHideModal(onClick)}
                />
              ))}
            </div>
          </div>
          <div className="backdrop"></div>
        </div>
      )}
    </>
  )
}
