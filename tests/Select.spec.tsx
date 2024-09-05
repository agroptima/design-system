import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Select } from '@/atoms/Select'

describe('Select', () => {
  it('renders', async () => {
    const user = userEvent.setup()
    const { getAllByRole, getByText } = render(
      <Select
        accessibilityLabel="Select your favourite gaming system options"
        helpText="This text can help you"
        id="select-videogames"
        label="Videogames"
        name="example"
        options={[
          {
            id: '1',
            label: 'Nintendo Switch',
          },
          {
            id: '2',
            label: 'PlayStation 5',
          },
          {
            id: '3',
            label: 'Xbox Series S/X',
          },
        ]}
        placeholder="Select your favourite gaming system..."
        variant="primary"
      />,
    )

    expect(getAllByRole('generic')[1]).toHaveClass('select-group primary')
    expect(getByText('Videogames')).toBeInTheDocument()
    expect(
      getByText(/Select your favourite gaming system.../),
    ).toBeInTheDocument()
    expect(getByText(/This text can help you/i)).toBeInTheDocument()

    await user.click(screen.getByRole('alert'))

    expect(getByText(/Switch/i)).toBeInTheDocument()
    expect(getByText(/PlayStation/i)).toBeInTheDocument()
    expect(getByText(/Xbox/i)).toBeInTheDocument()
  })

  it('renders the selected option', async () => {
    const user = userEvent.setup()
    const { getByText, queryByText } = render(
      <Select
        defaultValue="2"
        helpText="This text can help you"
        id="select-videogames"
        label="Videogames"
        name="example"
        options={[
          {
            id: '1',
            label: 'Nintendo Switch',
          },
          {
            id: '2',
            label: 'PlayStation 5',
          },
          {
            id: '3',
            label: 'Xbox Series S/X',
          },
        ]}
        placeholder="Select your favourite gaming system..."
        variant="primary"
      />,
    )

    expect(getByText(/PlayStation/i)).toBeInTheDocument()
    expect(queryByText(/Switch/i)).not.toBeInTheDocument()
    expect(queryByText(/Xbox/i)).not.toBeInTheDocument()

    await user.click(screen.getByRole('alert'))
    await user.click(screen.getAllByRole('option')[0])

    expect(getByText(/Switch/i)).toBeInTheDocument()
    expect(queryByText(/PlayStation/i)).not.toBeInTheDocument()
    expect(queryByText(/Xbox/i)).not.toBeInTheDocument()
  })

  it('renders with errors', () => {
    const { getByText } = render(
      <Select
        accessibilityLabel="Select your favourite gaming system options"
        errors={['error1', 'error2']}
        helpText="This text can help you"
        id="select-videogames"
        label="Videogames"
        name="example"
        onChange={() => {}}
        options={[
          {
            id: '1',
            label: 'Nintendo Switch',
          },
          {
            id: '2',
            label: 'PlayStation 5',
          },
          {
            id: '3',
            label: 'Xbox Series S/X',
          },
        ]}
        placeholder="Select your favourite gaming system..."
        variant="primary"
      />,
    )

    expect(getByText(/error1/i)).toBeInTheDocument()
    expect(getByText(/error2/i)).toBeInTheDocument()
  })
  it('clears option selected', async () => {
    const user = userEvent.setup()
    const placeholder = 'Select your favourite gaming system...'
    const { getByText } = render(
      <Select
        defaultValue="2"
        helpText="This text can help you"
        id="select-videogames"
        label="Videogames"
        name="example"
        options={[
          {
            id: '1',
            label: 'Nintendo Switch',
          },
          {
            id: '2',
            label: 'PlayStation 5',
          },
          {
            id: '3',
            label: 'Xbox Series S/X',
          },
        ]}
        placeholder={placeholder}
        variant="primary"
      />,
    )

    await user.click(screen.getByRole('button', { name: /close/i }))

    expect(getByText(placeholder)).toBeInTheDocument()
  })
})
