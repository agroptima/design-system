import React from 'react'
import { render } from '@testing-library/react'
import { Checkbox } from '@/atoms/Checkbox'

describe('Checkbox', () => {
  const variants = ['primary']

  it.each(variants)('renders with label and expected styles', (variant) => {
    const { getByRole, getAllByRole, getByText } = render(
      <Checkbox
        accessibilityLabel="Marks if the user likes videogames"
        id="checkbox-videogames-preference"
        label="Do you like videogames?"
        variant="primary"
      />,
    )
    expect(getAllByRole('generic')[1]).toHaveClass(`checkbox-group ${variant}`)
    expect(getByRole('checkbox')).toHaveClass('checkbox')
    expect(getByText(/Do you like videogames/i)).toBeInTheDocument()
  })
})
