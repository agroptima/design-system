import React from 'react'

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
    isDisabled: {
      description: 'Is the component disabled?',
    },
    onClick: {
      description: 'Event triggered when the component is clicked',
    },
  },
  parameters: figmaPrimaryDesign,
}

export default meta

export const Option = {
  render: () => (
    <CardMenuOption
      id="first-menu-option"
      icon="Info"
      variant="primary"
      title="It's dangerous to go alone!"
      description="Take this 🗡️ and this 🛡️ and this 💣 and this 🏹 and this 🔪 and this 🐴 and this 🔫 and this 🔪"
      isDisabled={false}
      onClick={() => alert('click')}
    />
  ),
}

export const DisabledOption = {
  render: () => (
    <CardMenuOption
      id="first-menu-option"
      icon="Info"
      variant="primary"
      title="It's dangerous to go alone!"
      description="Take this 🗡️"
      disabled
    />
  ),
}

export const Menu = {
  render: () => (
    <CardMenu>
      <CardMenuOption
        id="first-menu-option"
        icon="AddCircle"
        variant="primary"
        title="Title"
        description="Name of the videogame"
        isDisabled={false}
        onClick={() => alert('click title')}
      />
      <CardMenuOption
        id="second-menu-option"
        icon="Edit"
        variant="primary"
        title="Address"
        description="Videogame company address"
        isDisabled={false}
        onClick={() => alert('click address')}
      />
      <CardMenuOption
        id="third-menu-option"
        icon="Info"
        variant="primary"
        title="Email"
        description="Videogame company email"
        isDisabled={false}
        onClick={() => alert('click email')}
      />
    </CardMenu>
  ),
}
