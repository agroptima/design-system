import { render } from '@testing-library/react'
import React from 'react'
import { Checkbox } from '../src/atoms/Checkbox'

describe('Checkbox', () => {
  const variants = ['primary']

  it.each(variants)('renders with label and expected styles', (variant) => {
    const { getByRole, getAllByRole, getByText } = render(
      <Checkbox
        accessibilityLabel="Marks if the user likes videogames"
        id="checkbox-videogames-preference"
        variant="primary"
      >
        Do you like videogames?
      </Checkbox>,
    )
    expect(getAllByRole('generic')[1]).toHaveClass(`checkbox-group ${variant}`)
    expect(getByRole('checkbox')).toHaveClass('checkbox-input')
    expect(getByText(/Do you like videogames/i)).toBeInTheDocument()
  })

  it.each(variants)(
    'renders indeterminate variant with label and expected styles',
    (variant) => {
      const { getByRole, getAllByRole, getByText } = render(
        <Checkbox
          accessibilityLabel="Marks if the user likes videogames"
          id="checkbox-videogames-preference"
          variant="primary"
          indeterminate
        >
          Do you like videogames?
        </Checkbox>,
      )
      expect(getAllByRole('generic')[1]).toHaveClass(
        `checkbox-group ${variant} indeterminate`,
      )
      expect(getByRole('checkbox')).toHaveClass('checkbox-input')
      expect(getByText(/Do you like videogames/i)).toBeInTheDocument()
    },
  )
})
