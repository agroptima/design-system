import type { StoryObj } from '@storybook/nextjs'
import React from 'react'
import { Drawer } from '../atoms/Drawer'
import { Milestone, Timeline } from '../atoms/Timeline'
import { LoadMoreMilestonesButton } from '../atoms/Timeline/LoadMoreMilestonesButton'

const figmaPrimaryDesign = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/design/DN2ova21vWqCRvPspBXgI1/Design-System?node-id=4786-71&m=dev',
  },
}

const meta = {
  title: 'Design System/Atoms/Timeline',
  component: Timeline,
  tags: ['autodocs', 'Data display components'],
  argTypes: {
    variant: {
      description: 'Component variant used',
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          '<h2>Usage guidelines</h2>' +
          '<p>The vertical display Timeline component shows progress through a workflow or chronological events in a linear order.</p>' +
          '<ul>' +
          ' <li>Use it when a series of information needs to be ordered by time (ascending or descending).</li>' +
          ' <li>Use it when you need a timeline to make a visual connection.</li>' +
          ' <li>The milestone title can either be a button or a link.</li>' +
          '</ul>',
      },
    },
    figmaPrimaryDesign,
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const TimelineDrawer: Story = {
  render: () => (
    <Drawer
      id="timeline-drawer"
      title="1986"
      onClose={() => alert('close')}
      closeAccessibilityLabel="Close"
    >
      <div style={{ marginTop: '20px' }}>
        <LoadMoreMilestonesButton
          onClick={() => alert('more milestones')}
          variant="primary"
          title="View previous"
          leftIcon="AngleUp"
        />
        <Timeline>
          <Milestone
            title="1985"
            description="Nintendo
NES launches with breakout hits like Super
Mario Bros.
Sega launches its Master System."
          />
          <Milestone
            isSelected
            title="1986"
            description="Legend of Zelda comes out, spawning a long series of popular games."
          />
          <Milestone
            title="1988"
            description="Sega's 16-bit
Mega Drive is introduced, becoming the company's most successful system."
          />
          <Milestone
            title="1989"
            description="Nintendo's handheld
Game Boy hits the market."
          />
          <Milestone
            title="1991"
            description="Sega's hit Sonic the Hedgehog and the 16-bit
Super Nintendo come out."
          />
          <Milestone
            title="1994"
            description="32-bit consoles like the Sega Saturn, Sony PlayStation, and NEC PC-FX launch."
          />
        </Timeline>
        <LoadMoreMilestonesButton
          onClick={() => alert('more milestones')}
          variant="primary"
          title="View next"
          leftIcon="AngleDown"
        />
      </div>
    </Drawer>
  ),
} as unknown as Story

export const TimelineWithLinksDrawer: Story = {
  render: () => (
    <Drawer
      id="timeline-drawer"
      title="1986"
      onClose={() => alert('close')}
      closeAccessibilityLabel="Close"
    >
      <div style={{ marginTop: '20px' }}>
        <LoadMoreMilestonesButton
          onClick={() => alert('more milestones')}
          variant="primary"
          title="View previous"
          leftIcon="AngleUp"
        />
        <Timeline>
          <Milestone
            title="1985"
            description="Nintendo
NES launches with breakout hits like Super
Mario Bros.
Sega launches its Master System."
            href="link.com"
          />
          <Milestone
            isSelected
            title="1986"
            description="Legend of Zelda comes out, spawning a long series of popular games."
            href="link.com"
          />
          <Milestone
            title="1988"
            description="Sega's 16-bit
Mega Drive is introduced, becoming the company's most successful system."
            href="link.com"
          />
          <Milestone
            title="1989"
            description="Nintendo's handheld
Game Boy hits the market."
            href="link.com"
          />
          <Milestone
            title="1991"
            description="Sega's hit Sonic the Hedgehog and the 16-bit
Super Nintendo come out."
            href="link.com"
          />
          <Milestone
            title="1994"
            description="32-bit consoles like the Sega Saturn, Sony PlayStation, and NEC PC-FX launch."
            href="link.com"
          />
        </Timeline>
        <LoadMoreMilestonesButton
          onClick={() => alert('more milestones')}
          variant="primary"
          title="View next"
          leftIcon="AngleDown"
        />
      </div>
    </Drawer>
  ),
} as unknown as Story
