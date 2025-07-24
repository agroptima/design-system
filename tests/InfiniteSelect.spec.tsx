import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import type { FormEvent } from 'react'
import { InfiniteSelect } from '../src/atoms/InfiniteSelect/InfiniteSelect'

type Item = { uid: string; name: string }
const item: Item = { uid: '1', name: 'First item' }
const anotherItem: Item = { uid: '2', name: 'Another item' }

describe('InfiniteSelect', () => {
  let observeMock: jest.Mock
  let unobserveMock: jest.Mock
  let disconnectMock: jest.Mock
  let intersectionCallback: IntersectionObserverCallback
  beforeEach(() => {
    observeMock = jest.fn()
    unobserveMock = jest.fn()
    disconnectMock = jest.fn()

    window.IntersectionObserver = jest.fn((callback) => {
      intersectionCallback = callback
      return {
        observe: observeMock,
        unobserve: unobserveMock,
        disconnect: disconnectMock,
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

    await waitFor(() => {
      expect(query).toHaveBeenCalledTimes(1)
      expect(
        screen.getByRole('option', { name: item.name }),
      ).toBeInTheDocument()

      expect(screen.queryByText('Loading...')).not.toBeInTheDocument()
    })
  })

  it('loads the first page only once', async () => {
    const user = userEvent.setup()
    const query = jest.fn(async () => {
      return { items: [], totalPages: 1 }
    })
    render(
      <InfiniteSelect
        label="Infinite Options"
        name="infinite-select-example"
        placeholder="Select an option..."
        searchLabel="Search"
        displayItem={jest.fn()}
        query={query}
      />,
    )

    await user.click(screen.getByLabelText(/infinite options/i))
    await user.click(screen.getByLabelText(/infinite options/i))
    await user.click(screen.getByLabelText(/infinite options/i))

    expect(query).toHaveBeenCalledTimes(1)
  })
  it('observes the loader when component is mounted', async () => {
    const user = userEvent.setup()
    const query = jest.fn(async () => {
      return { items: [], totalPages: 2 }
    })
    render(
      <InfiniteSelect
        label="Infinite Options"
        name="infinite-select-example"
        placeholder="Select an option..."
        searchLabel="Search"
        displayItem={jest.fn()}
        query={query}
      />,
    )

    await user.click(screen.getByLabelText(/infinite options/i))

    expect(observeMock).toHaveBeenCalledWith(
      screen.queryByLabelText('Loading items'),
    )
  })

  it('calls query when loader is observed from viewport', async () => {
    const user = userEvent.setup()
    const query = jest.fn(async () => {
      return { items: [item, anotherItem], totalPages: 2 }
    })

    const loader = {
      current: waitFor(() => {
        screen.queryByText('Loading...')
      }),
    }
    render(
      <InfiniteSelect
        label="Infinite Options"
        name="infinite-select-example"
        searchLabel="Search"
        placeholder="Select an option..."
        displayItem={jest.fn()}
        query={query}
      />,
    )
    await user.click(screen.getByLabelText(/infinite options/i))
    expect(query).toHaveBeenCalledTimes(1)

    intersectionCallback(
      [
        {
          isIntersecting: true,
          target: loader.current,
        } as unknown as IntersectionObserverEntry,
      ],
      {} as IntersectionObserver,
    )

    await waitFor(() => {
      expect(query).toHaveBeenCalledTimes(2)
    })
  })
  it('loads the first page when clicking and next page by loader intersection', async () => {
    const user = userEvent.setup()
    const loader = {
      current: waitFor(() => {
        screen.getByText('Loading...')
      }),
    }
    const query = jest
      .fn()
      .mockResolvedValueOnce({
        items: [item],
        totalPages: 2,
      })
      .mockResolvedValueOnce({
        items: [anotherItem],
        totalPages: 2,
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

    expect(query).toHaveBeenCalledTimes(1)
    expect(screen.getByRole('option', { name: item.name })).toBeInTheDocument()

    intersectionCallback(
      [
        {
          isIntersecting: true,
          target: loader.current,
        } as unknown as IntersectionObserverEntry,
      ],
      {} as IntersectionObserver,
    )

    await waitFor(() => {
      expect(query).toHaveBeenCalledTimes(2)
      expect(
        screen.getByRole('option', { name: anotherItem.name }),
      ).toBeInTheDocument()
    })
  })
  it('does call query again if there are no more pages', async () => {
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
    expect(query).toHaveBeenCalledTimes(1)

    intersectionCallback(
      [
        {
          isIntersecting: true,
          target: screen.queryByText('Loading...'),
        } as unknown as IntersectionObserverEntry,
      ],
      {} as IntersectionObserver,
    )

    await waitFor(() => {
      expect(query).toHaveBeenCalledTimes(1)
    })
    expect(screen.queryByText('Loading...')).not.toBeInTheDocument()
  })
  it('disconnects the observer on unmount', async () => {
    const user = userEvent.setup()
    const query = jest.fn().mockResolvedValue({ items: [item], totalPages: 1 })

    const { unmount } = render(
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

    unmount()

    expect(disconnectMock).toHaveBeenCalled()
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

    intersectionCallback(
      [
        {
          isIntersecting: true,
          target: screen.queryByText('Loading...'),
        } as unknown as IntersectionObserverEntry,
      ],
      {} as IntersectionObserver,
    )

    intersectionCallback(
      [
        {
          isIntersecting: true,
          target: screen.queryByText('Loading...'),
        } as unknown as IntersectionObserverEntry,
      ],
      {} as IntersectionObserver,
    )

    await waitFor(() => expect(query).toHaveBeenCalledTimes(1))
  })
  fit('send query search term in selector', async () => {
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
    await user.type(screen.getByLabelText('Search'), 'First')

    await waitFor(() => {
      expect(query).toHaveBeenCalledTimes(1)
      expect(query).toHaveBeenLastCalledWith({ page: '1', search: 'First' })
    })
  })
})
