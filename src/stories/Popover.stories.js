import React from 'react'
import { Button } from '../atoms/Button'
import { Popover, PopoverMenu, PopoverMenuOption } from '../atoms/Popover'

const figmaPrimaryDesign = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/design/DN2ova21vWqCRvPspBXgI1/Design-System?node-id=3200-3749&m=dev',
  },
}

const meta = {
  title: 'Design System/Atoms/Popover',
  component: Popover,
  tags: ['autodocs'],
  argTypes: {
    renderButton: {
      description: 'Render prop for the button that triggers the popover',
    },
    position: {
      description: 'Position of the popover',
      options: ['right', 'left', 'center'],
      control: { type: 'select' },
    },
  },
  parameters: figmaPrimaryDesign,
}

export default meta

export const Menu = {
  render: ({ position }) => (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Popover
        position={position}
        renderButton={({ toggle }) => (
          <Button
            variant="primary-outlined"
            label="Open popover"
            onClick={toggle}
          />
        )}
      >
        <PopoverMenu>
          <PopoverMenuOption
            active
            href="#"
            variant="primary"
            title="Profile"
          />
          <PopoverMenuOption
            href="#"
            variant="primary"
            title="Change password"
          />
          <PopoverMenuOption
            disabled
            href="#"
            variant="primary"
            title="Logout"
          />
        </PopoverMenu>
      </Popover>
    </div>
  ),
}
