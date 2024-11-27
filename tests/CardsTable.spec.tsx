import React from 'react'
import { render } from '@testing-library/react'
import {
  CardsTable,
  CardsTableHead,
  CardsTableHeader,
  CardsTableRow,
  CardsTableBody,
  CardsTableCell,
  Alignment,
} from '../src/atoms/CardsTable'
import { IconButton } from '../src/atoms/Button'
import { Badge } from '../src/atoms/Badge'

describe('CardsTable', () => {
  it('renders', () => {
    const { getAllByRole } = render(
      <CardsTable>
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
            <CardsTableCell>
              <span>Metal Gear Solid 5: The Phantom Pain</span>
              <Badge
                accessibilityLabel="Game is bought"
                text="Bought"
                variant="success-outlined"
              />
            </CardsTableCell>
            <CardsTableCell>
              Konami Digital Entertainment Co., Ltd. 1-11-1, Ginza, Chuo-ku,
              Tokyo, 104-0061 Japan
            </CardsTableCell>
            <CardsTableCell>konami@fakemail.com</CardsTableCell>
            <CardsTableCell align={Alignment.Right}>6,99 €</CardsTableCell>
            <CardsTableCell className="actions" align={Alignment.Center}>
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
            <CardsTableCell align={Alignment.Right}>19,99 €</CardsTableCell>
            <CardsTableCell className="actions" align={Alignment.Center}>
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
            <CardsTableCell align={Alignment.Right}>79,99 €</CardsTableCell>
            <CardsTableCell className="actions" align={Alignment.Center}>
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
      </CardsTable>,
    )

    expect(getAllByRole('table').length).toBe(1)
    expect(getAllByRole('rowgroup').length).toBe(2)
    expect(getAllByRole('columnheader').length).toBeGreaterThan(1)
    expect(getAllByRole('row').length).toBeGreaterThan(1)
    expect(getAllByRole('cell').length).toBeGreaterThan(1)
  })
})
