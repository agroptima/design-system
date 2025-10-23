import type { StoryObj } from '@storybook/nextjs'
import type { JSX } from 'react'
import { Button } from '../atoms/Button'
import { Actions, Form } from '../atoms/Form'
import type { FormProps } from '../atoms/Form/Form'
import { Input } from '../atoms/Input'

const meta = {
  title: 'Design System/Atoms/Form',
  component: Form,
  parameters: {
    docs: {
      description: {
        component:
          '<h2>Usage guidelines</h2>' +
          '<p>Forms are used when we need to create an instance or collect information.</p>' +
          '<ul>' +
          ' <li>Keep the label short and concise</li><li>When used, helper text that appears persistently underneath the field is replaced by an error or warning message if a state change occurs</li>' +
          ' <li>Mark the minority of inputs in a form as required or optional</li>' +
          '</ul>',
      },
    },
  },
  tags: ['autodocs', 'Data entry components'],
  argTypes: {
    fullWidth: {
      description: 'Should the form take full width?',
      control: { type: 'boolean', default: false },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const FormWithActions: Story = {
  render: (args: JSX.IntrinsicAttributes & FormProps) => (
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
} as unknown as Story
