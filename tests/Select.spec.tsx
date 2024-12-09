import { render, screen, waitFor } from '@testing-library/react'
import { Select } from '../src/atoms/Select'
import userEvent from '@testing-library/user-event'

describe('Select', () => {
  it('renders', async () => {
    const user = userEvent.setup()
    const { getAllByRole, getByText } = render(
      <Select
        accessibilityLabel="Select your favourite gaming system options"
        helpText="This text can help you"
        id="select-videogames"
        label="Videogames"
        isSearchable={false}
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
        isSearchable={false}
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
        isSearchable={false}
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
    const mockChange = jest.fn()
    const user = userEvent.setup()
    const placeholder = 'Select your favourite gaming system...'
    const { getByText } = render(
      <Select
        defaultValue="2"
        helpText="This text can help you"
        id="select-videogames"
        label="Videogames"
        name="example"
        isSearchable={false}
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
        onChange={mockChange}
        variant="primary"
      />,
    )

    await user.click(screen.getByRole('button', { name: /close/i }))

    expect(getByText(placeholder)).toBeInTheDocument()
    expect(mockChange).toHaveBeenCalledWith('')
  })

  it('return filtered options by search', async () => {
    const user = userEvent.setup()
    const placeholder = 'Select your favourite gaming system...'
    const options = [
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
    ]
    const { queryByText, getByText } = render(
      <Select
        helpText="This text can help you"
        id="select-videogames"
        label="Videogames"
        name="example"
        isSearchable={true}
        options={options}
        placeholder={placeholder}
        variant="primary"
      />,
    )

    await user.click(screen.getByRole('alert'))

    const input = screen.getByRole('textbox')

    await user.type(input, ' PlaySta')

    expect(getByText('PlayStation 5')).toBeInTheDocument()
    expect(queryByText('Nintendo Switch')).not.toBeInTheDocument()
    expect(queryByText('Xbox Series S/X')).not.toBeInTheDocument()
  })
})
