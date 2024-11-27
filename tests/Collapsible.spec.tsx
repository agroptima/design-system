import React from 'react'
import { render } from '@testing-library/react'
import { Collapsible } from '../src/atoms/Collapsible'
import { Input } from '../src/atoms/Input'

describe('Collapsible', () => {
  it('renders', () => {
    const { getByRole, getByText } = render(
      <Collapsible title="My personal data" name="personal-data" open>
        <Input
          accessibilityLabel="Fill the form name"
          helpText="This text can help you"
          id="name_input"
          label="Name"
          name="name"
          placeholder="name..."
          type="name"
          variant="primary"
        />
      </Collapsible>,
    )

    expect(getByText(/My personal data/i)).toBeInTheDocument()
    expect(getByRole('textbox')).toBeInTheDocument()
    expect(getByRole('group')).toHaveClass(`collapsible primary open`)
  })
})
