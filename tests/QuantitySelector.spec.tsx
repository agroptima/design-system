import React from 'react'
import { screen, render } from '@testing-library/react'
import { QuantitySelector } from '@/atoms/QuantitySelector'

describe('QuantitySelector', () => {
  it('renders', () => {
    const { getByRole, getByText, getAllByRole } = render(
      <QuantitySelector
        label="Quantity"
        accessibilityLabel="Quantity of items to wishlist"
        id="quantity-selector"
        decrementButton={{
          label: '-',
          onClick: () => alert('decrement'),
        }}
        incrementButton={{
          label: '+',
          onClick: () => alert('increment'),
        }}
        quantityInput={{
          label: 'Quantity input',
          hideLabel: true,
          name: 'quantity',
          value: 1,
          onChange: () => alert('onChange'),
          type: 'number',
          max: 10,
          step: 0.0001,
          min: 1,
          required: true,
        }}
      />,
    )

    expect(getByText(/Quantity/i)).toBeInTheDocument()
    expect(getAllByRole('button')[0]).toHaveClass(
      `button primary decrement-button`,
    )
    expect(getAllByRole('button')[1]).toHaveClass(
      `button primary increment-button`,
    )
    expect(getByRole('spinbutton')).toHaveValue(1)
  })
})
