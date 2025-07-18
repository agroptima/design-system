import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import type { FormEvent } from 'react'
import { InfiniteSelect } from '../src/atoms/InfiniteSelect/InfiniteSelect'

type Item = { uid: string; name: string }
const item: Item = { uid: '1', name: 'First item' }

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
        query={jest.fn()}
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
        query={jest.fn()}
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
          query={jest.fn()}
        />
        <button type="submit">Submit</button>
      </form>,
    )

    await user.click(screen.getByRole('button', { name: /submit/i }))

    expect(submitValue).toBe('1234')
    expect(screen.getByText('Any name')).toBeInTheDocument()
  })
  it('delete selected option when click on clear button', async () => {
    let submitValue = ''
    const user = userEvent.setup()
    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault()
      const form = new FormData(event.currentTarget)
      submitValue = form.get('infinite-select-example') as string
    }
    const defaultValue = { uid: '1234', name: 'Any name' }
    const placeholder = 'Select an option...'

    render(
      <form onSubmit={handleSubmit}>
        <InfiniteSelect
          label="Infinite Options"
          name="infinite-select-example"
          placeholder={placeholder}
          displayItem={jest.fn()}
          defaultValue={defaultValue}
          query={jest.fn()}
        />
      </form>,
    )

    await user.click(screen.getByLabelText(/clear/i))

    expect(submitValue).toBe('')
    expect(screen.getByText(placeholder)).toBeInTheDocument()
  })

  it('loads the first page when clicking', async () => {
    const user = userEvent.setup()
    const anotherItem: Item = { uid: '2', name: 'Another item' }
    const query = jest.fn(async ({ page }) => {
      if (page === '1') {
        return { items: [item], totalPages: 2 }
      }
      if (page === '2') {
        return { items: [anotherItem], totalPages: 2 }
      }
      return { items: [], totalPages: 2 }
    })
    render(
      <InfiniteSelect
        label="Infinite Options"
        name="infinite-select-example"
        placeholder="Select an option..."
        displayItem={(item: Item) => item.name}
        query={query}
      />,
    )

    await user.click(screen.getByLabelText(/infinite options/i))
    await user.click(screen.getByRole('button', { name: 'Loading...' }))

    expect(query).toHaveBeenCalledTimes(2)
    expect(screen.getByRole('option', { name: item.name })).toBeInTheDocument()
    expect(
      screen.getByRole('option', { name: anotherItem.name }),
    ).toBeInTheDocument()
    expect(
      screen.queryByRole('button', { name: 'Loading...' }),
    ).not.toBeInTheDocument()
  })
  xit('loads the first page only once', async () => {
    const user = userEvent.setup()
    const query = jest.fn(async () => {
      return { items: [], totalPages: 1 }
    })
    render(
      <InfiniteSelect
        label="Infinite Options"
        name="infinite-select-example"
        placeholder="Select an option..."
        displayItem={jest.fn()}
        query={query}
      />,
    )

    await user.click(screen.getByLabelText(/infinite options/i))
    await user.click(screen.getByLabelText(/infinite options/i))
    await user.click(screen.getByLabelText(/infinite options/i))

    expect(query).toHaveBeenCalledTimes(1)
  })
})
