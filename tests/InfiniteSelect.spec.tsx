import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import type { FormEvent } from 'react'
import { InfiniteSelect } from '../src/atoms/Select/InfiniteSelect'

type Item = { uid: string; name: string }
const item: Item = { uid: '1', name: 'First item' }
const anotherItem: Item = { uid: '2', name: 'Another item' }

const mockedItems: Item[] = [
  { uid: '1', name: 'Item 1' },
  { uid: '2', name: 'Item 2' },
  { uid: '3', name: 'Item 3' },
  { uid: '4', name: 'Item 4' },
  { uid: '5', name: 'Item 5' },
  { uid: '6', name: 'Item 6' },
]

function simulateIntersection(callback: IntersectionObserverCallback) {
  callback(
    [
      {
        isIntersecting: true,
        target: screen.getByLabelText('Loading items'),
        boundingClientRect: {} as DOMRectReadOnly,
        intersectionRatio: 1,
        intersectionRect: {} as DOMRectReadOnly,
        rootBounds: null,
        time: Date.now(),
      },
    ],
    {} as IntersectionObserver,
  )
}

describe('InfiniteSelect', () => {
  let intersectionCallback: IntersectionObserverCallback

  beforeEach(() => {
    window.IntersectionObserver = jest.fn((callback) => {
      intersectionCallback = callback
      return {
        observe: jest.fn(),
        unobserve: jest.fn(),
        disconnect: jest.fn(),
      }
    }) as unknown as typeof IntersectionObserver
  })

  it('renders correctly', async () => {
    render(
      <InfiniteSelect<Item>
        helpText="This text can help you"
        label="Infinite Options"
        name="infinite-select-example"
        placeholder="Select an option..."
        searchLabel="Search"
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
        searchLabel="Search"
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
          searchLabel="Search"
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
          searchLabel="Search"
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
    const query = jest.fn(async ({ page }) => {
      if (page === '1') {
        return { items: [item], totalPages: 1 }
      }

      return { items: [], totalPages: 1 }
    })

    render(
      <InfiniteSelect
        label="Infinite Options"
        name="infinite-select-example"
        placeholder="Select an option..."
        searchLabel="Search"
        displayItem={(item: Item) => item.name}
        query={query}
      />,
    )

    await user.click(screen.getByLabelText(/infinite options/i))
    simulateIntersection(intersectionCallback)

    await waitFor(() => {
      expect(query).toHaveBeenCalledTimes(1)
      expect(screen.getByText(item.name)).toBeInTheDocument()

      expect(screen.queryByLabelText('Loading items')).not.toBeInTheDocument()
    })
  })

  it('does not call query again if there are no more pages', async () => {
    const user = userEvent.setup()

    const query = jest
      .fn()
      .mockResolvedValueOnce({ items: [item], totalPages: 1 })

    render(
      <InfiniteSelect
        label="Infinite Options"
        name="infinite-select-example"
        placeholder="Select an option..."
        searchLabel="Search"
        displayItem={(item: Item) => item.name}
        query={query}
      />,
    )

    await user.click(screen.getByLabelText(/infinite options/i))
    simulateIntersection(intersectionCallback)

    await waitFor(() => {
      expect(query).toHaveBeenCalledTimes(1)
    })
    expect(screen.queryByLabelText('Loading items')).not.toBeInTheDocument()
  })

  it('does not call query again if already loading', async () => {
    const query = jest.fn<Promise<{ items: Item[]; totalPages: number }>, []>(
      () =>
        new Promise((resolve) => {
          setTimeout(() => {
            resolve({ items: [item], totalPages: 2 })
          }, 500)
        }),
    )

    render(
      <InfiniteSelect
        label="Infinite Options"
        name="infinite-select-example"
        placeholder="Select an option..."
        searchLabel="Search"
        displayItem={(item: Item) => item.name}
        query={query}
      />,
    )

    await userEvent.click(screen.getByLabelText(/infinite options/i))
    simulateIntersection(intersectionCallback)

    await waitFor(() => expect(query).toHaveBeenCalledTimes(1))
  })
  it('send query search term in selector', async () => {
    const user = userEvent.setup()
    const query = jest
      .fn()
      .mockResolvedValue({ items: [item, anotherItem], totalPages: 1 })

    render(
      <InfiniteSelect
        label="Infinite Options"
        name="infinite-select-example"
        searchLabel="Search"
        placeholder="Select an option..."
        displayItem={(item: Item) => item.name}
        query={query}
      />,
    )

    await user.click(screen.getByLabelText(/infinite options/i))
    await user.type(screen.getByLabelText('Search'), 'Item 1')

    await waitFor(() => {
      expect(query).toHaveBeenCalledTimes(1)
      expect(query).toHaveBeenLastCalledWith({ page: '1', search: 'Item 1' })
    })
  })
  it('loads the paginated items by scrolling', async () => {
    const user = userEvent.setup()
    const query = jest
      .fn()
      .mockResolvedValueOnce({
        items: mockedItems.slice(0, 2),
        totalPages: 3,
      })
      .mockResolvedValueOnce({
        items: mockedItems.slice(2, 4),
        totalPages: 3,
      })
      .mockResolvedValueOnce({
        items: mockedItems.slice(4, 6),
        totalPages: 3,
      })

    render(
      <InfiniteSelect
        label="Infinite Options"
        name="infinite-select-example"
        searchLabel="Search"
        placeholder="Select an option..."
        displayItem={(item: Item) => item.name}
        query={query}
      />,
    )

    await user.click(screen.getByLabelText(/Infinite options/i))

    simulateIntersection(intersectionCallback)
    await waitFor(() => {
      expect(screen.getByRole('option', { name: 'Item 1' })).toBeInTheDocument()
      expect(screen.getByRole('option', { name: 'Item 2' })).toBeInTheDocument()
    })
    expect(query).toHaveBeenCalledTimes(1)

    simulateIntersection(intersectionCallback)
    await waitFor(() => {
      expect(screen.getByText('Item 3')).toBeInTheDocument()
      expect(screen.getByText('Item 4')).toBeInTheDocument()
      expect(query).toHaveBeenCalledTimes(2)
    })

    simulateIntersection(intersectionCallback)

    await waitFor(() => {
      expect(screen.getByText('Item 5')).toBeInTheDocument()
      expect(screen.getByText('Item 6')).toBeInTheDocument()
      expect(query).toHaveBeenCalledTimes(3)
    })
  })
})
