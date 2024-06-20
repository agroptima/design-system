import React from 'react'
import { render } from '@testing-library/react'
import { CardMenuOption } from '@/atoms/CardMenu/CardMenuOption'

describe('CardMenuOption', () => {
  it('renders', () => {
    const { getByRole, getByText, getAllByRole } = render(
      <CardMenuOption
        id="option-one"
        href="#"
        icon="Info"
        title="It's dangerous to go alone!"
        description="Take this sword!"
      />,
    )

    expect(getByRole('menuitem')).toHaveClass(`card-menu-option primary`)
    expect(getByText(/dangerous to go alone/i)).toBeInTheDocument()
    expect(getByText(/this sword/i)).toBeInTheDocument()
    expect(getAllByRole('img')[0].title).toBe('Info')
  })
})
