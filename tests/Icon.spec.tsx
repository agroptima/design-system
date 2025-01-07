import { render } from '@testing-library/react'
import React from 'react'
import { Icon } from '../src/atoms/Icon'

describe('Icon', () => {
  it('renders with the expected graphic and styles', () => {
    const { getByRole } = render(<Icon name="AngleLeft" className="info" />)

    expect(getByRole('img')).toHaveClass('icon info')
    expect(getByRole('img').title).toBe('AngleLeft')
  })

  it('has a rotating animation', () => {
    const { getByRole } = render(<Icon name="Loading" className="info" />)

    expect(getByRole('img')).toHaveClass('icon info rotate')
    expect(getByRole('img').title).toBe('Loading')
  })
})
