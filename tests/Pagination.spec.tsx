import { render } from '@testing-library/react'
import React from 'react'
import {
  Ellipsis,
  Pagination,
  PaginationArrow,
  PaginationNumber,
} from '../src/atoms/Pagination'

describe('Pagination', () => {
  it('renders Pagination components', () => {
    const { getByRole, getByText, getAllByText, getByLabelText } = render(
      <Pagination>
        <PaginationArrow
          icon="AngleLeft"
          href="https://google.com"
          accessibilityLabel="Previous page"
          variant="primary"
          disabled
        />

        <PaginationNumber
          label="1"
          href="https://google.com"
          accessibilityLabel="Go to page 1"
          variant="primary"
        />

        <Ellipsis />

        <PaginationNumber
          label="4"
          href="https://google.com"
          accessibilityLabel="Go to page 4"
          variant="primary"
        />
        <PaginationNumber
          label="5"
          href="https://google.com"
          accessibilityLabel="Go to page 5"
          variant="primary"
        />
        <PaginationNumber
          label="6"
          href="https://google.com"
          accessibilityLabel="Go to page 6"
          variant="primary"
          selected
        />
        <PaginationNumber
          label="7"
          href="https://google.com"
          accessibilityLabel="Go to page 7"
          variant="primary"
        />
        <PaginationNumber
          label="8"
          href="https://google.com"
          accessibilityLabel="Go to page 8"
          variant="primary"
        />

        <Ellipsis />

        <PaginationNumber
          label="50"
          href="https://google.com"
          accessibilityLabel="Go to page 50"
          variant="primary"
        />

        <PaginationArrow
          icon="AngleRight"
          href="https://google.com"
          accessibilityLabel="Next page"
          variant="primary"
        />
      </Pagination>,
    )

    expect(getByRole('navigation')).toHaveClass(`pagination`)
    expect(getByLabelText('Previous page')).toBeInTheDocument()
    expect(getByLabelText('Next page')).toBeInTheDocument()
    expect(getByText('1')).toBeInTheDocument()
    expect(getByText('4')).toBeInTheDocument()
    expect(getByText('5')).toBeInTheDocument()
    expect(getByText('6')).toBeInTheDocument()
    expect(getByText('7')).toBeInTheDocument()
    expect(getByText('8')).toBeInTheDocument()
    expect(getByText('50')).toBeInTheDocument()
    expect(getAllByText('...').length).toBe(2)
    expect(getByText('6')).toHaveClass(`selected`)
    expect(getByLabelText('Previous page')).toHaveClass(`disabled`)
  })
})
