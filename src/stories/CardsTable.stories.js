import React from 'react'

import {
  CardsTable,
  CardsTableHead,
  CardsTableHeader,
  CardsTableRow,
  CardsTableBody,
  CardsTableCell,
} from '../atoms/CardsTable'
import { IconButton } from '../atoms/Button'
import { Badge } from '../atoms/Badge'
import { Checkbox } from '../atoms/Checkbox'
import { Popover, PopoverMenu, PopoverMenuOption } from '../atoms/Popover'
import { Button } from '../atoms/Button'

const figmaPrimaryDesign = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/DN2ova21vWqCRvPspBXgI1/Design-System?type=design&node-id=2331-990&mode=dev',
  },
}

const meta = {
  title: 'Design System/Atoms/CardsTable',
  component: CardsTable,
  tags: ['autodocs'],
  parameters: figmaPrimaryDesign,
  argTypes: {
    variant: {
      description: 'Select variant used',
    },
    withTitle: {
      description: 'Add style to first column',
    },
  },
}

export default meta

export const Primary = {
  render: (args) => (
    <CardsTable withTitle {...args}>
      <CardsTableHead>
        <CardsTableRow>
          <CardsTableHeader>
            <Checkbox
              label="Select all table rows"
              hideLabel
              id="checkbox-select-all"
              indeterminate
              checked
              onChange={() => {}}
              variant="primary"
            />
            <span>Game title</span>
          </CardsTableHeader>
          <CardsTableHeader>Company address</CardsTableHeader>
          <CardsTableHeader>Customer service email</CardsTableHeader>
          <CardsTableHeader>Price</CardsTableHeader>
          <CardsTableHeader>State</CardsTableHeader>
          <CardsTableHeader actions>Actions</CardsTableHeader>
        </CardsTableRow>
      </CardsTableHead>
      <CardsTableBody>
        <CardsTableRow>
          <CardsTableCell titleWithActions={3}>
            <Checkbox
              accessibilityLabel="Select all table rows"
              id="checkbox-select-all"
              variant="primary"
            />
            <span>Zone of the Enders: The 2nd Runner</span>
            <Badge
              accessibilityLabel="Game is bought"
              icon="Export"
              variant="success-outlined"
            />
          </CardsTableCell>
          <CardsTableCell>
            Konami Digital Entertainment Co., Ltd. 1-11-1, Ginza, Chuo-ku,
            Tokyo, 104-0061 Japan
          </CardsTableCell>
          <CardsTableCell>konami@fakemail.com</CardsTableCell>
          <CardsTableCell>Not available</CardsTableCell>
          <CardsTableCell>
            <Badge
              accessibilityLabel="Game is bought"
              text="Bought"
              variant="success-outlined"
            />
          </CardsTableCell>
          <CardsTableCell actions>
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
          </CardsTableCell>
        </CardsTableRow>

        <CardsTableRow isDisabled>
          <CardsTableCell titleWithActions={2}>
            <Checkbox
              accessibilityLabel="Select all table rows"
              id="checkbox-select-all"
              variant="primary"
            />
            <span>The Witcher 3</span>
            <Badge
              accessibilityLabel="Game is bought"
              icon="Export"
              variant="success-outlined"
            />
          </CardsTableCell>
          <CardsTableCell>
            CD PROJEKT S.A. ul. Jagiellońska 74 03-301 Warszawa Poland
          </CardsTableCell>
          <CardsTableCell>cdprojekt@fakemail.com</CardsTableCell>
          <CardsTableCell align="right">19,99 €</CardsTableCell>
          <CardsTableCell>
            <Badge
              accessibilityLabel="Game is booked"
              text="Booked"
              variant="info-outlined"
            />
          </CardsTableCell>
          <CardsTableCell actions>
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
          </CardsTableCell>
        </CardsTableRow>

        <CardsTableRow isActive onClick={() => alert('Click')}>
          <CardsTableCell titleWithActions={1}>
            <Checkbox
              accessibilityLabel="Select all table rows"
              id="checkbox-select-all"
              variant="primary"
            />
            <span>Tekken 8</span>
          </CardsTableCell>
          <CardsTableCell>
            Bandai Namco Studios Inc. ; Address: 2-37-25 Eitai, Koto-ku, Tokyo
            135-0034, Japan
          </CardsTableCell>
          <CardsTableCell>namco@fakemail.com</CardsTableCell>
          <CardsTableCell align="right">79,99 €</CardsTableCell>
          <CardsTableCell>
            <Badge
              accessibilityLabel="Game is discontinued"
              text="Discontinued"
              variant="warning-outlined"
            />
          </CardsTableCell>
          <CardsTableCell actions>
            <IconButton
              icon="Edit"
              accessibilityLabel="Edit game"
              href="link.com"
            />
          </CardsTableCell>
        </CardsTableRow>
        <CardsTableRow>
          <CardsTableCell titleWithActions={5}>
            <Checkbox
              accessibilityLabel="Select all table rows"
              id="checkbox-select-all"
              variant="primary"
            />
            <span>Metal Gear Solid 5: The Phantom Pain</span>
          </CardsTableCell>
          <CardsTableCell>
            Konami Digital Entertainment Co., Ltd. 1-11-1, Ginza, Chuo-ku,
            Tokyo, 104-0061 Japan
          </CardsTableCell>
          <CardsTableCell>konami@fakemail.com</CardsTableCell>
          <CardsTableCell align="right">6,99 €</CardsTableCell>
          <CardsTableCell>
            <Badge
              accessibilityLabel="Game is bought"
              text="Bought"
              variant="success-outlined"
            />
          </CardsTableCell>
          <CardsTableCell actions>
            <Popover
              position="center"
              renderButton={({ toggle }) => (
                <IconButton icon="PDF" label="Open popover" onClick={toggle} />
              )}
            >
              <PopoverMenu>
                <PopoverMenuOption
                  href="#"
                  variant="primary"
                  title="Download PDF"
                />
              </PopoverMenu>
            </Popover>
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
              icon="Import"
              accessibilityLabel="Import game"
              href="link.com"
            />
            <IconButton
              icon="Delete"
              accessibilityLabel="Delete game"
              href="link.com"
            />
          </CardsTableCell>
        </CardsTableRow>
        <CardsTableRow>
          <CardsTableCell titleWithActions={5}>
            <Checkbox
              accessibilityLabel="Select all table rows"
              id="checkbox-select-all"
              variant="primary"
            />
            <span>Silent Hill</span>
          </CardsTableCell>
          <CardsTableCell>
            Konami Digital Entertainment Co., Ltd. 1-11-1, Ginza, Chuo-ku,
            Tokyo, 104-0061 Japan
          </CardsTableCell>
          <CardsTableCell>konami@fakemail.com</CardsTableCell>
          <CardsTableCell align="right">6,99 €</CardsTableCell>
          <CardsTableCell>
            <Badge
              accessibilityLabel="Game is wishlisted"
              text="Wishlist"
              variant="neutral-outlined"
            />
          </CardsTableCell>
          <CardsTableCell actions>
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
              icon="Import"
              accessibilityLabel="Import game"
              href="link.com"
            />
            <IconButton
              icon="Delete"
              accessibilityLabel="Delete game"
              href="link.com"
            />
            <IconButton
              icon="Info"
              accessibilityLabel="Info game"
              href="link.com"
            />
          </CardsTableCell>
        </CardsTableRow>
      </CardsTableBody>
    </CardsTable>
  ),
}

export const OnlyTitle = {
  render: (args) => (
    <CardsTable {...args}>
      <CardsTableBody>
        <CardsTableRow isActive onClick={() => alert('Click')}>
          <CardsTableCell titleWithActions={1}>Only title</CardsTableCell>
          <CardsTableCell actions align="right">
            <IconButton
              icon="Edit"
              accessibilityLabel="Edit game"
              href="link.com"
            />
          </CardsTableCell>
        </CardsTableRow>
      </CardsTableBody>
    </CardsTable>
  ),
}

export const DataAlignedVertically = {
  render: (args) => (
    <CardsTable vertically {...args}>
      <CardsTableBody>
        <CardsTableRow>
          <CardsTableCell>Silent Hill</CardsTableCell>
          <CardsTableCell>Metal Gear Solid 5</CardsTableCell>
          <CardsTableCell>Tekken 8</CardsTableCell>
          <CardsTableCell>The Witcher 3</CardsTableCell>
          <CardsTableCell>Zone of the Enders: The 2nd Runner</CardsTableCell>
        </CardsTableRow>
      </CardsTableBody>
    </CardsTable>
  ),
}
