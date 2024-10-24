import React from 'react'
import { render } from '@testing-library/react'
import { RadioButton } from '@/atoms/RadioButton'

describe('RadioButton', () => {
  const variants = ['primary']

  it.each(variants)('renders with label and expected styles', (variant) => {
    const { getAllByRole, getByText } = render(
      <>
        <RadioButton
          accessibilityLabel="Marks if the user likes party videogames"
          id="preference-2"
          name="videogames-preference"
          value="party"
          label="Party games"
          variant="primary"
        />
        <RadioButton
          accessibilityLabel="Marks if the user likes platform videogames"
          id="preference-3"
          name="videogames-preference"
          value="platform"
          label="Platform games"
          variant="primary"
        />
      </>,
    )
    expect(getAllByRole('generic')[1]).toHaveClass(`radio-group ${variant}`)
    expect(getAllByRole('radio')[0]).toHaveClass(`radio ${variant}`)
    expect(getAllByRole('radio')[1]).toHaveClass(`radio ${variant}`)
    expect(getByText(/Party games/i)).toBeInTheDocument()
    expect(getByText(/Platform games/i)).toBeInTheDocument()
  })
})
