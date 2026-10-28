import { getByText, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import { Input } from '../src/atoms/Input'

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
    const { getByPlaceholderText, getAllByRole, getByText, getByLabelText } =
      render(
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
    expect(getByLabelText('Show password')).toBeInTheDocument()
    expect(getByText(/This text can help you/i)).toBeInTheDocument()

    await user.click(screen.getByRole('button'))

    expect(getByLabelText('Hide password')).toBeInTheDocument()
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
        placeholder="janedoe@mail.com"
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
  it('renders required input', () => {
    const { getByText } = render(
      <Input
        helpText="This text can help you"
        label="Required input"
        name="input"
        type="text"
        required
      />,
    )

    expect(getByText('Required input')).toHaveClass('form-label is-required')
  })

  describe('invalid', () => {
    it('marks the input as invalid without listing any error', () => {
      const { getByRole } = render(
        <Input label="Email" name="email" helpText="Your email" invalid />,
      )

      const input = getByRole('textbox')
      expect(input).toBeInvalid()
      expect(input.closest('.input-group')).toHaveClass('invalid')
      expect(getByRole('listitem')).toHaveTextContent('Your email')
    })

    it('marks the input as invalid when it has errors', () => {
      const { getByRole } = render(
        <Input label="Email" name="email" errors={['Required']} />,
      )

      expect(getByRole('textbox')).toBeInvalid()
    })

    it('renders a valid input by default', () => {
      const { getByRole } = render(<Input label="Email" name="email" />)

      const input = getByRole('textbox')
      expect(input).not.toHaveAttribute('aria-invalid')
      expect(input.closest('.input-group')).not.toHaveClass('invalid')
    })
  })

  describe('loading', () => {
    it('renders a readonly and busy input', () => {
      const { getByRole } = render(
        <Input label="Price" name="price" defaultValue="10" loading />,
      )

      const input = getByRole('textbox')
      expect(input).toHaveAttribute('readonly')
      expect(input).toHaveAttribute('aria-busy', 'true')
      expect(input.closest('.input-group')).toHaveClass('loading')
    })

    it('does not let the user change the value', async () => {
      const user = userEvent.setup()
      const { getByRole } = render(
        <Input label="Price" name="price" defaultValue="10" loading />,
      )

      await user.type(getByRole('textbox'), '5')

      expect(getByRole('textbox')).toHaveValue('10')
    })

    it('keeps the input enabled so its value is still submitted', () => {
      const { getByRole } = render(
        <Input label="Price" name="price" defaultValue="10" loading />,
      )

      expect(getByRole('textbox')).toBeEnabled()
    })

    it('renders an editable input when it is not loading', () => {
      const { getByRole } = render(<Input label="Price" name="price" />)

      const input = getByRole('textbox')
      expect(input).not.toHaveAttribute('readonly')
      expect(input).not.toHaveAttribute('aria-busy')
      expect(input.closest('.input-group')).not.toHaveClass('loading')
    })

    it('keeps the input readonly when readOnly is passed and it is not loading', () => {
      const { getByRole } = render(
        <Input label="Price" name="price" readOnly loading={false} />,
      )

      expect(getByRole('textbox')).toHaveAttribute('readonly')
    })
  })
})
