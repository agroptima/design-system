import { render } from '@testing-library/react'
import { HelpText } from '../src/atoms/HelpText'

describe('HelpText', () => {
  it('should render correctly', () => {
    const text = 'Any help text'
    const { queryByText } = render(<HelpText helpText={text} />)

    expect(queryByText(text)).toBeInTheDocument()
  })

  it('should render errors', () => {
    const text = 'Any help text'
    const anError = 'An error'
    const anotherError = 'Another error'

    const { queryByText } = render(
      <HelpText helpText={text} errors={[anError, anotherError]} />,
    )

    expect(queryByText(text)).not.toBeInTheDocument()
    expect(queryByText(anError)).toBeInTheDocument()
    expect(queryByText(anotherError)).toBeInTheDocument()
  })
})
