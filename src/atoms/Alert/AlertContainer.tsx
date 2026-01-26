import './AlertContainer.scss'
import { classNames } from '../../utils/classNames'

export interface AlertContainerProps
  extends React.ComponentPropsWithoutRef<'section'> {}

export function AlertContainer({ className, ...props }: AlertContainerProps) {
  return (
    <section className={classNames('alert-container', className)} {...props} />
  )
}
