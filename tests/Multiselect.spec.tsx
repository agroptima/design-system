import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import { Multiselect } from '../src/atoms/Multiselect/Multiselect'
import { type Option, Select } from '../src/atoms/Select'

const zelda = {
  id: '1',
  label: 'The Legend of Zelda: Ocarina of Time',
}

const OPTIONS: Option[] = [
  zelda,
  {
    id: '2',
    label: 'Spyro the Dragon',
  },
  {
    id: '3',
    label: 'Halo',
  },
]

describe('Multiselect', () => {
  it('renders', async () => {
    const user = userEvent.setup()
    const { getAllByRole, getByText } = render(
      <Multiselect
        accessibilityLabel="Select your favourite videogames options"
        helpText="This text can help you"
        label="Videogames"
        name="videogames"
        options={OPTIONS}
        placeholder="Select your favourite videogames..."
        selectedLabel="videogames selected"
        variant="primary"
        isSearchable={false}
      />,
    )

    await user.click(screen.getByLabelText('Videogames'))

    expect(getAllByRole('generic')[1]).toHaveClass('select-group primary')
    expect(getByText('Videogames')).toBeInTheDocument()
    expect(getByText(/Select your favourite videogames.../)).toBeInTheDocument()
    expect(getByText(/This text can help you/i)).toBeInTheDocument()
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
        options={OPTIONS}
        placeholder="Select your favourite videogames..."
        defaultValue={['2', '1']}
        selectedLabel="videogames selected"
        variant="primary"
        isSearchable={false}
      />,
    )

    expect(getByText(/2 videogames selected/i)).toBeInTheDocument()

    await user.click(screen.getByLabelText('Videogames'))
    await user.click(screen.getByRole('option', { name: zelda.label }))
    expect(screen.getByLabelText('Videogames')).toHaveTextContent(
      /1 videogames selected/i,
    )
  })

  it('renders with errors', () => {
    const { getByText } = render(
      <Multiselect
        accessibilityLabel="Select your favourite videogames options"
        errors={['error1', 'error2']}
        helpText="This text can help you"
        label="Videogames"
        name="videogames"
        options={OPTIONS}
        placeholder="Select your favourite videogames..."
        selectedLabel="videogames selected"
        variant="primary"
        isSearchable={false}
      />,
    )

    expect(getByText(/error1/i)).toBeInTheDocument()
    expect(getByText(/error2/i)).toBeInTheDocument()
  })
  it('clears options selected', async () => {
    const mockChange = jest.fn()
    const user = userEvent.setup()
    const placeholder = 'Select your favourite videogames...'
    const { getByText } = render(
      <Multiselect
        helpText="This text can help you"
        label="Videogames"
        name="videogames"
        options={OPTIONS}
        placeholder={placeholder}
        defaultValue={['2', '1']}
        selectedLabel="videogames selected"
        onChange={mockChange}
        variant="primary"
        isSearchable={false}
      />,
    )

    await user.click(screen.getByRole('button', { name: /clear/i }))

    expect(getByText(placeholder)).toBeInTheDocument()
    expect(mockChange).toHaveBeenCalledWith([])
  })

  it('return filtered options by search', async () => {
    const user = userEvent.setup()
    const placeholder = 'Select your favourite gaming system...'
    const { queryByText, getByText } = render(
      <Multiselect
        helpText="This text can help you"
        id="select-videogames"
        label="Videogames"
        name="example"
        isSearchable={true}
        options={OPTIONS}
        placeholder={placeholder}
        variant="primary"
      />,
    )

    await user.click(screen.getByLabelText('Videogames'))
    await user.type(screen.getByRole('textbox'), ' Zelda')

    expect(
      getByText(/The Legend of Zelda: Ocarina of Time/i),
    ).toBeInTheDocument()
    expect(queryByText('Spyro the Dragon')).not.toBeInTheDocument()
    expect(queryByText('Halo')).not.toBeInTheDocument()
  })

  it('deselects when click on deselect button', async () => {
    const user = userEvent.setup()
    const placeholder = 'Select your favourite gaming system...'
    const handleSubmit = jest.fn()

    render(
      <form onSubmit={handleSubmit}>
        <Multiselect
          label="Videogames"
          name="select-videogames"
          placeholder="Select your favourite gaming system..."
          defaultValue={[zelda.id]}
          options={OPTIONS}
        />
      </form>,
    )

    await user.click(screen.getByLabelText(/clear/i))

    expect(screen.getByLabelText('Videogames')).toHaveTextContent(placeholder)
    expect(handleSubmit).toHaveBeenCalledTimes(0)
  })

  it('disables deselect button when is disabled', async () => {
    const user = userEvent.setup()
    render(
      <Multiselect
        disabled
        label="Videogames"
        name="select-videogames"
        defaultValue={[zelda.id]}
        options={OPTIONS}
      />,
    )

    await user.click(screen.getByLabelText(/clear/i))

    expect(screen.getByLabelText('Videogames')).toHaveTextContent(
      /1 items selected/i,
    )
  })
})
