import { render } from '@testing-library/react'
import React from 'react'
import { Switch } from '../src/atoms/Switch'

describe('Switch', () => {
  it('renders medium size', () => {
    const { getByRole, getByText } = render(
      <Switch
        accessibilityLabel="Marks if the user likes videogames"
        id="switch-videogames-preference"
        label="Do you like videogames?"
        onClick={() => {}}
        variant="primary"
      />,
    )

    expect(getByText(/Do you like videogames/i)).toBeInTheDocument()
    expect(getByRole('switch')).toHaveClass(`switch primary medium`)
  })

  it('renders small size', () => {
    const { getByRole } = render(
      <Switch
        accessibilityLabel="Marks if the user likes videogames"
        id="switch-videogames-preference"
        label="Do you like videogames?"
        onClick={() => {}}
        variant="primary"
        size="small"
      />,
    )

    expect(getByRole('switch')).toHaveClass(`switch primary small`)
  })
})
