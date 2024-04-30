import React from 'react'

import { CardsTable } from '../atoms/CardsTable'
import { CardsTableHead } from '../atoms/CardsTableHead'
import { CardsTableHeader } from '../atoms/CardsTableHeader'
import { CardsTableRow } from '../atoms/CardsTableRow'
import { CardsTableBody } from '../atoms/CardsTableBody'
import { CardsTableCell } from '../atoms/CardsTableCell'
import { Button } from '../atoms/Button'
import { IconButton } from '../atoms/IconButton'

const meta = {
  title: 'Design System/Atoms/CardsTable',
  component: CardsTable,
  tags: ['autodocs'],
}

export default meta

export const Primary = {
  render: (args) => (
    <CardsTable {...args}>
      <CardsTableHead>
        <CardsTableRow>
          <CardsTableHeader>Game title</CardsTableHeader>
          <CardsTableHeader>Company address</CardsTableHeader>
          <CardsTableHeader>Customer service email</CardsTableHeader>
          <CardsTableHeader>Price</CardsTableHeader>
          <CardsTableHeader className="actions">Actions</CardsTableHeader>
        </CardsTableRow>
      </CardsTableHead>
      <CardsTableBody>
        <CardsTableRow>
          <CardsTableCell>Metal Gear Solid 5: The Phantom Pain</CardsTableCell>
          <CardsTableCell>
            Konami Digital Entertainment Co., Ltd. 1-11-1, Ginza, Chuo-ku,
            Tokyo, 104-0061 Japan
          </CardsTableCell>
          <CardsTableCell>konami@fakemail.com</CardsTableCell>
          <CardsTableCell align="right">6,99 €</CardsTableCell>
          <CardsTableCell className="actions" align="center">
            <div style={{ display: 'flex', gap: '1.75rem' }}>
              <IconButton
                icon="Edit"
                accessibilityLabel="Edit game"
                href="link.com"
              />
              <IconButton
                icon="Export"
                accessibilityLabel="Export game"
                href="link.com"
              />
              <IconButton
                icon="Delete"
                accessibilityLabel="Delete game"
                href="link.com"
              />
            </div>
          </CardsTableCell>
        </CardsTableRow>

        <CardsTableRow>
          <CardsTableCell>The Witcher 3</CardsTableCell>
          <CardsTableCell>
            CD PROJEKT S.A. ul. Jagiellońska 74 03-301 Warszawa Poland
          </CardsTableCell>
          <CardsTableCell>cdprojekt@fakemail.com</CardsTableCell>
          <CardsTableCell align="right">19,99 €</CardsTableCell>
          <CardsTableCell className="actions" align="center">
            <div style={{ display: 'flex', gap: '1.75rem' }}>
              <IconButton
                icon="Edit"
                accessibilityLabel="Edit game"
                href="link.com"
              />
              <IconButton
                icon="Export"
                accessibilityLabel="Export game"
                href="link.com"
              />
              <IconButton
                icon="Delete"
                accessibilityLabel="Delete game"
                href="link.com"
              />
            </div>
          </CardsTableCell>
        </CardsTableRow>

        <CardsTableRow>
          <CardsTableCell>Tekken 8</CardsTableCell>
          <CardsTableCell>
            Bandai Namco Studios Inc. ; Address: 2-37-25 Eitai, Koto-ku, Tokyo
            135-0034, Japan
          </CardsTableCell>
          <CardsTableCell>namco@fakemail.com</CardsTableCell>
          <CardsTableCell align="right">79,99 €</CardsTableCell>
          <CardsTableCell className="actions" align="center">
            <div style={{ display: 'flex', gap: '1.75rem' }}>
              <IconButton
                icon="Edit"
                accessibilityLabel="Edit game"
                href="link.com"
              />
              <IconButton
                icon="Export"
                accessibilityLabel="Export game"
                href="link.com"
              />
              <IconButton
                icon="Delete"
                accessibilityLabel="Delete game"
                href="link.com"
              />
            </div>
          </CardsTableCell>
        </CardsTableRow>
      </CardsTableBody>
    </CardsTable>
  ),
}
