import React from 'react'
import { screen, render } from '@testing-library/react'
import { Menu } from '@/atoms/Menu'
import { MenuOption } from '@/atoms/MenuOption'

describe('Menu', () => {
  it('renders first-level menu', () => {
    const { getByRole, getByText, getAllByRole } = render(
      <Menu>
        <MenuOption title="Tekken 8" icon="Edit" />
        <MenuOption
          title="The Legend of Zelda: Tears of the Kingdom"
          icon="Delete"
        />
      </Menu>,
    )
    expect(getByRole('menu')).toHaveClass(`menu primary`)
    expect(getByText(/Tekken/i)).toBeInTheDocument()
    expect(getByText(/Zelda/i)).toBeInTheDocument()
    expect(getAllByRole('img')[0].title).toBe('Edit')
    expect(getAllByRole('img')[2].title).toBe('Delete')
  })
})
