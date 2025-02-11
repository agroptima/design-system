import { FormContent } from './FormContent'

export interface FormProps extends React.ComponentPropsWithoutRef<'form'> {
  fullWidth?: boolean
  children: React.ReactNode
}

export function Form({ fullWidth, children, ...props }: FormProps) {
  return (
    <form {...props}>
      <FormContent fullWidth={fullWidth}>{children}</FormContent>
    </form>
  )
}
