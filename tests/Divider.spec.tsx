import { render } from '@testing-library/react'
import { Divider } from '../src/atoms/Divider'

describe('Divider', () => {
  it('renders', () => {
    const { getByRole, getAllByRole, getByText } = render(
      <Divider
        title="A title divider"
        iconName="DeliveryNote"
        withIcon={false}
      />,
    )
    expect(getByRole('separator')).toHaveClass('divider primary')
    expect(getAllByRole('generic')[1]).toHaveClass('short line')
    expect(getAllByRole('generic')[3]).toHaveClass('long line')
    expect(getByText('A title divider')).toBeInTheDocument()
  })

  it('renders with icon', () => {
    const { getByRole, getAllByRole, getByText } = render(
      <Divider
        title="A title divider with icon"
        iconName="DeliveryNote"
        withIcon={true}
      />,
    )
    expect(getByRole('img')).toHaveClass(/icon/i)
    expect(getAllByRole('generic')[2]).toHaveClass('long line')
    expect(getByText('A title divider with icon')).toBeInTheDocument()
  })
})
