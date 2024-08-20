import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Input } from '@/atoms/Input'

describe('Input', () => {
  it('renders the Text type', () => {
    const { getByPlaceholderText, getAllByRole, getByRole, getByText } = render(
      <Input
        accessibilityLabel="Fill the form email"
        helpText="This text can help you"
        id="email_input"
        label="Email"
        name="email"
        placeholder="Write your email..."
        type="email"
        variant="primary"
      />,
    )

    expect(getByRole('textbox')).toHaveAttribute('type', 'email')
    expect(getAllByRole('generic')[1]).toHaveClass('input-group primary')
    expect(getByText('Email')).toBeInTheDocument()
    expect(getByPlaceholderText(/Write your email.../)).toBeInTheDocument()
    expect(getByText(/This text can help you/i)).toBeInTheDocument()
  })

  it('renders the Password type', async () => {
    const user = userEvent.setup()
    const { getByPlaceholderText, getAllByRole, getByRole, getByText } = render(
      <Input
        helpText="This text can help you"
        id="password_input"
        label="Password"
        name="login_password"
        placeholder="Write your password..."
        type="password"
        variant="primary"
      />,
    )

    expect(getByPlaceholderText(/Write your password.../)).toHaveAttribute(
      'type',
      'password',
    )
    expect(getAllByRole('generic')[1]).toHaveClass('input-group primary')
    expect(getByText('Password')).toBeInTheDocument()
    expect(getByRole('img').title).toBe('Show')
    expect(getByText(/This text can help you/i)).toBeInTheDocument()

    await user.click(screen.getByRole('button'))

    expect(getByRole('img').title).toBe('ShowOff')
  })

  it('renders input with errors', () => {
    const { getAllByRole, getByText } = render(
      <Input
        accessibilityLabel="Fill the form email"
        errors={['error1', 'error2']}
        helpText="This text can help you"
        id="email_input"
        label="Email"
        name="email"
        placeholder="Email..."
        type="email"
        variant="primary"
      />,
    )

    expect(getAllByRole('generic')[1]).toHaveClass('input-group invalid')
    expect(getByText(/error1/i)).toBeInTheDocument()
    expect(getByText(/error2/i)).toBeInTheDocument()
  })

  it('renders input with suffix', () => {
    const { getByRole, getByText } = render(
      <Input
        helpText="This text can help you"
        label="Input with suffix"
        name="price"
        suffix="€/Bottle"
        type="number"
      />,
    )

    expect(getByRole('spinbutton')).toBeInTheDocument()
    expect(getByText('€/Bottle')).toBeInTheDocument()
  })
})
