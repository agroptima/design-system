import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Input } from '../src/atoms/Input'
import type { Option } from '../src/atoms/Select'
import { Select } from '../src/atoms/Select'

const playstation5 = {
  id: '2',
  label: 'PlayStation 5',
}

const OPTIONS: Option[] = [
  {
    id: '1',
    label: 'Nintendo Switch',
  },
  playstation5,
  {
    id: '3',
    label: 'Xbox Series S/X',
  },
]

describe('Select', () => {
  it('renders', async () => {
    const user = userEvent.setup()

    const { getAllByRole, getByText } = render(
      <Select
        accessibilityLabel="Select your favourite gaming system options"
        helpText="This text can help you"
        label="Videogames"
        name="example"
        options={OPTIONS}
        placeholder="Select your favourite gaming system..."
      />,
    )
    await user.click(screen.getByRole('combobox'))

    expect(
      getByText(/Select your favourite gaming system.../),
    ).toBeInTheDocument()
    expect(getByText(/This text can help you/i)).toBeInTheDocument()
    expect(getByText(/Switch/i)).toBeInTheDocument()
    expect(getByText(/PlayStation/i)).toBeInTheDocument()
    expect(getByText(/Xbox/i)).toBeInTheDocument()
    expect(getAllByRole('generic')[1]).toHaveClass('select-group primary')
  })

  it('renders the selected option', async () => {
    const user = userEvent.setup()

    render(
      <Select
        defaultValue={playstation5.id}
        helpText="This text can help you"
        label="Videogames"
        name="videogames"
        options={OPTIONS}
        placeholder="Select your favourite gaming system..."
      />,
    )

    await user.click(screen.getByLabelText('Videogames'))
    await user.click(screen.getByRole('option', { name: playstation5.label }))
    expect(screen.getByLabelText('Videogames')).toHaveTextContent(
      playstation5.label,
    )
  })

  it('renders with errors', () => {
    const { getByText } = render(
      <Select
        accessibilityLabel="Select your favourite gaming system options"
        errors={['error1', 'error2']}
        helpText="This text can help you"
        label="Videogames"
        name="select-videogames"
        onChange={() => {}}
        options={OPTIONS}
        placeholder="Select your favourite gaming system..."
      />,
    )

    expect(getByText(/error1/i)).toBeInTheDocument()
    expect(getByText(/error2/i)).toBeInTheDocument()
  })
  it('clears option selected', async () => {
    const mockChange = jest.fn()
    const user = userEvent.setup()
    const placeholder = 'Select your favourite gaming system...'
    const { getByText } = render(
      <Select
        defaultValue="2"
        helpText="This text can help you"
        label="Videogames"
        name="select-videogames"
        options={OPTIONS}
        placeholder={placeholder}
        onChange={mockChange}
      />,
    )

    await user.click(screen.getByRole('button', { name: /clear/i }))

    expect(getByText(placeholder)).toBeInTheDocument()
    expect(mockChange).toHaveBeenCalledWith('')
  })

  it('return filtered options by search', async () => {
    const user = userEvent.setup()
    const { queryByText, getByText } = render(
      <Select
        label="Videogames"
        name="select-videogames"
        isSearchable
        options={OPTIONS}
      />,
    )

    await user.click(screen.getByLabelText('Videogames'))
    await user.type(screen.getByRole('textbox'), ' PlaySta')

    expect(getByText('PlayStation 5')).toBeInTheDocument()
    expect(queryByText('Nintendo Switch')).not.toBeInTheDocument()
    expect(queryByText('Xbox Series S/X')).not.toBeInTheDocument()
  })
  it('deselects when click on deselect button', async () => {
    const user = userEvent.setup()
    const placeholder = 'Select your favourite gaming system...'
    const handleSubmit = jest.fn()

    render(
      <form onSubmit={handleSubmit}>
        <Select
          label="Videogames"
          name="select-videogames"
          isSearchable
          placeholder={placeholder}
          defaultValue={playstation5.id}
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
      <Select
        label="Videogames"
        name="select-videogames"
        isSearchable
        disabled
        defaultValue={playstation5.id}
        options={OPTIONS}
      />,
    )

    await user.click(screen.getByLabelText(/clear/i))

    expect(screen.getByLabelText('Videogames')).toHaveTextContent(
      playstation5.label,
    )
  })

  test('Keyboard control: User can tab to the Select and show its options', async () => {
    const user = userEvent.setup()
    render(
      <div>
        <Input
          accessibilityLabel="Fill the form email"
          helpText="This text can help you"
          id="email_input"
          label="Email"
          name="email"
          placeholder="janedoe@mail.com"
          type="email"
          variant="primary"
        />
        <Select
          accessibilityLabel="Select your favourite gaming system options"
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
        />
      </div>,
    )

    const input = screen.getByRole('textbox')
    const select = screen.getByRole('combobox')

    await user.tab()
    expect(input).toHaveFocus()

    await user.tab()
    expect(select).toHaveFocus()

    await userEvent.type(select, '{arrowDown}')

    expect(screen.getByText('Nintendo Switch')).toBeInTheDocument()
    expect(screen.getByText('PlayStation 5')).toBeInTheDocument()
    expect(screen.getByText(/Xbox Series/i)).toBeInTheDocument()
  })
})
