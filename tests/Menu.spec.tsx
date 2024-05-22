import React from 'react'
import { render } from '@testing-library/react'
import { Menu } from '@/atoms/Menu/Menu'
import { MenuDropdown, MenuLink } from '@/atoms/Menu'

describe('Menu', () => {
  it('renders first-level menu', () => {
    const { getByRole, getByText } = render(
      <Menu>
        <MenuLink title="Tekken 8" icon="Edit" href="#" />
        <MenuLink
          isActive
          title="The Legend of Zelda: Tears of the Kingdom"
          icon="Delete"
          href="#"
        />
      </Menu>,
    )

    expect(getByRole('menu')).toHaveClass(`menu primary`)
    expect(
      getByRole('link', { name: 'The Legend of Zelda: Tears of the Kingdom' }),
    ).toHaveClass(`active`)
    expect(getByText(/Tekken/i)).toBeInTheDocument()
    expect(getByText(/Zelda/i)).toBeInTheDocument()
    expect(getByRole('img', { name: 'Edit' })).toBeInTheDocument()
    expect(getByRole('img', { name: 'Delete' })).toBeInTheDocument()
  })

  it('renders second-level menu', () => {
    const { getByText, getAllByRole, getByRole } = render(
      <Menu>
        <MenuDropdown title="Tekken 8" icon="Edit">
          <MenuLink title="Walkthrough" href="#" />
          <MenuLink isActive title="Characters" href="#" />
          <MenuLink title="Story" href="#" />
        </MenuDropdown>
        <MenuLink
          title="The Legend of Zelda: Tears of the Kingdom"
          icon="Delete"
          href="#"
        />
      </Menu>,
    )

    expect(getAllByRole('menu').length).toBe(2)
    expect(getByRole('link', { name: 'Characters' })).toHaveClass(`active`)
    expect(getByText(/Tekken/i)).toBeInTheDocument()
    expect(getByText(/Walkthrough/i)).toBeInTheDocument()
    expect(getByText(/Characters/i)).toBeInTheDocument()
    expect(getByText(/Story/i)).toBeInTheDocument()
    expect(getByText(/Zelda/i)).toBeInTheDocument()
    expect(getByRole('img', { name: 'Edit' })).toBeInTheDocument()
    expect(getByRole('img', { name: 'AngleDown' })).toBeInTheDocument()
    expect(getByRole('img', { name: 'Delete' })).toBeInTheDocument()
  })
})
