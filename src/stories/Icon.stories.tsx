import type { StoryObj } from '@storybook/nextjs'
import { ActionsMenu } from '../atoms/ActionsMenu'
import { Badge } from '../atoms/Badge'
import { Button, IconButton } from '../atoms/Button'
import { Icon } from '../atoms/Icon'

const meta = {
  title: 'Design System/Atoms/Icon',
  component: Icon,
  parameters: {
    docs: {
      description: {
        component:
          '<h2>Accessibility Usage Guideline of Icon Elements</h2>' +
          '<h3>Decorative Icons</h3>' +
          '<p>Icons should be <strong>decorative</strong> (hidden from screen readers) when:</p>' +
          '<ul>' +
          '<li>Appear next to text that already describes their purpose (e.g., a "Save" button with a floppy disk icon)</li>' +
          '<li>Serve purely as visual reinforcement without adding semantic meaning</li>' +
          '<li>Are inside interactive elements (buttons, links) that already have accessible labels</li>' +
          '<li>Would not cause information loss if removed</li>' +
          '</ul>' +
          '<h3>Informative Icons</h3>' +
          '<p>Icons should be <strong>informative</strong> (with accessibilityLabel) when:</p>' +
          '<ul>' +
          '<li>Stand alone without accompanying text</li>' +
          '<li>Convey information not expressed by adjacent text</li>' +
          '<li>Would cause information loss if removed</li>' +
          '</ul>',
      },
    },
  },
  tags: ['autodocs', 'Data display components'],
  argTypes: {
    name: {
      description:
        'The icon to display. See all available icons in the Icons page.',
      control: 'select',
    },
    decorative: {
      description:
        'When true, the icon is hidden from screen readers (aria-hidden="true"). Use this when the icon is purely visual and adjacent text already provides the necessary context.',
      control: 'boolean',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    accessibilityLabel: {
      description:
        'Accessible label for screen readers when the icon is informative (decorative=false). If not provided, falls back to the icon name.',
      control: 'text',
    },
    size: {
      description: 'Icon size using design system scale.',
      control: 'select',
    },
    variant: {
      description: 'Color variant for the icon.',
      control: 'select',
    },
  },
}

const figmaPrimaryDesign = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/DN2ova21vWqCRvPspBXgI1/Design-System?type=design&node-id=1719-258&mode=dev',
  },
}
export default meta
type Story = StoryObj<typeof meta>

export const DecorativeAdjacentText: Story = {
  name: 'Decorative (with adjacent text)',
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      <Icon name="Check" decorative variant="primary" />
      <span>Task completed</span>
    </div>
  ),
  args: {
    name: 'Check',
    decorative: true,
    variant: 'primary',
  },
  parameters: figmaPrimaryDesign,
}

// @ts-expect-error - Stories using render instead of args
export const DecorativeLabelText: Story = {
  name: 'Decorative (in button with label)',
  render: () => (
    <Button
      label="Delete item"
      leftIcon="Delete"
      accessibilityLabel="Delete item"
      variant="primary"
    />
  ),
  parameters: figmaPrimaryDesign,
}

// @ts-expect-error - Stories using render instead of args
export const InformativeStandalone: Story = {
  name: 'Informative (standalone)',
  render: () => <ActionsMenu accessibilityLabel="More options menu" />,
  parameters: figmaPrimaryDesign,
}

// @ts-expect-error - Stories using render instead of args
export const InformativeControlState: Story = {
  name: 'Informative (provide information to action)',
  render: () => (
    <Button
      label="Products"
      leftIcon="Add"
      accessibilityLabel="Add new product"
      variant="primary"
    />
  ),
  parameters: figmaPrimaryDesign,
}
