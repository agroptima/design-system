import { TabLink, TabMenu } from '../atoms/TabMenu'

const figmaPrimaryDesign = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/design/DN2ova21vWqCRvPspBXgI1/Design-System?node-id=4124-74&t=he01I8TeGSN2aYXP-4',
  },
}

const meta = {
  title: 'Design System/Atoms/TabMenu',
  component: TabMenu,
  parameters: {
    docs: {
      description: {
        component:
          '<h2>Usage guidelines</h2><p>The TabMenu component can be used as an extra navigational hierarchy complementing the main navbar.</p><ul><li>Use concise & descriptive titles in order to ensure simplicity</li></ul>',
      },
    },
    figmaPrimaryDesign,
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      description: 'Component variant used',
    },
    title: {
      description: 'Component title text',
    },
    isActive: {
      description: 'Is the element active?',
    },
    href: {
      description: 'Link to the page',
    },
    disabled: {
      description: 'Is the TabLink disabled?',
    },
  },
}

export default meta

export const Tabs = {
  render: () => (
    <TabMenu>
      <TabLink title="Videogames" href="some-link" />
      <TabLink title="Books" href="some-link" isActive />
      <TabLink title="Cinema" href="some-link" />
      <TabLink title="Graphic Novels" href="some-link" disabled />
    </TabMenu>
  ),
}
