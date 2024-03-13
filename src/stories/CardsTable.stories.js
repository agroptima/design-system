import React from 'react'

import { CardsTable } from '../atoms/CardsTable'
import { CardsTableHead } from '../atoms/CardsTableHead'
import { CardsTableHeader } from '../atoms/CardsTableHeader'
import { CardsTableRow } from '../atoms/CardsTableRow'
import { CardsTableBody } from '../atoms/CardsTableBody'
import { CardsTableCell } from '../atoms/CardsTableCell'
import { Button } from '../atoms/Button'

const meta = {
  title: 'Design System/Atoms/CardsTable',
  component: CardsTable,
  tags: ['autodocs'],
  subcomponents: {
    CardsTableHead,
    CardsTableHeader,
    CardsTableRow,
    CardsTableBody,
    CardsTableCell,
  },
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
        </CardsTableRow>
      </CardsTableHead>
      <CardsTableBody>
        <CardsTableRow>
          <CardsTableCell>Metal Gear Solid 5: The Phantom Pain</CardsTableCell>
          <CardsTableCell noWrap>
            Konami Digital Entertainment Co., Ltd. 1-11-1, Ginza, Chuo-ku,
            Tokyo, 104-0061 Japan
          </CardsTableCell>
          <CardsTableCell align="right">konami@fakemail.com</CardsTableCell>
        </CardsTableRow>

        <CardsTableRow>
          <CardsTableCell>The Witcher 3</CardsTableCell>
          <CardsTableCell noWrap>
            CD PROJEKT S.A. ul. Jagiellońska 74 03-301 Warszawa Poland
          </CardsTableCell>
          <CardsTableCell align="right">cdprojekt@fakemail.com</CardsTableCell>
        </CardsTableRow>

        <CardsTableRow>
          <CardsTableCell>Tekken 8</CardsTableCell>
          <CardsTableCell noWrap>
            Bandai Namco Studios Inc. ; Address: 2-37-25 Eitai, Koto-ku, Tokyo
            135-0034, Japan
          </CardsTableCell>
          <CardsTableCell align="right">
            namco@fakemail.com <Button label="click" />
          </CardsTableCell>
        </CardsTableRow>
      </CardsTableBody>
    </CardsTable>
  ),
}
