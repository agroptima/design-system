import React from 'react'
import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Popover, PopoverMenu, PopoverMenuOption } from '../src/atoms/Popover'
import { Button } from '../src/atoms/Button'

describe('PopoverMenu', () => {
  it('shows when click on button', async () => {
    const user = userEvent.setup()
    const { getByText, getAllByRole } = render(
      <Popover
        renderButton={({ toggle }) => (
          <Button label="Open popover" onClick={toggle} />
        )}
      >
        <PopoverMenu>
          <PopoverMenuOption
            active
            href="#"
            variant="primary"
            title="Profile"
          />
          <PopoverMenuOption
            href="#"
            variant="primary"
            title="Change password"
          />
          <PopoverMenuOption
            disabled
            href="#"
            variant="primary"
            title="Logout"
          />
        </PopoverMenu>
      </Popover>,
    )

    await user.click(getByText(/Open popover/i))

    expect(getAllByRole('menuitem')[0]).toHaveClass(
      `popover-menu-option primary active`,
    )
    expect(getAllByRole('menuitem')[1]).toHaveClass(
      `popover-menu-option primary`,
    )
    expect(getAllByRole('menuitem')[2]).toHaveClass(
      `popover-menu-option primary disabled`,
    )
    expect(getByText(/Profile/i)).toBeInTheDocument()
    expect(getByText(/Change password/i)).toBeInTheDocument()
    expect(getByText(/Logout/i)).toBeInTheDocument()
  })

  it('hides when click outside of the menu', async () => {
    const user = userEvent.setup()
    const { getByText, queryByText } = render(
      <>
        <div>Outside</div>
        <Popover
          renderButton={({ toggle }) => (
            <Button label="Open popover" onClick={toggle} />
          )}
        >
          <PopoverMenu>
            <PopoverMenuOption
              active
              href="#"
              variant="primary"
              title="Profile"
            />
          </PopoverMenu>
        </Popover>
      </>,
    )

    await user.click(getByText(/Open popover/i))
    expect(getByText(/Profile/i)).toBeInTheDocument()
    await user.click(getByText(/Outside/i))

    expect(queryByText(/Profile/i)).not.toBeInTheDocument()
  })
})
