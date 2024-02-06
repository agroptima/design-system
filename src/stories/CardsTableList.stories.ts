import { CardsTableList, SorterState } from '../atoms/CardsTableList'
import { StoryObj } from '@storybook/react'

const meta = {
  title: 'Design System/Atoms/Cards Table List',
  component: CardsTableList,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      description: 'Select variant used',
    },
    headers: {
      description: 'Array of values to be displayed on the headers',
    },
    rows: {
      description: 'Array of values to be displayed as the data',
    },
  },
}

const figmaPrimaryDesign = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/DN2ova21vWqCRvPspBXgI1/Design-System?type=design&node-id=1272-1328&mode=dev',
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    variant: 'primary',
    headers: [
      {
        label: 'Nombre comercial',
        icon: 'Info',
        sorter: SorterState.Inactive,
      },
      { label: 'Dirección', icon: 'Info', sorter: SorterState.Ascending },
      { label: 'Email', icon: 'Info', sorter: SorterState.Descending },
    ],
    rows: [
      {
        id: '1',
        isDisabled: false,
        data: {
          name: 'Bodegas Viladellops',
          address:
            'Finca Viladellops - Celler Gran, Viladellops, 08734 (Olèrdola, Vilafranca del Penedès)',
          email: 'bodegaviladellops@gmail.com',
        },
      },
      {
        id: '2',
        isDisabled: false,
        data: {
          name: 'Bodega Albet i Noya',
          address: 'Albet i Noya - Vins ecològics del Penedés',
          email: 'albetinoya_vinsecologics@gmail.com',
        },
      },
      {
        id: '3',
        isDisabled: true,
        data: {
          name: 'Can Bas',
          address: 'Can Bas',
          email: 'bodegacanbas@gmail.com',
        },
      },
    ],
  },
  parameters: figmaPrimaryDesign,
}
