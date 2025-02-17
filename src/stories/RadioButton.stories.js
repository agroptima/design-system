import { RadioButton } from '../atoms/RadioButton'

const figmaPrimaryDesign = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/design/DN2ova21vWqCRvPspBXgI1/Design-System?node-id=527-73&m=dev',
  },
}

const meta = {
  title: 'Design System/Atoms/RadioButton',
  component: RadioButton,
  parameters: {
    docs: {
      description: {
        component:
          '<h2>Usage guidelines</h2><p>Radio button component allows a user to select only one value from several options. Radio options should not be too many because all the options are default visible to a user so that the user can make the selection via comparison.</p><ul><li>Always label radio groups</li><li>Radio buttons and checkboxes are not interchangeable.</li></ul>',
      },
    },
    figmaPrimaryDesign,
  },
  tags: ['autodocs'],
  argTypes: {
    accessibilityLabel: {
      description: 'Accessible name & description of the element',
    },
    variant: {
      description: 'Variant used from a list of values',
    },
    disabled: {
      description: 'Is the component in disabled state?',
    },
    label: {
      description: 'Label for the component',
    },
    hideLabel: {
      description: 'Hide or show label?',
    },
    id: {
      description: 'Value needed for the label relation',
    },
  },
}

export default meta

export const Enabled = {
  render: () => (
    <>
      <RadioButton
        accessibilityLabel="Marks if the user likes action videogames"
        id="preference-1"
        name="videogames-preference"
        value="action"
        label="Action games"
        variant="primary"
      />
      <RadioButton
        accessibilityLabel="Marks if the user likes party videogames"
        id="preference-2"
        name="videogames-preference"
        value="party"
        label="Party games"
        variant="primary"
      />
      <RadioButton
        accessibilityLabel="Marks if the user likes platform videogames"
        id="preference-3"
        name="videogames-preference"
        value="platform"
        label="Platform games"
        variant="primary"
      />
    </>
  ),
}

export const Disabled = {
  render: () => (
    <>
      <RadioButton
        disabled
        accessibilityLabel="Marks if the user likes platform videogames"
        id="preference-3"
        name="videogames-preference"
        value="action"
        label="Action games"
        variant="primary"
      />
      <RadioButton
        disabled
        checked
        accessibilityLabel="Marks if the user likes platform videogames"
        id="preference-4"
        name="videogames-preference"
        value="platform"
        label="Platform games"
        variant="primary"
      />
    </>
  ),
}
