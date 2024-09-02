import type { Variant } from '@/atoms/Button/IconButton'
import React from 'react'
import { screen, render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { IconButton } from '@/atoms/Button/IconButton'

describe('Icon Button', () => {
  const variants = ['primary', 'secondary']

  it.each(variants)(
    'renders the Link version %s variant with text and expected styles',
    (variant) => {
      const { getByRole } = render(
        <IconButton
          id={`${variant}-icon-button`}
          icon="Edit"
          accessibilityLabel="Edit game"
          variant={variant as Variant}
          href="link.com"
        />,
      )
      expect(getByRole('link')).toHaveClass(`icon-button ${variant}`)
      expect(getByRole('img').title).toBe('Edit game')
      expect(getByRole('link')).toBeInTheDocument()
    },
  )

  it.each(variants)(
    'renders the Button version %s variant with text and expected styles',
    (variant) => {
      const { getByRole } = render(
        <IconButton
          id={`${variant}-icon-button`}
          icon="Edit"
          accessibilityLabel="Edit game"
          variant={variant as Variant}
          onClick={() => alert('click')}
        />,
      )
      expect(getByRole('button')).toHaveClass(`icon-button ${variant}`)
      expect(getByRole('img').title).toBe('Edit game')
      expect(getByRole('button')).toBeInTheDocument()
    },
  )

  it('triggers event on onClick', async () => {
    const user = userEvent.setup()
    const onClickEvent = jest.fn()
    render(
      <IconButton
        id="enabled-icon-button"
        icon="Edit"
        accessibilityLabel="Edit game"
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
      <IconButton
        id="disabled-icon-button"
        icon="Edit"
        accessibilityLabel="Edit game"
        disabled
        onClick={onClickEvent}
      />,
    )

    await user.click(screen.getByRole('button'))

    expect(onClickEvent).not.toHaveBeenCalled()
  })
})
