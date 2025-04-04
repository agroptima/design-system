import { render, screen } from '@testing-library/react'
import React from 'react'
import type { Variant } from '../src/atoms/Badge'
import { Badge } from '../src/atoms/Badge'

describe('Badge', () => {
  const variants = [
    'info',
    'success',
    'warning',
    'error',
    'neutral',
    'info-outlined',
    'succes-outlined',
    'warning-outlined',
    'error-outlined',
    'neutral-outlined',
  ]
  it.each(variants)('renders the %s variant with text', (variant) => {
    const text = `${variant} badge text`
    const accessibilityLabel = `${variant} badge label`

    const { getByRole, getByText } = render(
      <Badge
        id={`${variant}-badge`}
        accessibilityLabel={accessibilityLabel}
        text={text}
        variant={variant as Variant}
      />,
    )
    expect(getByText(text)).toBeInTheDocument()
    expect(getByRole('status')).toHaveClass(`badge ${variant}`)
  })

  it.each(variants)('renders the %s variant with icon', (variant) => {
    const icon = 'PDF'
    const accessibilityLabel = `${variant} badge label`

    const { getByRole } = render(
      <Badge
        id={`${variant}-badge`}
        accessibilityLabel={accessibilityLabel}
        icon={icon}
        variant={variant as Variant}
      />,
    )
    expect(screen.getAllByTitle(accessibilityLabel)[1]).toBeInTheDocument()
    expect(getByRole('status')).toHaveClass(`badge ${variant}`)
  })
})
