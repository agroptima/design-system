import type { Variant } from '@/atoms/CheckableTag'
import React from 'react'
import { render } from '@testing-library/react'
import { CheckableTag } from '@/atoms/CheckableTag'

describe('CheckableTag', () => {
  const variants = ['primary']

  it.each(variants)('renders the %s variant with text', (variant) => {
    const label = `${variant} checkable-tag label`
    const accessibilityLabel = `${variant} checkable-tag label`

    const { getByRole, getByText } = render(
      <CheckableTag
        id={`${variant}-checkabletag`}
        aria-label={accessibilityLabel}
        label={label}
        variant={variant as Variant}
        onSelect={() => jest.fn()}
        onChange={() => jest.fn()}
      />,
    )
    expect(getByText(label)).toBeInTheDocument()
    expect(getByRole('checkbox')).toHaveClass(`checkable-tag ${variant}`)
  })
})
