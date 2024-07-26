import { classNames } from '../../utils/classNames'
import './Form.scss'

export interface FormProps extends React.ComponentPropsWithoutRef<'form'> {
  fullWidth?: boolean
  children: React.ReactNode
}

export default function Form({
  className,
  fullWidth,
  children,
  ...props
}: FormProps) {
  return (
    <form
      className={classNames(className, 'form', {
        'full-width': fullWidth,
      })}
      {...props}
    >
      {children}
    </form>
  )
}
