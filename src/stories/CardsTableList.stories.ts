import { CardsTableList } from '../atoms/CardsTableList'
import { StoryObj } from '@storybook/react'

const meta = {
  title: 'Design System/Atoms/Cards Table List',
  component: CardsTableList,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      description: 'Select variant used',
    },
    summary: {
      description:
        'Summary of the table purpose and structure for assistive technologies',
    },
    headers: {
      description:
        'Array of values to be displayed on the headers. columnId value must match with rows columns ids.',
    },
    rows: {
      description: 'Array of values to be displayed as the data',
    },
  },
}

const figmaPrimaryDesign = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/DN2ova21vWqCRvPspBXgI1/Design-System?type=design&node-id=2331-990&mode=dev',
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const WithSorting: Story = {
  args: {
    variant: 'primary',
    summary: 'Videogames companies contact information',
    headers: [
      {
        label: 'Game title',
        icon: 'Info',
        columnId: 'name',
        isSortable: true,
      },
      {
        label: 'Company address',
        icon: 'Info',
        columnId: 'address',
        isSortable: false,
      },
      {
        label: 'Customer service email',
        columnId: 'email',
        icon: 'Info',
        isSortable: true,
      },
    ],
    rows: [
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
    ],
  },
  parameters: figmaPrimaryDesign,
}

export const NoSorting: Story = {
  args: {
    variant: 'primary',
    summary: 'Videogames companies contact information',
    headers: [
      {
        label: 'Game title',
        icon: 'Info',
        columnId: 'name',
      },
      {
        label: 'Company address',
        icon: 'Info',
        columnId: 'address',
      },
      {
        label: 'Customer service email',
        columnId: 'email',
        icon: 'Info',
      },
    ],
    rows: [
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
    ],
  },
  parameters: figmaPrimaryDesign,
}
