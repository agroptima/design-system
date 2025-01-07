import { render, screen } from '@testing-library/react'
import React from 'react'
import { Alert } from '../src/atoms/Alert'
import type { Variant } from '../src/atoms/Alert/Alert'

describe('Alert', () => {
  const variants = ['info', 'success', 'warning', 'error']
  it.each(variants)(
    'renders the %s variant with text, expected styles and button',
    (variant) => {
      const text = `${variant} text`
      const { getByRole, getByText } = render(
        <Alert
          id={`${variant}-modal`}
          text={text}
          variant={variant as Variant}
          button={{
            accessibilityLabel: 'Close alert',
            onClick: () => alert('click'),
            icon: 'Close',
          }}
        />,
      )
      expect(getByRole('alert')).toHaveClass(`alert ${variant}`)
      expect(screen.getAllByRole('img')[0]).toHaveClass(`icon ${variant}`)
      expect(getByText(text)).toBeInTheDocument()
      expect(getByRole('button')).toBeInTheDocument()
    },
  )

  it.each(variants)(
    'renders the %s variant with text and expected styles',
    (variant) => {
      const text = `${variant} text`
      const { getByRole, getByText, queryByRole } = render(
        <Alert
          id={`${variant}-modal`}
          text={text}
          variant={variant as Variant}
        />,
      )
      expect(getByRole('alert')).toHaveClass(`alert ${variant}`)
      expect(screen.getAllByRole('img')[0]).toHaveClass(`icon ${variant}`)
      expect(getByText(text)).toBeInTheDocument()
      expect(queryByRole('button')).not.toBeInTheDocument()
    },
  )
})
