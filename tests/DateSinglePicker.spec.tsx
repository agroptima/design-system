import { render } from '@testing-library/react'
import React from 'react'
import { DateSinglePicker } from '../src/atoms/DatePicker/DateSinglePicker'

describe('DateSinglePicker', () => {
  it('renders with expected footer, language and month for a single type', () => {
    const { getByText } = render(
      <DateSinglePicker
        defaultValue={'2025-01-23'}
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
    expect(getByText('Fecha seleccionada: 23/1/2025')).toBeInTheDocument()
  })
})
