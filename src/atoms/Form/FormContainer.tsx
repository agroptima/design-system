import './FormContainer.scss'
import { classNames } from '../../utils/classNames'

export interface FormContainerProps
  extends React.ComponentPropsWithoutRef<'div'> {
  fluid?: boolean
}

export function FormContainer({
  fluid,
  className,
  children,
  ...props
}: FormContainerProps) {
  return (
    <div
      className={classNames(className, 'form-container', {
        fluid,
      })}
      {...props}
    >
      {children}
    </div>
  )
}
