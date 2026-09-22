import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { CheckboxWithDivider } from '../src/atoms/CheckboxWithDivider'

describe('CheckboxWithDivider', () => {
  it('renders the title and a divider line', () => {
    const { getByRole, getByText, container } = render(
      <CheckboxWithDivider
        title="19/01/2025 - My gaming diary"
        name="select-all"
        checked={false}
        onChange={() => {}}
      />,
    )

    expect(getByRole('checkbox')).toBeInTheDocument()
    expect(getByText('19/01/2025 - My gaming diary')).toBeInTheDocument()
    expect(container.querySelector('.flex-grow.line')).toBeInTheDocument()
  })

  it('toggles when clicking the title, thanks to the native label', async () => {
    const user = userEvent.setup()
    const handleChange = jest.fn()

    const { getByText } = render(
      <CheckboxWithDivider
        title="19/01/2025 - My gaming diary"
        name="select-all"
        checked={false}
        onChange={handleChange}
      />,
    )

    await user.click(getByText('19/01/2025 - My gaming diary'))

    expect(handleChange).toHaveBeenCalledTimes(1)
  })

  it('renders as indeterminate', () => {
    const { getByRole } = render(
      <CheckboxWithDivider
        title="19/01/2025 - My gaming diary"
        name="select-all"
        checked
        indeterminate
        onChange={() => {}}
      />,
    )

    expect(getByRole('checkbox')).toBeChecked()
  })

  it('falls back to the title as the accessible name', () => {
    const { getByRole } = render(
      <CheckboxWithDivider
        title="19/01/2025 - My gaming diary"
        name="select-all"
        checked={false}
        onChange={() => {}}
      />,
    )

    expect(
      getByRole('checkbox', { name: '19/01/2025 - My gaming diary' }),
    ).toBeInTheDocument()
  })
})
