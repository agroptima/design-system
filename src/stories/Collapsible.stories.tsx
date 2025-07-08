import type { StoryObj } from '@storybook/react'
import React from 'react'
import { Button } from '../atoms/Button'
import { Collapsible } from '../atoms/Collapsible'
import { Divider } from '../atoms/Divider'
import { Actions, Form as FormComponent, FormContainer } from '../atoms/Form'
import { Input } from '../atoms/Input'
import { Select } from '../atoms/Select'

const figmaPrimaryDesign = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/design/DN2ova21vWqCRvPspBXgI1/Design-System?node-id=2761-2534&m=dev',
  },
}

const meta = {
  title: 'Design System/Atoms/Collapsible',
  component: Collapsible,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      description: 'Component variant used',
    },
    title: {
      description: 'Component title text',
    },
    name: {
      description: 'Component name property',
    },
    disabled: {
      description: 'Is the component disabled?',
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          '<h2>Usage guidelines</h2>' +
          '<p>The Collapsible component delivers large amounts of content in a small space through progressive disclosure. The header title gives the user a high level overview of the content allowing the user to decide which sections to read.</p>' +
          '<ul>' +
          ' <li>Always display the collapse and expand button</li>' +
          ' <li>To shorten pages and reduce scrolling when content is not crucial to read in full</li>' +
          '</ul>',
      },
    },
    figmaPrimaryDesign,
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    title: 'My personal data',
    name: 'personal-data',
    variant: 'primary',
    disabled: false,
    children: (
      <FormContainer fluid>
        <Input
          accessibilityLabel="Fill the form name"
          helpText="This text can help you"
          id="name_input"
          label="Name"
          name="name"
          placeholder="name..."
          type="name"
          variant="primary"
        />
        <Input
          accessibilityLabel="Fill the form email"
          helpText="This text can help you"
          id="email_input"
          label="Email"
          name="email"
          placeholder="janedoe@mail.com"
          type="email"
          variant="primary"
        />
        <Select
          accessibilityLabel="Select your favourite gaming system options"
          helpText="This text can help you"
          id="select-videogames"
          label="Videogames"
          name="example"
          onChange={() => {}}
          options={[
            {
              id: '1',
              label: 'Nintendo Switch',
            },
            {
              id: '2',
              label: 'PlayStation 5',
            },
            {
              id: '3',
              label: 'Xbox Series S/X',
            },
          ]}
          placeholder="Select your favourite gaming system..."
          variant="primary"
        />
      </FormContainer>
    ),
  },
}

export const Secondary: Story = {
  args: {
    open: true,
    title: 'My personal data',
    name: 'personal-data',
    variant: 'secondary',
    children: (
      <Input
        accessibilityLabel="Fill the form name"
        helpText="This text can help you"
        id="name_input"
        label="Name"
        name="name"
        placeholder="name..."
        type="name"
        variant="primary"
      />
    ),
  },
}

export const PrimaryOpened = {
  args: {
    title: 'My personal data',
    name: 'personal-data',
    variant: 'primary',
    disabled: false,
    open: true,
    children: (
      <>
        <Divider title="19/01/2025 - My gaming diary" variant="primary" />
        <FormContainer fluid>
          <Input
            accessibilityLabel="Fill the form name"
            helpText="This text can help you"
            id="name_input"
            label="Name"
            name="name"
            placeholder="name..."
            type="name"
            variant="primary"
          />
          <Input
            accessibilityLabel="Fill the form email"
            helpText="This text can help you"
            id="email_input"
            label="Email"
            name="email"
            placeholder="janedoe@mail.com"
            type="email"
            variant="primary"
          />
          <Select
            accessibilityLabel="Select your favourite gaming system options"
            helpText="This text can help you"
            id="select-videogames"
            label="Videogames"
            name="example"
            onChange={() => {}}
            options={[
              {
                id: '1',
                label: 'Nintendo Switch',
              },
              {
                id: '2',
                label: 'PlayStation 5',
              },
              {
                id: '3',
                label: 'Xbox Series S/X',
              },
            ]}
            placeholder="Select your favourite gaming system..."
            variant="primary"
          />
        </FormContainer>
      </>
    ),
  },
}

export const PrimaryDisabled: Story = {
  args: {
    title: 'My personal data',
    name: 'personal-data',
    variant: 'primary',
    disabled: true,
    children: (
      <FormContainer fluid>
        <Input
          accessibilityLabel="Fill the form name"
          helpText="This text can help you"
          id="name_input"
          label="Name"
          name="name"
          placeholder="name..."
          type="name"
          variant="primary"
        />
        <Input
          accessibilityLabel="Fill the form email"
          helpText="This text can help you"
          id="email_input"
          label="Email"
          name="email"
          placeholder="janedoe@mail.com"
          type="email"
          variant="primary"
        />
        <Select
          accessibilityLabel="Select your favourite gaming system options"
          helpText="This text can help you"
          id="select-videogames"
          label="Videogames"
          name="example"
          onChange={() => {}}
          options={[
            {
              id: '1',
              label: 'Nintendo Switch',
            },
            {
              id: '2',
              label: 'PlayStation 5',
            },
            {
              id: '3',
              label: 'Xbox Series S/X',
            },
          ]}
          placeholder="Select your favourite gaming system..."
          variant="primary"
        />
      </FormContainer>
    ),
  },
}

export const Form: Story = {
  args: {
    form: true,
    open: true,
    title: 'User',
    name: 'user-form',
    variant: 'primary',
    children: (
      <FormComponent>
        <Input label="First Name" placeholder="First Name" name="firstName" />
        <Input label="Last Name" placeholder="Last Name" name="lastName" />
        <Actions>
          <Button type="button" label="Cancel" variant="primary-outlined" />
          <Button type="submit" label="Sign in" variant="primary" />
        </Actions>
      </FormComponent>
    ),
  },
}
