import type { StoryObj } from '@storybook/nextjs'
import React from 'react'
import { Alert, AlertContainer } from '../atoms/Alert'

const figmaPrimaryDesign = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/DN2ova21vWqCRvPspBXgI1/Design-System?type=design&node-id=570-118&mode=dev',
  },
}

const meta = {
  title: 'Design System/Atoms/AlertContainer',
  component: AlertContainer,
  tags: ['autodocs', 'Feedback components'],
  argTypes: {},
  parameters: figmaPrimaryDesign,
}

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  render: () => (
    <AlertContainer>
      <Alert variant="success" id="success" text="This is a success alert" />
      <Alert variant="error" id="error" text="This is a error alert" />
    </AlertContainer>
  ),
}
