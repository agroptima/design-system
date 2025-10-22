import type { StoryObj } from '@storybook/nextjs'
import React from 'react'
import { Typography as TypographyExamples } from '../examples/Typography'

const figmaPrimaryDesign = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/DN2ova21vWqCRvPspBXgI1/Design-System?type=design&node-id=1743-1742&mode=dev',
  },
}

const meta = {
  title: 'Design System/Styles',
  component: TypographyExamples,
  parameters: figmaPrimaryDesign,
  tags: ['Documentation', '!Components'],
}

export default meta
type Story = StoryObj<typeof meta>

export const Typography: Story = {
  render: () => (
    <div
      style={{
        fontStyle: '1rem',
        fontVariant: 'normal',
        fontWeight: 400,
        fontFamily: 'Mulish, sans-serif',
        color: '#444444FF',
        fontSize: '1rem',
        lineHeight: 'normal',
        display: 'flex',
        flexDirection: 'column',
        gap: '15px',
      }}
    >
      <h1>Typography</h1>
      <TypographyExamples />
    </div>
  ),
}
