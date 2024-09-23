import type { Variant } from '@/atoms/Badge'
import React from 'react'
import { render } from '@testing-library/react'
import { Badge } from '@/atoms/Badge'

describe('Badge', () => {
  const variants = [
    'info',
    'success',
    'warning',
    'error',
    'info-outlined',
    'succes-outlined',
    'warning-outlined',
    'error-outlined',
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
})
