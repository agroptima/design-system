import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Multiselect } from '@/atoms/Multiselect'
import { Placeholder } from 'storybook/internal/components'

describe('Multiselect', () => {
  it('renders', async () => {
    const user = userEvent.setup()
    const { getAllByRole, getByText } = render(
      <Multiselect
        accessibilityLabel="Select your favourite videogames options"
        helpText="This text can help you"
        label="Videogames"
        name="videogames"
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

    expect(getAllByRole('generic')[1]).toHaveClass('select-group primary')
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
        label="Videogames"
        name="videogames"
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
        defaultValue={['2', '1']}
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
        label="Videogames"
        name="videogames"
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
  it('clears options selected', async () => {
    const user = userEvent.setup()
    const placeholder = 'Select your favourite videogames...'
    const { getByText } = render(
      <Multiselect
        helpText="This text can help you"
        label="Videogames"
        name="videogames"
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
        placeholder={placeholder}
        defaultValue={['2', '1']}
        selectedLabel="videogames selected"
        variant="primary"
      />,
    )

    await user.click(screen.getByRole('button', { name: /close/i }))

    expect(getByText(placeholder)).toBeInTheDocument()
  })
})
