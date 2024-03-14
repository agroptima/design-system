import { StoryObj } from '@storybook/react'
import { Button } from '../atoms/Button'

const meta = {
  title: 'Design System/Atoms/Button',
  component: Button,
  tags: ['autodocs'],
  args: {
    label: 'Button',
  },
  argTypes: {
    label: {
      description: 'Button text content',
    },
    variant: {
      description: 'Button variant used from a list of values',
    },
    disabled: {
      description: 'Is the button in disabled state?',
    },
    loading: {
      description: 'Is the button in loading state?',
    },
    leftIcon: {
      description: 'Button left icon from a list of values',
      control: { type: 'select' },
    },
    rightIcon: {
      description: 'Button right icon from a list of values',
      control: { type: 'select' },
    },
    href: {
      description:
        'If a link is provided, the component will be rendered as NextLink, otherwise as button',
    },
  },
}

const figmaPrimaryDesign = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/DN2ova21vWqCRvPspBXgI1/Design-System?type=design&node-id=3-2&mode=design&t=uwWgYrzYS3TAXDOH-4',
  },
}

const figmaNeutralDesign = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/DN2ova21vWqCRvPspBXgI1/Design-System?type=design&node-id=778-2737&mode=dev',
  },
}

const figmaErrorDesign = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/DN2ova21vWqCRvPspBXgI1/Design-System?type=design&node-id=778-1787&mode=dev',
  },
}

const figmaSuccessDesign = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/DN2ova21vWqCRvPspBXgI1/Design-System?type=design&node-id=778-1466&mode=dev',
  },
}

const figmaWarningDesign = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/DN2ova21vWqCRvPspBXgI1/Design-System?type=design&node-id=778-2527&mode=dev',
  },
}

const figmaInfoDesign = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/DN2ova21vWqCRvPspBXgI1/Design-System?type=design&node-id=778-2206&mode=dev',
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Link: Story = {
  args: {
    variant: 'primary',
    disabled: false,
    loading: false,
    href: 'link.com',
  },
  parameters: figmaPrimaryDesign,
}

export const Primary: Story = {
  args: {
    variant: 'primary',
    disabled: false,
    loading: false,
  },
  parameters: figmaPrimaryDesign,
}

export const PrimaryWithLeftIcon: Story = {
  args: {
    variant: 'primary',
    disabled: false,
    leftIcon: 'AngleLeft',
  },
  parameters: figmaPrimaryDesign,
}

export const PrimaryOutlined: Story = {
  args: {
    variant: 'primary-outlined',
    disabled: false,
  },
  parameters: figmaPrimaryDesign,
}

export const PrimaryGhost: Story = {
  args: {
    variant: 'primary-ghost',
    disabled: false,
  },
  parameters: figmaPrimaryDesign,
}

export const Neutral: Story = {
  args: {
    variant: 'neutral',
    disabled: false,
  },
  parameters: figmaNeutralDesign,
}

export const Error: Story = {
  args: {
    variant: 'error',
    disabled: false,
  },
  parameters: figmaErrorDesign,
}

export const Success: Story = {
  args: {
    variant: 'success',
    disabled: false,
  },
  parameters: figmaSuccessDesign,
}

export const Warning: Story = {
  args: {
    variant: 'warning',
    disabled: false,
  },
  parameters: figmaWarningDesign,
}

export const Info: Story = {
  args: {
    variant: 'info',
    disabled: false,
  },
  parameters: figmaInfoDesign,
}
