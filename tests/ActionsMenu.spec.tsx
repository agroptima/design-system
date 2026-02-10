import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import { ActionsMenu } from '../src/atoms/ActionsMenu'
import { PopoverMenuOption } from '../src/atoms/Popover'

describe('ActionsMenu', () => {
  it('is shown when IconButton is clicked', async () => {
    const user = userEvent.setup()
    const { getByText, getAllByRole, getByLabelText } = render(
      <ActionsMenu accessibilityLabel="More options">
        <PopoverMenuOption
          active
          href="#"
          variant="primary"
          title="Save"
          leftIcon="Export"
        />
        <PopoverMenuOption
          href="#"
          variant="primary"
          title="Restart level"
          leftIcon="Export"
        />
        <PopoverMenuOption
          disabled
          href="#"
          variant="primary"
          title="Back to main menu"
          leftIcon="Export"
        />
      </ActionsMenu>,
    )

    await user.click(getByLabelText(/More options/i))

    expect(getAllByRole('menuitem')[0]).toHaveClass(
      `popover-menu-option primary active`,
    )
    expect(getAllByRole('menuitem')[1]).toHaveClass(
      `popover-menu-option primary`,
    )
    expect(getAllByRole('menuitem')[2]).toHaveClass(
      `popover-menu-option primary disabled`,
    )
    expect(getByText(/Save/i)).toBeInTheDocument()
    expect(getByText(/Restart/i)).toBeInTheDocument()
    expect(getByText(/Back/i)).toBeInTheDocument()
  })

  it('hides when clicking outside of the menu', async () => {
    document.head.insertAdjacentHTML(
      'beforeend',
      `<style>.hidden { display: none !important; }</style>`,
    )
    const user = userEvent.setup()
    const { getByText, queryByText, getByLabelText } = render(
      <>
        <div>Outside</div>
        <ActionsMenu accessibilityLabel="More options">
          <PopoverMenuOption
            active
            href="#"
            variant="primary"
            title="Save"
            leftIcon="Export"
          />
          <PopoverMenuOption
            href="#"
            variant="primary"
            title="Restart level"
            leftIcon="Export"
          />
          <PopoverMenuOption
            disabled
            href="#"
            variant="primary"
            title="Back to main menu"
            leftIcon="Export"
          />
        </ActionsMenu>
      </>,
    )

    await user.click(getByLabelText(/More options/i))
    expect(getByText(/Save/i)).toBeInTheDocument()
    await user.click(getByText(/Outside/i))

    expect(queryByText(/Save/i)).not.toBeVisible()
  })
})
