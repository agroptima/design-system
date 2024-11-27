import { Form, Actions } from '../atoms/Form'
import { Input } from '../atoms/Input'
import { Button } from '../atoms/Button'

const meta = {
  title: 'Design System/Atoms/Form',
  component: Form,
  tags: ['autodocs'],
  argTypes: {
    fullWidth: {
      description: 'Should the form take full width?',
      control: { type: 'boolean', default: false },
    },
  },
}

export default meta

export const FormWithActions = {
  render: (args) => (
    <Form {...args}>
      <Input label="First Name" placeholder="First Name" name="firstName" />
      <Input label="Last Name" placeholder="Last Name" name="lastName" />
      <Input label="Username" placeholder="Username" name="username" />
      <Input label="Email" placeholder="Email" type="email" name="email" />
      <Input
        label="Password"
        placeholder="Password"
        type="password"
        name="password"
      />
      <Input
        label="Repeat password"
        placeholder="Repeat password"
        type="repeatPassword"
        name="repeatPassword"
      />
      <Actions>
        <Button type="button" label="Cancel" variant="primary-outlined" />
        <Button type="submit" label="Sign in" variant="primary" />
      </Actions>
    </Form>
  ),
}
