import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Multiselect } from '@/atoms/Multiselect'

describe('Multiselect', () => {
  it('renders', async () => {
    const user = userEvent.setup()
    const { getAllByRole, getByText } = render(
      <Multiselect
        accessibilityLabel="Select your favourite videogames options"
        helpText="This text can help you"
        id="multiselect-videogames"
        label="Videogames"
        name="example"
        options={[
          {
            id: '1',
            label: 'The Legend of Zelda: Ocarina of Time',
          },
          {
            id: '2',
            label: 'Spyro the Dragon',
          },
          {
            id: '3',
            label: 'Halo',
          },
        ]}
        placeholder="Select your favourite videogames..."
        selectedLabel="videogames selected"
        variant="primary"
      />,
    )

    expect(getAllByRole('generic')[1]).toHaveClass('multiselect-group primary')
    expect(getByText('Videogames')).toBeInTheDocument()
    expect(getByText(/Select your favourite videogames.../)).toBeInTheDocument()
    expect(getByText(/This text can help you/i)).toBeInTheDocument()

    await user.click(screen.getByRole('alert'))

    expect(getByText(/Zelda/i)).toBeInTheDocument()
    expect(getByText(/Spyro/i)).toBeInTheDocument()
    expect(getByText(/Halo/i)).toBeInTheDocument()
  })

  it('renders the number of options selected', async () => {
    const user = userEvent.setup()
    const { getByText } = render(
      <Multiselect
        helpText="This text can help you"
        id="multiselect-videogames"
        label="Videogames"
        name="example"
        options={[
          {
            id: '1',
            label: 'The Legend of Zelda: Ocarina of Time',
          },
          {
            id: '2',
            label: 'Spyro the Dragon',
          },
          {
            id: '3',
            label: 'Halo',
          },
        ]}
        placeholder="Select your favourite videogames..."
        selected={[
          {
            id: '2',
            label: 'Spyro the Dragon',
          },
          {
            id: '1',
            label: 'The Legend of Zelda: Ocarina of Time',
          },
        ]}
        selectedLabel="videogames selected"
        variant="primary"
      />,
    )

    expect(getByText(/2 videogames selected/i)).toBeInTheDocument()

    await user.click(screen.getByRole('alert'))
    await user.click(screen.getAllByRole('option')[0])

    expect(getByText(/1 videogames selected/i)).toBeInTheDocument()
  })

  it('renders with errors', () => {
    const { getByText } = render(
      <Multiselect
        accessibilityLabel="Select your favourite videogames options"
        errors={['error1', 'error2']}
        helpText="This text can help you"
        id="multiselect-videogames"
        label="Videogames"
        name="example"
        options={[
          {
            id: '1',
            label: 'The Legend of Zelda: Ocarina of Time',
          },
          {
            id: '2',
            label: 'Spyro the Dragon',
          },
          {
            id: '3',
            label: 'Halo',
          },
        ]}
        placeholder="Select your favourite videogames..."
        selectedLabel="videogames selected"
        variant="primary"
      />,
    )

    expect(getByText(/error1/i)).toBeInTheDocument()
    expect(getByText(/error2/i)).toBeInTheDocument()
  })
})
