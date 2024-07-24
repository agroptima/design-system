import { Button } from '../atoms/Button'
import { EmptyState } from '../atoms/EmptyState'

const figmaPrimaryDesign = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/DN2ova21vWqCRvPspBXgI1/Design-System?type=design&node-id=1719-258&mode=dev',
  },
}

const meta = {
  title: 'Design System/Atoms/EmptyState',
  component: EmptyState,
  tags: ['autodocs'],
  argTypes: {
    icon: {
      description: 'A default icon is set for the empty state.',
    },
    variant: {
      description: 'Variant used.',
    },
  },
  parameters: figmaPrimaryDesign,
}

export default meta

export const PrimaryCustom = {
  render: () => (
    <EmptyState variant="primary">
      <p>
        There are no videogames yet. You can import videogames to your{' '}
        <a href="#">list</a>.
      </p>
      <Button label="Import videogames" onClick={() => alert('click')}></Button>
    </EmptyState>
  ),
}

export const PrimaryBasic = {
  render: () => (
    <EmptyState variant="primary">
      <p>No data</p>
    </EmptyState>
  ),
}
