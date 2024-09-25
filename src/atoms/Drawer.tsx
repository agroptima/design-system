import type { ButtonProps } from './Button'
import { classNames } from '../utils/classNames'
import { Button, IconButton } from './Button'
import './Drawer.scss'
import { Actions } from './Form'

export type Variant = 'primary'

export interface DrawerProps extends React.ComponentPropsWithoutRef<'div'> {
  id: string
  variant?: Variant
  title: string
  buttons: ButtonProps[]
  onCloseDrawer: () => void
}

export function Drawer({
  id,
  className,
  variant = 'primary',
  title,
  buttons,
  children,
  onCloseDrawer,
  ...props
}: DrawerProps): React.JSX.Element {
  const cssClasses = classNames('drawer', variant, className)

  return (
    <div className="drawer-container">
      <div className="backdrop"></div>
      <div
        role="dialog"
        aria-labelledby={`${id}-title`}
        aria-describedby={`${id}-body`}
        className={cssClasses}
        {...props}
      >
        <div className="close-container">
          <IconButton
            icon="Close"
            accessibilityLabel="Close"
            onClick={onCloseDrawer}
          />
        </div>
        <div className="scroll-area">
          <div className="header">
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
