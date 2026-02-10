import { render } from '@testing-library/react'
import { QuantitySelector } from '../src/atoms/QuantitySelector'

describe('QuantitySelector', () => {
  it('renders', () => {
    const { getByRole, getByText, getAllByRole } = render(
      <QuantitySelector
        label="Quantity"
        accessibilityLabels={{
          decrement: 'Decrement quantity',
          increment: 'Increment quantity',
          input: 'Quantity of items to wishlist',
        }}
        id="quantity"
        name="quantity"
        value={1}
        onChange={() => alert('onChange')}
        max={10}
        step={0.0001}
        min={1}
        required={true}
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
