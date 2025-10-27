import type { StoryObj } from '@storybook/nextjs'
import { CheckableTag, CheckableTagGroup } from '../atoms/CheckableTag'

const figmaPrimaryDesign = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/design/DN2ova21vWqCRvPspBXgI1/Design-System?node-id=3287-999&m=dev',
  },
}

const meta = {
  title: 'Design System/Atoms/CheckableTag',
  component: CheckableTag,
  tags: ['autodocs', 'Action components'],
  argTypes: {
    variant: {
      description: 'Component variant used',
    },
    label: {
      description: 'Component label',
    },
    isDisabled: {
      description: 'Is the component disabled?',
    },
    isChecked: {
      description: 'Is the component checked?',
    },
    onSelect: {
      description: 'Callback triggered when clicking on an option',
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          '<h2>Usage guidelines</h2>' +
          '<p>CheckableTags allow users to categorize content. This component is used as a quick access to the most used filter.</p>' +
          '<ul>' +
          ' <li>Allow bulk actions</li><li>Avoid disabling a large group of tags</li>' +
          '</ul>',
      },
    },
    figmaPrimaryDesign,
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const TagGroup: Story = {
  render: () => (
    <CheckableTagGroup>
      <CheckableTag
        variant="primary"
        label="RPG"
        aria-label="RPG games"
        onSelect={() => alert('click')}
        isChecked={false}
      />
      <CheckableTag
        variant="primary"
        label="Sports"
        aria-label="Sport games"
        onSelect={() => alert('click')}
        isChecked={false}
      />
      <CheckableTag
        variant="primary"
        label="Party"
        aria-label="Party games"
        onSelect={() => alert('click')}
        isChecked={false}
        isDisabled={true}
      />
      <CheckableTag
        variant="primary"
        label="Survival horror"
        aria-label="Survival horror games"
        onSelect={() => alert('click')}
        isChecked={true}
      />
      <CheckableTag
        variant="primary"
        label="Action"
        aria-label="Action games"
        onSelect={() => alert('click')}
        isChecked={false}
      />
      <CheckableTag
        variant="primary"
        label="Platform"
        aria-label="Platform games"
        onSelect={() => alert('click')}
        isChecked={false}
      />
      <CheckableTag
        variant="primary"
        label="Graphic adventure"
        aria-label="Graphic adventure games"
        onSelect={() => alert('click')}
        isChecked={false}
      />
      <CheckableTag
        variant="primary"
        label="FPS"
        aria-label="First Person Shooter games"
        onSelect={() => alert('click')}
        isChecked={false}
      />
    </CheckableTagGroup>
  ),
} as unknown as Story
