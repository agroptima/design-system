import { render } from '@testing-library/react'
import React from 'react'
import { Button } from '../src/atoms/Button/Button'
import type { Variant } from '../src/atoms/EmptyState'
import { EmptyState } from '../src/atoms/EmptyState'

describe('EmptyState', () => {
  const variants = ['primary']
  it.each(variants)(
    'renders the Basic %s variant with the expected image and text',
    (variant) => {
      const content = `${variant} empty state content`
      const { getAllByRole, getByRole, getByText } = render(
        <EmptyState variant={variant as Variant}>
          <p>{content}</p>
        </EmptyState>,
      )
      expect(getAllByRole('generic')[1]).toHaveClass(`empty-state ${variant}`)
      expect(getByRole('img').title).toBe('EmptyState')
      expect(getByText(content)).toBeInTheDocument()
    },
  )

  it('renders the Custom version with the expected image and content', () => {
    const { getAllByRole, getByRole, getByText } = render(
      <EmptyState>
        <p>
          There are no videogames yet. You can import videogames to your{' '}
          <a href="#">list</a>.
        </p>
        <Button
          label="Import videogames"
          onClick={() => alert('click')}
        ></Button>
      </EmptyState>,
    )
    expect(getAllByRole('generic')[1]).toHaveClass(`empty-state primary`)
    expect(getByRole('img').title).toBe('EmptyState')
    expect(getByText(/There are no videogames yet/i)).toBeInTheDocument()
    expect(getByText('Import videogames')).toBeInTheDocument()
    expect(getByRole('link')).toBeInTheDocument()
    expect(getByRole('button')).toBeInTheDocument()
  })
})
