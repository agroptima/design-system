import { render } from '@testing-library/react'
import { Label } from '../src/atoms/Label'

describe('Label', () => {
  it('should render correctly', () => {
    const { queryByText } = render(<Label>Label</Label>)

    expect(queryByText('Label')).toBeInTheDocument()
  })
  it('should be required', () => {
    const { queryByText } = render(<Label required>Label</Label>)

    expect(queryByText('Label')).toHaveClass('is-required')
  })
  it('should be disabled', () => {
    const { queryByText } = render(<Label disabled>Label</Label>)

    expect(queryByText('Label')).toHaveClass('is-disabled')
  })
})
