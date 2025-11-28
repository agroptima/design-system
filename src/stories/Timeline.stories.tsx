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
    id: {
      description: 'Id for aria purposes',
    },
    variant: {
      description: 'Component variant used',
    },
    title: {
      description: 'Component title text',
    },
    buttons: {
      description: 'Array of buttons to be shown on the footer',
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          '<h2>Usage guidelines</h2>' +
          '<p>A Drawer is a panel that is typically overlaid on top of a page and slides in from the side. It contains a set of information or actions. Since the user can interact with the Drawer without leaving the current page, tasks can be achieved more efficiently within the same context.</p>',
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
      buttons={[
        {
          label: 'Close',
          variant: 'primary-outlined',
          onClick: () => alert('click'),
        },
      ]}
      onClose={() => alert('close')}
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
      buttons={[
        {
          label: 'Close',
          variant: 'primary-outlined',
          onClick: () => alert('click'),
        },
      ]}
      onClose={() => alert('close')}
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
