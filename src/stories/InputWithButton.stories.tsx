import type { StoryObj } from '@storybook/react'
import { Button } from '../atoms/Button'
import { Input } from '../atoms/Input'
import { InputWithButton } from '../atoms/InputWithButton'

const meta = {
  title: 'Design System/Atoms/InputWithButton',
  component: InputWithButton,
  parameters: {
    docs: {
      description: {
        component:
          '<h2>Usage guidelines</h2>\n' +
          '<p>The InputWithButton component is used when a user needs to input information and immediately trigger an action, such as searching, submitting, or generating content. It combines an input field with a complementary interactive element, typically a button, placed within the same container.</p>\n' +
          '<ul>\n' +
          '  <li>Use when the action is closely tied to the input (e.g., "Search", "Add", "Go")</li>\n' +
          '  <li>Always include a visible label for accessibility and clarity</li>\n' +
          '  <li>Use concise and descriptive button text or icons</li>\n' +
          '  <li>Ensure the input and button are visually grouped and aligned</li>\n' +
          '  <li>Support help and error text as in a standard input</li>\n' +
          '  <li>Pass the button or other actionable element through the <code>children</code> prop</li>\n' +
          '  <li>Do not overload with multiple actions—one clear purpose per instance</li>\n' +
          '</ul>',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    children: {
      description: 'prop is used to pass a input and button components.',
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    children: (
      <>
        <Input
          fullWidth
          ellipsis
          defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
          variant="borderless"
          label="Input with button"
          id="input-with-button"
          readOnly
        />
        <Button type="button" label="Action" className="button" />
      </>
    ),
  },
}

export const WithError: Story = {
  args: {
    children: (
      <>
        <Input
          fullWidth
          ellipsis
          defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
          variant="borderless"
          label="Input with button"
          id="input-with-button"
          readOnly
          errors={['This is an error message']}
        />
        <Button type="button" label="Action" className="button" />
      </>
    ),
  },
}
