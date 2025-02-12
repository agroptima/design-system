import { FormContainer } from './FormContainer'

export interface FormProps extends React.ComponentPropsWithoutRef<'form'> {
  fullWidth?: boolean
  children: React.ReactNode
}

export function Form({ fullWidth, children, ...props }: FormProps) {
  return (
    <form {...props}>
      <FormContainer fluid={fullWidth}>{children}</FormContainer>
    </form>
  )
}
