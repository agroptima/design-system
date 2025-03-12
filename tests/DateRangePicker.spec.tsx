import { render } from '@testing-library/react'
import React from 'react'
import { DateRangePicker } from '../src/atoms/DatePicker/DateRangePicker'

describe('DateRangePicker', () => {
  it('renders with expected footer, language and month for a range type', () => {
    const { getByText } = render(
      <DateRangePicker
        defaultValue={{ from: '2025-01-12', to: '2025-01-20' }}
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
