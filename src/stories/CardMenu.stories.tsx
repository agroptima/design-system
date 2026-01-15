import type { StoryObj } from '@storybook/nextjs'
import { CardMenu, CardMenuOption } from '../atoms/CardMenu'

const figmaPrimaryDesign = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/design/DN2ova21vWqCRvPspBXgI1/Design-System?node-id=2285-1811&m=dev',
  },
}

const meta = {
  title: 'Design System/Atoms/CardMenu',
  component: CardMenuOption,
  parameters: {
    docs: {
      description: {
        component:
          '<h2>Usage guidelines</h2>' +
          '<p>CardMenu is used to hide less frequently used or advanced options until users specifically need them. This keeps the interface clean and focused on essential elements. Consider using short and precise labels for menu items as well as a suitable ordering and grouping.</p>',
      },
    },
    figmaPrimaryDesign,
  },
  tags: ['autodocs', 'Navigation components'],
  argTypes: {
    id: {
      description: 'Id for aria purposes',
    },
    icon: {
      description: 'Component icon used',
    },
    variant: {
      description: 'Component variant used',
    },
    title: {
      description: 'Component title text',
    },
    description: {
      description: 'Component description text',
    },
    href: {
      description: 'Component link',
    },
    disabled: {
      description: 'Is the component disabled?',
    },
    active: {
      description: 'Is the component active?',
    },
    error: {
      description: 'Is the component marked as error?',
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Option: Story = {
  render: () => (
    <CardMenu>
      <CardMenuOption
        id="first-menu-option"
        href="http://fakelink.com"
        icon="Info"
        variant="primary"
        title="It's dangerous to go alone!"
        description="Take this 🗡️ and this 🛡️ and this 💣 and this 🏹 and this 🔪 and this 🐴 and this 🔫 and this 🔪"
      />
    </CardMenu>
  ),
} as unknown as Story

export const DisabledOption: Story = {
  render: () => (
    <CardMenu>
      <CardMenuOption
        id="first-menu-option"
        href="#"
        icon="Info"
        variant="primary"
        title="It's dangerous to go alone!"
        description="Take this 🗡️"
        disabled
      />
    </CardMenu>
  ),
} as unknown as Story

export const ActiveOption: Story = {
  render: () => (
    <CardMenu>
      <CardMenuOption
        id="first-menu-option"
        href="#"
        icon="Info"
        variant="primary"
        title="It's dangerous to go alone!"
        description="Take this 🗡️"
        active
      />
    </CardMenu>
  ),
} as unknown as Story

export const ErrorOption: Story = {
  render: () => (
    <CardMenu>
      <CardMenuOption
        id="first-menu-option"
        href="#"
        icon="Info"
        variant="primary"
        title="It's dangerous to go alone!"
        description="Take this 🗡️"
        error
      />
    </CardMenu>
  ),
} as unknown as Story

export const Menu: Story = {
  render: () => (
    <CardMenu>
      <CardMenuOption
        active
        id="first-menu-option"
        href="#"
        icon="AddCircle"
        variant="primary"
        title="Title"
        description="Name of the videogame"
      />
      <CardMenuOption
        id="second-menu-option"
        href="#"
        icon="Edit"
        variant="primary"
        title="Address"
        description="Videogame company address"
      />
      <CardMenuOption
        id="third-menu-option"
        href="#"
        icon="Info"
        variant="primary"
        title="Email"
        description="Videogame company email"
      />
    </CardMenu>
  ),
} as unknown as Story

export const asButton: Story = {
  render: () => (
    <CardMenuOption
      id="first-menu-option"
      icon="Info"
      variant="primary"
      title="It's dangerous to go alone!"
      description="Take this 🗡️ and this 🛡️ and this 💣 and this 🏹 and this 🔪 and this 🐴 and this 🔫 and this 🔪"
      onClick={() => alert('Clicked!')}
    />
  ),
} as unknown as Story
