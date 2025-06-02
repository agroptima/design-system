import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { IconButton } from '../src/atoms/Button'
import { Divider } from '../src/atoms/Divider'

describe('Divider', () => {
  it('renders', () => {
    const { getByRole, getByText, container } = render(
      <Divider title="A title divider" icon="Line" />,
    )
    expect(getByRole('separator')).toHaveClass('divider primary')
    expect(container.querySelector('.short.line')).toBeInTheDocument()
    expect(container.querySelector('.long.line')).toBeInTheDocument()
    expect(getByText('A title divider')).toBeInTheDocument()
  })

  it('renders with icon', () => {
    const { getByRole, container, getByText } = render(
      <Divider title="A title divider with icon" icon="DeliveryNote" />,
    )
    expect(getByRole('img')).toHaveClass(/icon/i)
    expect(container.querySelector('.long.line')).toBeInTheDocument()
    expect(getByText('A title divider with icon')).toBeInTheDocument()
  })

  it('renders with button', async () => {
    const user = userEvent.setup()
    const handleClick = jest.fn()

    const { getByRole, container, getByText } = render(
      <Divider title="A title divider with button" icon="DeliveryNote">
        <IconButton
          icon="Delete"
          accessibilityLabel="Delete"
          type="button"
          onClick={handleClick}
        />
      </Divider>,
    )
    await user.click(getByRole('button', { name: 'Delete' }))

    expect(getByRole('img', { name: 'DeliveryNote' })).toBeInTheDocument()
    expect(container.querySelector('.long.line')).toBeInTheDocument()
    expect(getByText('A title divider with button')).toBeInTheDocument()
    expect(handleClick).toHaveBeenCalledTimes(1)
  })
})
