import React from 'react'

import { CardsTable } from '../atoms/CardsTable'
import { CardsTableHead } from '../atoms/CardsTableHead'
import { CardsTableHeader } from '../atoms/CardsTableHeader'
import { CardsTableRow } from '../atoms/CardsTableRow'
import { CardsTableBody } from '../atoms/CardsTableBody'
import { CardsTableCell } from '../atoms/CardsTableCell'

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

const headers = ['Game title', 'Company address', 'Customer service email']

const rows = [
  {
    id: '1',
    columns: {
      name: 'Metal Gear Solid 5: The Phantom Pain',
      address:
        'Konami Digital Entertainment Co., Ltd. 1-11-1, Ginza, Chuo-ku, Tokyo, 104-0061 Japan',
      email: 'konami@fakemail.com',
    },
  },
  {
    id: '2',
    columns: {
      name: 'The Witcher 3',
      address: 'CD PROJEKT S.A. ul. Jagiellońska 74 03-301 Warszawa Poland',
      email: 'cdprojekt@fakemail.com',
    },
  },
  {
    id: '3',
    isDisabled: true,
    columns: {
      name: 'Tekken 8',
      address:
        'Bandai Namco Studios Inc. ; Address: 2-37-25 Eitai, Koto-ku, Tokyo 135-0034, Japan',
      email: 'namco@fakemail.com',
    },
  },
]

export const Primary = {
  render: (args) => (
    <CardsTable {...args}>
      <CardsTableHead>
        <CardsTableRow>
          {headers.map((header) => (
            <CardsTableHeader key={header}>{header}</CardsTableHeader>
          ))}
        </CardsTableRow>
      </CardsTableHead>
      <CardsTableBody>
        {rows.map((row) => {
          const cells = Object.entries(row.columns)
          return (
            <CardsTableRow key={row.id} isDisabled={row.isDisabled}>
              {cells.map(([columnId, value]) => (
                <CardsTableCell key={`${row.id}${columnId}`}>
                  {value}
                </CardsTableCell>
              ))}
            </CardsTableRow>
          )
        })}
      </CardsTableBody>
    </CardsTable>
  ),
}
