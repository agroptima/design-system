import { Alert } from '../atoms/Alert'
import type { StoryObj } from '@storybook/react'

const meta = {
  title: 'Design System/Atoms/Alert',
  component: Alert,
  tags: ['autodocs'],
  argTypes: {
    id: {
      description: 'Id for aria purposes',
    },
    text: {
      description: 'Text to be shown on the component.',
    },
    variant: {
      description: 'Variant used.',
    },
    button: {
      description: 'Add an IconButton component to have the close button.',
    },
    fadeOut: {
      description: 'Add fade out animation.',
      control: 'boolean',
    },
  },
}

const figmaPrimaryDesign = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/DN2ova21vWqCRvPspBXgI1/Design-System?type=design&node-id=570-118&mode=dev',
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Info: Story = {
  args: {
    id: 'info-alert',
    variant: 'info',
    text: 'Thank you! But our princess is in another castle!',
  },
  parameters: figmaPrimaryDesign,
}

export const Success: Story = {
  args: {
    id: 'success-alert',
    variant: 'success',
    text: 'Thank you! But our princess is in another castle!',
  },
  parameters: figmaPrimaryDesign,
}

export const SuccessWithFadeOut: Story = {
  args: {
    id: 'success-alert',
    variant: 'success',
    text: 'Thank you! But our princess is in another castle!',
    fadeOut: true,
  },
  parameters: figmaPrimaryDesign,
}

export const Warning: Story = {
  args: {
    id: 'warning-alert',
    variant: 'warning',
    text: 'Thank you! But our princess is in another castle!',
    button: {
      accessibilityLabel: 'Close alert',
      onClick: () => alert('click'),
      icon: 'Close',
    },
  },
  parameters: figmaPrimaryDesign,
}

export const Error: Story = {
  args: {
    id: 'error-alert',
    variant: 'error',
    text: 'Thank you! But our princess is in another castle!',
    button: {
      accessibilityLabel: 'Close alert',
      onClick: () => alert('click'),
      icon: 'Close',
    },
  },
  parameters: figmaPrimaryDesign,
}
