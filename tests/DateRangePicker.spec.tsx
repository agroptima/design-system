import { getAllByRole, render } from '@testing-library/react'
import React from 'react'
import { DateRangePicker } from '../src/atoms/DatePicker/DateRangePicker'

describe('DateRangePicker', () => {
  it('renders with expected footer, language and month', () => {
    const { getByText } = render(
      <DateRangePicker
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
    expect(
      getByText('Rango de fechas seleccionado: desde 1/1/2025 a 15/1/2025'),
    ).toBeInTheDocument()
  })
})
