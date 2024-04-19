import React from 'react'
import { render } from '@testing-library/react'
import { Badge } from '@/atoms/Badge'

describe('Badge', () => {
  const variants = ['info', 'success', 'warning', 'error']
  it.each(variants)('renders the %s variant with text', (variant) => {
    const text = `${variant} badge text`

    const { getByRole, getByText } = render(
      <Badge id={`${variant}-badge`} variant={variant} text={text} />,
    )
    expect(getByText(text)).toBeInTheDocument()
    expect(getByRole('status')).toHaveClass(`badge ${variant}`)
  })
})
