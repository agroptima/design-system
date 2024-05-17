import React from 'react'
import { render } from '@testing-library/react'
import { Menu } from '@/atoms/Menu'
import { MenuOption } from '@/atoms/MenuOption'

describe('Menu', () => {
  it('renders first-level menu', () => {
    const { getByRole, getByText, getAllByRole } = render(
      <Menu>
        <MenuOption title="Tekken 8" icon="Edit" />
        <MenuOption
          isSelected
          title="The Legend of Zelda: Tears of the Kingdom"
          icon="Delete"
        />
      </Menu>,
    )

    expect(getByRole('menu')).toHaveClass(`menu primary`)
    expect(getAllByRole('menuitem')[1]).toHaveClass(`selected`)
    expect(getByText(/Tekken/i)).toBeInTheDocument()
    expect(getByText(/Zelda/i)).toBeInTheDocument()
    expect(getAllByRole('img')[0].title).toBe('Edit')
    expect(getAllByRole('img')[2].title).toBe('Delete')
  })

  it('renders second-level menu', () => {
    const { getByText, getAllByRole } = render(
      <Menu>
        <MenuOption title="Tekken 8" icon="Edit">
          <Menu isDropdown>
            <MenuOption title="Walkthrough" onClick={() => alert('click')} />
            <MenuOption
              isSelected
              title="Characters"
              onClick={() => alert('click')}
            />
            <MenuOption title="Story" onClick={() => alert('click')} />
          </Menu>
        </MenuOption>
        <MenuOption
          title="The Legend of Zelda: Tears of the Kingdom"
          icon="Delete"
        />
      </Menu>,
    )

    expect(getAllByRole('menu').length).toBe(2)
    expect(getAllByRole('menuitem')[2]).toHaveClass(`selected`)
    expect(getByText(/Tekken/i)).toBeInTheDocument()
    expect(getByText(/Walkthrough/i)).toBeInTheDocument()
    expect(getByText(/Characters/i)).toBeInTheDocument()
    expect(getByText(/Story/i)).toBeInTheDocument()
    expect(getByText(/Zelda/i)).toBeInTheDocument()
    expect(getAllByRole('img')[0].title).toBe('Edit')
    expect(getAllByRole('img')[2].title).toBe('AngleDown')
    expect(getAllByRole('img')[5].title).toBe('Delete')
  })
})
