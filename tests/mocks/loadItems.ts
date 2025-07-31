type LoadItemsResult<T> = {
  items: T[]
  totalPages: number
}

type LoadItemsFn<T> = (payload: {
  page?: number
  search?: string
  pageSize?: number
}) => Promise<LoadItemsResult<T>>

export function createLoadItemsMock<T>(): LoadItemsFn<T> {
  let currentPage = 1

  return async ({
    page = 1,
    search = '',
    pageSize = 5,
  }: { page?: number; search?: string; pageSize?: number } = {}) => {
    const totalPages = Math.ceil(itemsMock.length / pageSize)
    const pageIndex = (page ?? currentPage) - 1
    const items = itemsMock.slice(
      pageIndex * pageSize,
      (pageIndex + 1) * pageSize,
    )

    currentPage++

    return {
      items: items as T[],
      totalPages,
    }
  }
}

export const itemsMock = [
  {
    uid: '1',
    name: 'Item 1',
  },
  {
    uid: '2',
    name: 'Item 2',
  },
  {
    uid: '3',
    name: 'Item 3',
  },
  {
    uid: '4',
    name: 'Item 4',
  },
  {
    uid: '5',
    name: 'Item 5',
  },
  {
    uid: '6',
    name: 'Item 6',
  },
  {
    uid: '7',
    name: 'Item 7',
  },
  {
    uid: '8',
    name: 'Item 8',
  },
  {
    uid: '9',
    name: 'Item 9',
  },
  {
    uid: '10',
    name: 'Item 10',
  },
]
