import type { StoryObj } from '@storybook/nextjs'
import React from 'react'
import { Button } from '../atoms/Button'
import { Collapsible } from '../atoms/Collapsible'
import { Divider } from '../atoms/Divider'
import { FormContainer } from '../atoms/Form'
import { Input } from '../atoms/Input'
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalDialog,
  ModalFooter,
  ModalHeader,
  ModalTitle,
} from '../atoms/Modal'
import { Select } from '../atoms/Select'
import { LoremIpsum } from '../utils/LoremIpsum'

const figmaPrimaryDesign = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/DN2ova21vWqCRvPspBXgI1/Design-System?type=design&node-id=1992-142&mode=dev',
  },
}

const meta = {
  title: 'Design System/Atoms/Modal',
  component: Modal,
  parameters: {
    docs: {
      description: {
        component:
          '<h2>Usage guidelines</h2>' +
          "<p>Modal component is used when requiring users to interact with the application, but without jumping to a new page and interrupting the user's workflow. It creates a new floating layer over the current page to get user feedback or display information.</p>" +
          '<ul>' +
          '  <li>Require a response from the user</li>' +
          '  <li>Notify the user of any related information</li>' +
          '  <li>Confirm a user decision</li>' +
          "  <li>It's opened/closed through `isOpen` prop. If we don't want it to be part of the DOM, we can also add a conditional render on the frontend project.</li>" +
          '  <li>Natively, focus is set on the first nested focusable element and explicitly indicated by default by the browser</li>' +
          "  <li>When nesting a Form inside Modal component, remember to add `type='button'` to all Cancel buttons to not to be considered as submitable</li>" +
          '</ul>',
      },
    },
    figmaPrimaryDesign,
  },
  tags: ['autodocs', 'Feedback components'],
  args: {
    children: 'Modal',
    isOpen: false,
  },
  argTypes: {
    id: {
      description: 'Id for aria purposes',
    },
    variant: {
      description: 'Component variant used',
    },
    title: {
      description: 'Component title text',
    },
    buttons: {
      description: 'Array of buttons to be shown on the footer',
    },
    scrollable: {
      description: 'Is the modal body scrollable?',
    },
    onClose: {
      description: 'Function to be called when the modal is closed',
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Info: Story = {
  args: {
    isOpen: true,
    id: 'info-dangerous-alone',
    variant: 'info',
    title: "It's dangerous to go alone!",
    buttons: [
      {
        label: 'Done',
        onClick: () => alert('click'),
      },
    ],
    children: 'Take this 🗡️',
  },
}

export const Success: Story = {
  args: {
    isOpen: true,
    id: 'success-dangerous-alone',
    variant: 'success',
    title: "It's dangerous to go alone!",
    buttons: [
      {
        label: 'Done',
        onClick: () => alert('click'),
      },
    ],
    children: 'Take this 🗡️',
  },
}

export const Warning: Story = {
  args: {
    isOpen: true,
    id: 'warning-dangerous-alone',
    variant: 'warning',
    title: "It's dangerous to go alone!",
    buttons: [
      {
        label: 'Done',
        onClick: () => alert('click'),
      },
    ],
    children: 'Take this 🗡️',
  },
}

export const Error: Story = {
  args: {
    isOpen: true,
    id: 'error-dangerous-alone',
    variant: 'error',
    title: "It's dangerous to go alone!",
    buttons: [
      {
        label: 'Done',
        onClick: () => alert('click'),
      },
    ],
    children: 'Take this 🗡️',
  },
}

export const DeleteOrDiscard: Story = {
  args: {
    isOpen: true,
    id: 'discard-dangerous-alone',
    variant: 'discard',
    title: 'The far horizon was always steamy and indistinct',
    buttons: [
      {
        label: 'Cancel',
        variant: 'neutral',
        onClick: () => alert('click'),
      },
      {
        label: 'Delete',
        variant: 'error',
        onClick: () => alert('click'),
      },
    ],
    children:
      'But I could see that great jungles of unknown tree-ferns, calamites, \n' +
      'lepidodendra, and sigillaria lay outside the city, their fantastic \n' +
      'frondage waving mockingly in the shifting vapours. Now and then there \n' +
      'would be suggestions of motion in the sky, but these my early visions \n' +
      'never resolved.',
  },
}

export const LargeModal: Story = {
  args: {
    isOpen: true,
    id: 'large-modal',
    title: 'Large Modal Example',
    buttons: [
      {
        label: 'Close',
        type: 'button',
        variant: 'neutral',
        onClick: () => alert('Close'),
      },
      { label: 'Save' },
    ],
    children: <ALotOfContent />,
  },
}

export const ScrollableModal: Story = {
  args: {
    isOpen: true,
    id: 'scrollable-modal',
    scrollable: true,
    onClose: () => alert('close'),
    title: 'Scrollable Modal Example',
    buttons: [
      {
        label: 'Close',
        variant: 'neutral',
        onClick: () => alert('close'),
      },
    ],
    children: <ALotOfContent />,
  },
}

function ALotOfContent() {
  return (
    <>
      <LoremIpsum lorems={10} />
      <Select
        id="select"
        label="Select"
        helpText="This is a help text"
        placeholder="Select an option"
        options={[
          { id: '1', label: 'Option 1' },
          { id: '2', label: 'Option 2' },
          { id: '3', label: 'Option 3' },
          { id: '4', label: 'Option 4' },
          { id: '5', label: 'Option 5' },
          { id: '6', label: 'Option 6' },
          { id: '7', label: 'Option 7' },
          { id: '8', label: 'Option 8' },
          { id: '9', label: 'Option 9' },
          { id: '10', label: 'Option 10' },
          { id: '11', label: 'Option 11' },
          { id: '12', label: 'Option 12' },
          { id: '13', label: 'Option 13' },
          { id: '14', label: 'Option 14' },
          { id: '15', label: 'Option 15' },
        ]}
      />
    </>
  )
}

const OpenAndCloseModalComponent = () => {
  const [isOpen, setIsOpen] = React.useState(false)
  const openModal = () => setIsOpen(true)
  const closeModal = () => setIsOpen(false)
  return (
    <>
      <ModalDialog isOpen={isOpen} details onClose={closeModal}>
        <ModalHeader>
          <ModalTitle>Modal title</ModalTitle>
          <ModalCloseButton onClick={closeModal} />
        </ModalHeader>
        <ModalBody>
          <LoremIpsum lorems={1} />
        </ModalBody>
        <ModalFooter>
          <Button label="Close" onClick={closeModal} />
        </ModalFooter>
      </ModalDialog>

      <LoremIpsum lorems={10} />
      <br />
      <hr />
      <br />
      <Button label="Open Modal" onClick={openModal} />
    </>
  )
}

export const OpenAndCloseModal: Story = {
  render: () => {
    return <OpenAndCloseModalComponent />
  },
} as unknown as Story

const OpenAndCloseFormModal = () => {
  const [isOpen, setIsOpen] = React.useState(false)
  const openModal = () => setIsOpen(true)
  const closeModal = () => setIsOpen(false)

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        closeModal()
        const formData = new FormData(e.currentTarget)
        alert(
          `Form submitted:  ${JSON.stringify(Object.fromEntries(formData))}`,
        )
      }}
    >
      <Modal
        id="open-and-close-form-modal"
        isOpen={isOpen}
        title="Form Modal"
        onClose={closeModal}
        buttons={[
          {
            label: 'Close',
            type: 'button',
            variant: 'neutral',
            onClick: closeModal,
          },
          { label: 'Save', type: 'submit' },
        ]}
      >
        <Collapsible title="My personal data" name="personal-data">
          <Divider title="19/01/2025 - My gaming diary" variant="primary" />
          <FormContainer fluid>
            <Input name="input" label="Input" placeholder="Type something" />
            <Select
              label="Select"
              name="select"
              helpText="This is a help text"
              placeholder="Select an option"
              options={[
                { id: '1', label: 'Option 1' },
                { id: '2', label: 'Option 2' },
                { id: '3', label: 'Option 3' },
                { id: '4', label: 'Option 4' },
                { id: '5', label: 'Option 5' },
                { id: '6', label: 'Option 6' },
                { id: '7', label: 'Option 7' },
                { id: '8', label: 'Option 8' },
                { id: '9', label: 'Option 9' },
                { id: '10', label: 'Option 10' },
                { id: '11', label: 'Option 11' },
                { id: '12', label: 'Option 12' },
                { id: '13', label: 'Option 13' },
                { id: '14', label: 'Option 14' },
                { id: '15', label: 'Option 15' },
              ]}
            />
          </FormContainer>
        </Collapsible>
      </Modal>

      <Button label="Open Modal" type="button" onClick={openModal} />
    </form>
  )
}

export const FormModal: Story = {
  render: () => {
    return <OpenAndCloseFormModal />
  },
} as unknown as Story
