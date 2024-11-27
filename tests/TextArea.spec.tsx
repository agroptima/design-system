import { render } from '@testing-library/react'
import { TextArea } from '../src/atoms/TextArea'

describe('TextArea', () => {
  it('renders', () => {
    const { getByPlaceholderText, getAllByRole, getByRole, getByText } = render(
      <TextArea
        accessibilityLabel="Fill the textarea"
        helpText="This text can help you"
        id="textarea"
        label="Description"
        name="textarea"
        placeholder="Write here..."
        variant="primary"
      />,
    )

    expect(getByRole('textbox')).toBeInTheDocument()
    expect(getAllByRole('generic')[1]).toHaveClass('input-group primary')
    expect(getByText('Description')).toBeInTheDocument()
    expect(getByPlaceholderText(/Write here.../)).toBeInTheDocument()
  })

  it('renders with errors', () => {
    const { getAllByRole, getByText } = render(
      <TextArea
        accessibilityLabel="Fill the form textarea"
        errors={['Che che che', 'Another error']}
        helpText="This text can help you"
        id="textarea"
        label="Description"
        name="textarea"
        placeholder="Write here..."
        variant="primary"
      />,
    )

    expect(getAllByRole('generic')[1]).toHaveClass('input-group invalid')
    expect(getByText(/Che che che/i)).toBeInTheDocument()
    expect(getByText(/Another error/i)).toBeInTheDocument()
  })
})
