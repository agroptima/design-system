import React from 'react'
import { render } from '@testing-library/react'
import { PopoverMenu, PopoverMenuOption } from '@/atoms/PopoverMenu'

describe('PopoverMenu', () => {
  it('renders', () => {
    const { getByText, getAllByRole } = render(
      <PopoverMenu>
        <PopoverMenuOption active href="#" variant="primary" title="Profile" />
        <PopoverMenuOption href="#" variant="primary" title="Change password" />
        <PopoverMenuOption disabled href="#" variant="primary" title="Logout" />
      </PopoverMenu>,
    )

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
})
