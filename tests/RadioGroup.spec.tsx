import { render } from '@testing-library/react'
import type { Variant } from '../src/atoms/RadioGroup'
import { RadioGroup } from '../src/atoms/RadioGroup'

describe('RadioButton', () => {
  const variants: Variant[] = ['primary']

  it.each(variants)('renders with label and expected styles', (variant) => {
    const { getAllByRole, getByText, getByLabelText } = render(
      <RadioGroup
        options={[
          { label: 'Party games', value: 'party' },
          { label: 'Platform games', value: 'platform' },
        ]}
        name="videogames-preference"
        label="Videogame preference"
        variant={variant}
        helpText="This is a help text"
      />,
    )
    expect(getAllByRole('generic')[1]).toHaveClass(`radio-group ${variant}`)
    expect(getByLabelText('Party games')).toHaveClass(`radio`)
    expect(getByLabelText('Platform games')).toHaveClass(`radio`)
    expect(getByText(/This is a help text/i)).toBeInTheDocument()
  })
  it('renders with default value', () => {
    const { getByLabelText } = render(
      <RadioGroup
        options={[
          { label: 'Party games', value: 'party' },
          { label: 'Platform games', value: 'platform' },
        ]}
        name="videogames-preference"
        label="Videogame preference"
        defaultValue="party"
      />,
    )
    expect(getByLabelText('Party games')).toBeChecked()
  })
  it('renders with errors', () => {
    const { getByText } = render(
      <RadioGroup
        options={[
          { label: 'Party games', value: 'party' },
          { label: 'Platform games', value: 'platform' },
        ]}
        name="videogames-preference"
        label="Videogame preference"
        helpText="Help text"
        errors={['This is an error']}
      />,
    )
    expect(getByText(/This is an error/i)).toBeInTheDocument()
  })
})
