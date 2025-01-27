import { render } from '@testing-library/react'
import React from 'react'
import { DatePicker } from '../src/atoms/DatePicker'

describe('DatePicker', () => {
  it('renders with expected footer, language and month', () => {
    const { getByText } = render(
      <DatePicker
        footer="From 2024-01-01 to 2024-01-15"
        selected={{ from: new Date(2025, 0, 1), to: new Date(2025, 0, 15) }}
        onSelect={() => jest.fn()}
        lng={'es'}
      />,
    )
    expect(getByText('enero 2025')).toBeInTheDocument()
    expect(getByText('lu')).toBeInTheDocument()
    expect(getByText('ma')).toBeInTheDocument()
    expect(getByText('mi')).toBeInTheDocument()
    expect(getByText('ju')).toBeInTheDocument()
    expect(getByText('vi')).toBeInTheDocument()
    expect(getByText('sá')).toBeInTheDocument()
    expect(getByText('do')).toBeInTheDocument()
    expect(getByText('From 2024-01-01 to 2024-01-15')).toBeInTheDocument()
  })
})
