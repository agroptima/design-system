import './Drawer.scss'
import { useRef } from 'react'
import { useOutsideClick } from '../hooks/useOutsideClick'
import { classNames } from '../utils/classNames'
import type { ButtonProps } from './Button'
import { Button, IconButton } from './Button'
import { Actions } from './Form'

export type Variant = 'primary'

export interface DrawerProps extends React.ComponentPropsWithoutRef<'div'> {
  id: string
  variant?: Variant
  title: string
  buttons: ButtonProps[]
  onClose: () => void
}

export function Drawer({
  id,
  className,
  variant = 'primary',
  title,
  buttons,
  children,
  onClose,
  ...props
}: DrawerProps): React.JSX.Element {
  const cssClasses = classNames('drawer', variant, className)

  const drawerRef = useRef(null)
  useOutsideClick(drawerRef, onClose)

  return (
    <div className="drawer-container">
      <div className="backdrop"></div>
      <div
        role="dialog"
        aria-labelledby={`${id}-title`}
        aria-describedby={`${id}-body`}
        className={cssClasses}
        ref={drawerRef}
        {...props}
      >
        <div className="close-container">
          <IconButton
            icon="Close"
            accessibilityLabel="Close"
            onClick={onClose}
          />
        </div>
        <div className="scroll-area">
          <div className="drawer-header">
            <h4 id={`${id}-title`} className="title">
              {title}
            </h4>
          </div>
          <div id={`${id}-body`} className="body">
            {children}
          </div>
        </div>
        <div className="footer">
          <Actions>
            {buttons.map(({ ...button }) => (
              <Button key={button.label} {...button} />
            ))}
          </Actions>
        </div>
      </div>
    </div>
  )
}
