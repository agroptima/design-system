import { Input } from '../atoms/Input'
import { StoryObj } from '@storybook/react'

const meta = {
  title: 'Design System/Atoms/Input',
  component: Input,
  tags: ['autodocs'],
}

const figmaPrimaryDesign = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/DN2ova21vWqCRvPspBXgI1/Design-System?type=design&node-id=68-211&mode=dev',
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    placeholder: 'Email...',
    variant: 'primary',
    disabled: true,
    leftIcon: 'AngleLeft',
    helpText: 'This text can help you',
    name: 'email',
    type: 'email',
  },
  parameters: figmaPrimaryDesign,
}
