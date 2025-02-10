import { render } from '@testing-library/react'
import { Divider } from '../src/atoms/Divider'

describe('Divider', () => {
  it('renders', () => {
    const { getAllByRole, getByText, debug } = render(
      <Divider title="A title divider" withIcon={false} />,
    )
    debug()
    expect(getAllByRole('generic')[1]).toHaveClass('divider-container primary')
    expect(getAllByRole('generic')[2]).toHaveClass('short-line')
    expect(getAllByRole('generic')[4]).toHaveClass('line')
    expect(getByText('A title divider')).toBeInTheDocument()
  })

  it('renders with icon', () => {
    const { debug, getByRole, getAllByRole, getByText } = render(
      <Divider title="A title divider with icon" withIcon={true} />,
    )
    debug()
    expect(getByRole('img')).toHaveClass(/icon/i)
    expect(getAllByRole('generic')[3]).toHaveClass('line')
    expect(getByText('A title divider with icon')).toBeInTheDocument()
  })
})
