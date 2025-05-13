import { render } from '@testing-library/react'
import React from 'react'
import { TabLink, TabMenu } from '../src/atoms/TabMenu'

describe('TabMenu', () => {
  it('renders tabs menu', () => {
    const { getByRole, getByText } = render(
      <TabMenu>
        <TabLink title="Videogames" href="some-link" />
        <TabLink title="Books" href="some-link" isActive />
        <TabLink title="Cinema" href="some-link" />
        <TabLink title="Graphic Novels" href="some-link" disabled />
      </TabMenu>,
    )

    expect(getByRole('menu')).toHaveClass(`tabmenu primary`)
    expect(getByRole('link', { name: 'Books' })).toHaveClass(`active`)
    expect(getByRole('link', { name: 'Graphic Novels' })).toHaveClass(
      `disabled`,
    )
    expect(getByText(/Videogames/i)).toBeInTheDocument()
    expect(getByText(/Cinema/i)).toBeInTheDocument()
  })
})
