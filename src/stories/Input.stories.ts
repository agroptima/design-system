import type { StoryObj } from '@storybook/nextjs'
import { Input } from '../atoms/Input'

const meta = {
  title: 'Design System/Atoms/Input',
  component: Input,
  parameters: {
    docs: {
      description: {
        component:
          '<h2>Usage guidelines</h2>' +
          '<p>Input component is used when a user needs to input unique information that cannot be predicted with a preset of options or that can be entered more quickly in a free-hand format.</p>' +
          '<ul>' +
          ' <li>By default, include a label</li><li>Mark the minority of inputs in a form as required or optional</li>' +
          ' <li>Use help text to show hints, formatting, and requirements</li>' +
          ' <li>Optional placeholder text provides hints or examples of what to enter</li>' +
          ' <li>Switch help text with error text</li><li>Write error text that shows a solution</li>' +
          '</ul>',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      description: 'Label for the input',
    },
    accessibilityLabel: {
      description:
        'Describes the input purpose. If empty, label content will be used',
    },
    placeholder: {
      description: 'Optional input placeholder text',
    },
    variant: {
      description: 'Input variant used',
    },
    disabled: {
      description: 'Is the input in disabled state?',
    },
    helpText: {
      description: 'Optional help text',
    },
    name: {
      description: 'Input name property',
    },
    type: {
      description: 'Input type property',
    },
    icon: {
      description: 'Input left icon from a list of values',
    },
    id: {
      description: 'Value needed for the label relation',
    },
    suffix: {
      description: 'Input suffix',
    },
    errors: {
      description:
        'Optional array of errors. If passed, the errors are listed and invalid style is applied.',
    },
    datePickerIcon: {
      description:
        'Optional icon added to input when input is applied to the date picker component selection',
    },
    required: {
      description: 'Is required?',
      type: 'boolean',
    },
    fullWidth: {
      description: 'Makes the input take the full width of the container',
      type: 'boolean',
    },
    ellipsis: {
      description:
        'If true, the input will truncate the text with an ellipsis when it overflows',
      type: 'boolean',
    },
  },
}

const figmaPrimaryDesign = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/DN2ova21vWqCRvPspBXgI1/Design-System?type=design&node-id=68-211&mode=dev',
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    label: 'Email',
    accessibilityLabel: 'Fill the form email',
    placeholder: 'janedoe@mail.com',
    variant: 'primary',
    disabled: false,
    helpText: 'This text can help you',
    name: 'email',
    type: 'email',
    id: 'email_input',
  },
  parameters: figmaPrimaryDesign,
}

export const Password: Story = {
  args: {
    label: 'Password',
    placeholder: 'Password123',
    variant: 'primary',
    disabled: false,
    helpText: 'This text can help you',
    name: 'login_password',
    type: 'password',
    id: 'password_input',
  },
  parameters: figmaPrimaryDesign,
}

export const File: Story = {
  args: {
    label: 'Label for input file',
    variant: 'primary',
    disabled: false,
    helpText: 'This text can help you',
    name: 'file',
    type: 'file',
  },
  parameters: figmaPrimaryDesign,
}

export const WithErrors: Story = {
  args: {
    label: 'Email',
    accessibilityLabel: 'Fill the form email',
    placeholder: 'janedoe@mail.com',
    variant: 'primary',
    disabled: false,
    helpText: 'This text can help you',
    name: 'email',
    type: 'email',
    id: 'email_input',
    errors: ['error1', 'error2'],
  },
  parameters: figmaPrimaryDesign,
}

export const WithSuffix: Story = {
  args: {
    label: 'Input with suffix',
    helpText: 'This text can help you',
    name: 'price',
    type: 'number',
    suffix: '€/Bottle',
  },
  parameters: figmaPrimaryDesign,
}

export const Borderless: Story = {
  args: {
    label: 'Delivery data',
    defaultValue: '221b Baker St, London NW1, 6XE, United Kingdom',
    variant: 'borderless',
    readOnly: true,
    helpText: 'This text can help you',
    name: 'delivery_data',
  },
  parameters: figmaPrimaryDesign,
}

export const Ellipsis: Story = {
  args: {
    label: 'Label for input with ellipsis',
    defaultValue:
      "Ph'nglui mglw'nafh Cthulhu R'lyeh wgah'nagl fhtagn., Nnnhafh'drn bug ep Tsathoggua sgn'wahl nghupadgh, nglui syha'h y-ee y-n'gha. NaflDagon y-zhro lw'nafh stell'bsna h'li'hee vulgtm R'lyeh hafh'drnyar, goka nnnAzathoth sgn'wahl gebor shogg ftaghu y'hah, naorr'e lloig hupadghog nageb k'yarnakagl ph'sgn'wahl. Nnngnaiih stell'bsna 'bthnk mnahn' h'goka hrii zhro hai 'fhalma h'geb, goka f'vulgtlagln nilgh'ri y-chtenff Hastur 'fhalma mnahn' fm'latgh. Nauln vulgtm y-shtunggli uaaah li'hee y'hah hlirgh, orr'e nglui hafh'drn ngstell'bsna ngep hupadgh, 'bthnkagl hafh'drnog s'uhn chtenff ya. Syha'h 'bthnk vulgtlagln ah zhro f'n'gha uh'e Nyarlathotep sgn'wahl ebunma 'ai fhtagn sll'ha ehye, ckadishtu hrii nahai 'ai ilyaa namg n'gha ooboshu mnahn' Azathoth cHastur wgah'n.",
    name: 'ellipsis',
    ellipsis: true,
  },
  parameters: figmaPrimaryDesign,
}
