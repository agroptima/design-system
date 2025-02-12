import { FormContainer } from './FormContainer'

export interface FormProps extends React.ComponentPropsWithoutRef<'form'> {
  fluid?: boolean
  children: React.ReactNode
}

export function Form({ fluid, children, ...props }: FormProps) {
  return (
    <form {...props}>
      <FormContainer fluid={fluid}>{children}</FormContainer>
    </form>
  )
}
