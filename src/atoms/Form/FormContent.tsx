import './FormContent.scss'
import { classNames } from '../../utils/classNames'

export interface FormProps extends React.ComponentPropsWithoutRef<'div'> {
  fullWidth?: boolean
  children: React.ReactNode
}

export function FormContent({
  className,
  fullWidth,
  children,
  ...props
}: FormProps) {
  return (
    <div
      className={classNames(className, 'form-content', {
        'full-width': fullWidth,
      })}
      {...props}
    >
      {children}
    </div>
  )
}
