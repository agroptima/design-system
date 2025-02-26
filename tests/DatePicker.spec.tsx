import { render } from '@testing-library/react'
import React from 'react'
import { DatePicker } from '../src/atoms/DatePicker/DatePicker'

describe('DatePicker', () => {
  it('renders with expected footer, language and month for a range type', () => {
    const { getByText } = render(
      <DatePicker
        selected={{ from: new Date(2025, 0, 1), to: new Date(2025, 0, 15) }}
        onSelect={() => jest.fn()}
        lng={'es'}
        type="range"
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
  it('renders with expected footer, language and month for a single type', () => {
    const { getByText } = render(
      <DatePicker
        selected={new Date(2025, 1, 15)}
        onSelect={() => jest.fn()}
        lng={'es'}
        type="single"
      />,
    )

    expect(getByText('febrero 2025')).toBeInTheDocument()
    expect(getByText('lu')).toBeInTheDocument()
    expect(getByText('ma')).toBeInTheDocument()
    expect(getByText('mi')).toBeInTheDocument()
    expect(getByText('ju')).toBeInTheDocument()
    expect(getByText('vi')).toBeInTheDocument()
    expect(getByText('sá')).toBeInTheDocument()
    expect(getByText('do')).toBeInTheDocument()
    expect(getByText('Fecha seleccionada: 15/2/2025')).toBeInTheDocument()
  })
})
