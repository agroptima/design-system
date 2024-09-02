import type { ButtonVariant } from '@/atoms/Button/Button'
import React from 'react'
import { screen, render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Button } from '@/atoms/Button/Button'

describe('Button', () => {
  const variants = [
    'primary',
    'primary-ghost',
    'primary-outlined',
    'neutral',
    'neutral-ghost',
    'neutral-outlined',
    'error',
    'error-ghost',
    'error-outlined',
    'success',
    'success-ghost',
    'success-outlined',
    'info',
    'info-ghost',
    'info-outlined',
    'warning',
    'warning-ghost',
    'warning-outlined',
  ]

  it.each(variants)(
    'renders the Link version %s variant with text and expected styles',
    (variant) => {
      const label = `${variant} Button`
      const { getByRole, getByText } = render(
        <Button
          id={`${variant}-button`}
          label={label}
          variant={variant as ButtonVariant}
          href="link.com"
        />,
      )
      expect(getByRole('link')).toHaveClass(`button ${variant}`)
      expect(getByText(label)).toBeInTheDocument()
      expect(getByRole('link')).toBeInTheDocument()
    },
  )

  it.each(variants)(
    'renders the Button version %s variant with text and expected styles',
    (variant) => {
      const label = `${variant} Button`
      const { getByRole, getByText } = render(
        <Button
          id={`${variant}-button`}
          label={label}
          variant={variant as ButtonVariant}
          onClick={() => alert('click')}
        />,
      )
      expect(getByRole('button')).toHaveClass(`button ${variant}`)
      expect(getByText(label)).toBeInTheDocument()
      expect(getByRole('button')).toBeInTheDocument()
    },
  )

  it('renders the icon when leftIcon prop is passed', async () => {
    const { getByRole } = render(
      <Button
        id="button-with-icon"
        label="Button with icon"
        variant="info"
        leftIcon="AngleLeft"
        href="link.com"
      />,
    )

    expect(getByRole('img').title).toBe('AngleLeft')
  })

  it('triggers event on onClick', async () => {
    const user = userEvent.setup()
    const onClickEvent = jest.fn()
    render(
      <Button
        id="enabled-button"
        label="Enabled button"
        variant="info"
        onClick={onClickEvent}
      />,
    )

    await user.click(screen.getByRole('button'))

    expect(onClickEvent).toHaveBeenCalled()
  })

  it('does not trigger event on onClick if Button is disabled', async () => {
    const user = userEvent.setup()
    const onClickEvent = jest.fn()
    render(
      <Button
        id="disabled-button"
        label="Disabled button"
        variant="info"
        disabled
        onClick={onClickEvent}
      />,
    )

    await user.click(screen.getByRole('button'))

    expect(onClickEvent).not.toHaveBeenCalled()
  })
})
