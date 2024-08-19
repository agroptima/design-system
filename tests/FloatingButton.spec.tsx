import type { Variant } from '@/atoms/Button/FloatingButton'
import React from 'react'
import { screen, render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { FloatingButton } from '@/atoms/Button/FloatingButton'

describe('Floating Button', () => {
  const variants = ['primary']

  it.each(variants)(
    'renders the Link version %s variant with text and expected styles',
    (variant) => {
      const { getByRole } = render(
        <FloatingButton
          id={`${variant}-floating-button`}
          icon="Add"
          shape="circle"
          accessibilityLabel="Add game"
          variant={variant as Variant}
          href="link.com"
        />,
      )
      expect(getByRole('link')).toHaveClass(`floating-button ${variant} circle`)
      expect(getByRole('img').title).toBe('Add')
      expect(getByRole('link')).toBeInTheDocument()
    },
  )

  it.each(variants)(
    'renders the Button version %s variant with text and expected styles',
    (variant) => {
      const { getByRole } = render(
        <FloatingButton
          id={`${variant}-floating-button`}
          icon="Add"
          shape="rounded-square"
          accessibilityLabel="Add game"
          variant={variant as Variant}
          onClick={() => alert('click')}
        />,
      )
      expect(getByRole('button')).toHaveClass(
        `floating-button ${variant} rounded-square`,
      )
      expect(getByRole('img').title).toBe('Add')
      expect(getByRole('button')).toBeInTheDocument()
    },
  )

  it('triggers event on onClick', async () => {
    const user = userEvent.setup()
    const onClickEvent = jest.fn()
    render(
      <FloatingButton
        id="enabled-floating-button"
        icon="Add"
        shape="rounded-square"
        accessibilityLabel="Add game"
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
      <FloatingButton
        id="disabled-floating-button"
        icon="Add"
        shape="rounded-square"
        accessibilityLabel="Add game"
        disabled
        onClick={onClickEvent}
      />,
    )

    await user.click(screen.getByRole('button'))

    expect(onClickEvent).not.toHaveBeenCalled()
  })
})
