import type { StoryObj } from '@storybook/nextjs'
import { CheckboxWithDivider } from '../atoms/CheckboxWithDivider'

const meta = {
  title: 'Design System/Atoms/CheckboxWithDivider',
  component: CheckboxWithDivider,
  parameters: {
    docs: {
      description: {
        component:
          '<h2>Usage guidelines</h2>' +
          '<p>A CheckboxWithDivider combines a Checkbox with a divider line, used as a selectable group header (e.g. "select all" on a list of items).</p>',
      },
    },
  },
  tags: ['autodocs', 'Layout components'],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    title: '19/01/2025 - My gaming diary',
    name: 'select-all',
    checked: false,
    onChange: () => console.log('change'),
  },
}

export const Checked: Story = {
  args: {
    title: '19/01/2025 - My gaming diary',
    name: 'select-all',
    checked: true,
    onChange: () => console.log('change'),
  },
}

export const Indeterminate: Story = {
  args: {
    title: '19/01/2025 - My gaming diary',
    name: 'select-all',
    checked: true,
    indeterminate: true,
    onChange: () => console.log('change'),
  },
}
