import type { StoryObj } from '@storybook/nextjs'
import { Button } from '../atoms/Button'
import { ButtonGroup } from '../atoms/ButtonGroup'
import { Popover, PopoverMenu, PopoverMenuOption } from '../atoms/Popover'

const figmaDesign = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/design/DN2ova21vWqCRvPspBXgI1/Design-System?node-id=4279-942&t=06AFHQVmeQz1JClF-0',
  },
}

const meta = {
  title: 'Design System/Atoms/ButtonGroup',
  component: ButtonGroup,
  parameters: {
    docs: {
      description: {
        component:
          '<h2>Usage guidelines</h2>' +
          '<p>The <code>ButtonGroup</code> component is used to visually group two or more buttons on a single horizontal line. This helps indicate related actions and maintain consistent UI alignment.</p>' +
          '<ul>' +
          '  <li>Use it to group related actions that should be presented together</li>' +
          '  <li>Use it for things like filter options, segmented controls, or inline actions</li>' +
          '  <li>Ensure all buttons in the group are accessible and clearly labeled</li>' +
          '  <li>Pass buttons through the <code>children</code> prop as an array or fragment</li>' +
          '  <li>Do not include unrelated controls like inputs or toggles in the same group</li>' +
          '</ul>',
      },
    },
    figmaDesign,
  },
  tags: ['autodocs'],
  argTypes: {
    children: {
      description: 'prop is used to pass buttons components',
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const TwoButtons: Story = {
  args: {
    children: (
      <>
        <Button type="button" label="Button" className="button" />
        <Button
          icon="AngleDown"
          type="button"
          label="Button"
          className="button"
        />
      </>
    ),
  },
}

export const ThreeButtons: Story = {
  args: {
    children: (
      <>
        <Button
          icon="AngleLeft"
          type="button"
          label="Button"
          className="button"
        />
        <Button type="button" label="Button" className="button" />
        <Button
          icon="AngleRight"
          type="button"
          label="Button"
          className="button"
        />
      </>
    ),
  },
}

export const WithPopover: Story = {
  args: {
    children: (
      <>
        <Button type="button" label="Button" className="button" />
        <Popover
          renderButton={({ toggle }) => (
            <Button label="More options" icon="More" onClick={toggle} />
          )}
        >
          <PopoverMenu>
            <PopoverMenuOption
              active
              href="#"
              title="Profile"
              variant="primary"
            />
            <PopoverMenuOption
              href="#"
              title="Change password"
              variant="primary"
            />
            <PopoverMenuOption
              disabled
              href="#"
              title="Logout"
              variant="primary"
            />
          </PopoverMenu>
        </Popover>
      </>
    ),
  },
}
