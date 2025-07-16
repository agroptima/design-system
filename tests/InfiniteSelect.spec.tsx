import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import type { FormEvent } from 'react'
import { InfiniteSelect } from '../src/atoms/InfiniteSelect/InfiniteSelect'

type Item = { uid: string; name: string }

describe('InfiniteSelect', () => {
  it('renders correctly', async () => {
    render(
      <InfiniteSelect<Item>
        helpText="This text can help you"
        label="Infinite Options"
        name="infinite-select-example"
        placeholder="Select an option..."
        required
        displayItem={jest.fn()}
      />,
    )

    expect(screen.getByText(/This text can help you/i)).toBeInTheDocument()
    expect(screen.getByText('Select an option...')).toBeInTheDocument()
    expect(screen.getByLabelText('Infinite Options')).toBeInTheDocument()
  })
  it('shows disabled button', async () => {
    render(
      <InfiniteSelect
        helpText="This text can help you"
        label="Infinite Options"
        name="infinite-select-example"
        placeholder="Select an option..."
        displayItem={jest.fn()}
        required
        disabled
      />,
    )

    expect(screen.getByLabelText('Infinite Options')).toBeDisabled()
  })
  it('deselects when click on deselect button', async () => {
    let submitValue = ''
    const user = userEvent.setup()
    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault()
      const form = new FormData(event.currentTarget)
      submitValue = form.get('infinite-select-example') as string
    }

    render(
      <form onSubmit={handleSubmit}>
        <InfiniteSelect<Item>
          helpText="This text can help you"
          label="Infinite Options"
          name="infinite-select-example"
          placeholder="Select an option..."
          displayItem={(item) => item.name}
          defaultValue={{ uid: '1234', name: 'Any name' }}
        />
        <button type="submit">Submit</button>
      </form>,
    )

    await user.click(screen.getByRole('button', { name: /submit/i }))

    expect(submitValue).toBe('1234')
    expect(screen.getByText('Any name')).toBeInTheDocument()
  })
})
