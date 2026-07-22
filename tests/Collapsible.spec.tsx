import { render, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
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

  it('removes the open styles when a default-open collapsible is closed', async () => {
    const user = userEvent.setup()
    const { getByRole } = render(
      <Collapsible title="My personal data" name="personal-data" open>
        <Input
          accessibilityLabel="Fill the form name"
          id="name_input"
          label="Name"
          name="name"
          type="name"
          variant="primary"
        />
      </Collapsible>,
    )

    const group = getByRole('group')
    expect(group).toHaveClass('open')

    await user.click(group.querySelector('summary')!)

    await waitFor(() => expect(group).not.toHaveClass('open'))
  })

  it('adds the open styles when a closed collapsible is opened', async () => {
    const user = userEvent.setup()
    const { getByRole } = render(
      <Collapsible title="My personal data" name="personal-data">
        <Input
          accessibilityLabel="Fill the form name"
          id="name_input"
          label="Name"
          name="name"
          type="name"
          variant="primary"
        />
      </Collapsible>,
    )

    const group = getByRole('group')
    expect(group).not.toHaveClass('open')

    await user.click(group.querySelector('summary')!)

    await waitFor(() => expect(group).toHaveClass('open'))
  })
})
