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
          '<h2>Usage guidelines</h2><p>CardMenu is used to hide less frequently used or advanced options until users specifically need them. This keeps the interface clean and focused on essential elements. Consider using short and precise labels for menu items as well as a suitable ordering and grouping.</p>',
      },
    },
    figmaPrimaryDesign,
  },
  tags: ['autodocs'],
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

export const Option = {
  render: () => (
    <CardMenuOption
      id="first-menu-option"
      href="#"
      icon="Info"
      variant="primary"
      title="It's dangerous to go alone!"
      description="Take this 🗡️ and this 🛡️ and this 💣 and this 🏹 and this 🔪 and this 🐴 and this 🔫 and this 🔪"
    />
  ),
}

export const DisabledOption = {
  render: () => (
    <CardMenuOption
      id="first-menu-option"
      href="#"
      icon="Info"
      variant="primary"
      title="It's dangerous to go alone!"
      description="Take this 🗡️"
      disabled
    />
  ),
}

export const ActiveOption = {
  render: () => (
    <CardMenuOption
      id="first-menu-option"
      href="#"
      icon="Info"
      variant="primary"
      title="It's dangerous to go alone!"
      description="Take this 🗡️"
      active
    />
  ),
}

export const ErrorOption = {
  render: () => (
    <CardMenuOption
      id="first-menu-option"
      href="#"
      icon="Info"
      variant="primary"
      title="It's dangerous to go alone!"
      description="Take this 🗡️"
      error
    />
  ),
}

export const Menu = {
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
}
