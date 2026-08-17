import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import { InputWithSelect } from '../src/atoms/InputWithSelect'

const options = [
  { id: 'percentage', label: '%' },
  { id: 'kilogram', label: 'kg' },
]

describe('InputWithSelect', () => {
  it('renders the input and the select suffix with its default option', () => {
    render(
      <InputWithSelect
        label="Discount"
        name="discount"
        options={options}
        selectAccessibilityLabel="Select unit"
        type="number"
      />,
    )

    expect(screen.getByRole('spinbutton')).toBeInTheDocument()
    expect(
      screen.getByRole('combobox', { name: 'Select unit: %' }),
    ).toHaveTextContent('%')
  })

  it('opens the options list and updates the selected option on click', async () => {
    const user = userEvent.setup()
    const handleSelectChange = jest.fn()
    render(
      <InputWithSelect
        label="Discount"
        name="discount"
        onSelectChange={handleSelectChange}
        options={options}
        selectAccessibilityLabel="Select unit"
        type="number"
      />,
    )

    await user.click(screen.getByRole('combobox', { name: 'Select unit: %' }))
    expect(screen.getByRole('listbox')).toBeInTheDocument()

    await user.click(screen.getByRole('option', { name: 'kg' }))

    expect(handleSelectChange).toHaveBeenCalledWith('kilogram')
    expect(
      screen.getByRole('combobox', { name: 'Select unit: kg' }),
    ).toHaveTextContent('kg')
    expect(screen.queryByRole('listbox')).not.toBeInTheDocument()
  })

  it('renders an empty selection without crashing when options is empty', () => {
    render(
      <InputWithSelect
        label="Discount"
        name="discount"
        options={[]}
        selectAccessibilityLabel="Select unit"
        type="number"
      />,
    )

    expect(
      screen.getByRole('combobox', { name: 'Select unit:' }),
    ).toHaveTextContent('')
  })
})
