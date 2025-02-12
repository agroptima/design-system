import React from 'react'
import { Button, IconButton } from '../atoms/Button'
import { Card } from '../atoms/Card'
import { DetailItem } from '../atoms/DetailItem'
import { FormContainer } from '../atoms/Form'
import { Input } from '../atoms/Input'
import {
  ModalBody,
  ModalCloseButton,
  ModalDialog,
  ModalFooter,
  ModalHeader,
  ModalTitle,
} from '../atoms/Modal'
import { Modal } from '../atoms/Modal/Modal'
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
  tags: ['autodocs'],
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
      description: 'Array of button to be shown on the footer',
    },
    scrollable: {
      description: 'If the body modal should be scrollable',
    },
    onClose: {
      description: 'Function to be called when the modal is closed',
    },
  },
  parameters: figmaPrimaryDesign,
}

export default meta

export const Info = {
  render: () => (
    <Modal
      id="info-dangerous-alone"
      variant="info"
      title="It's dangerous to go alone!"
      buttons={[
        {
          label: 'Done',
          onClick: () => alert('click'),
        },
      ]}
    >
      Take this 🗡️
    </Modal>
  ),
}

export const Success = {
  render: () => (
    <Modal
      id="success-dangerous-alone"
      variant="success"
      title="It's dangerous to go alone!"
      buttons={[
        {
          label: 'Done',
          onClick: () => alert('click'),
        },
      ]}
    >
      Take this 🗡️
    </Modal>
  ),
}

export const Warning = {
  render: () => (
    <Modal
      id="warning-dangerous-alone"
      variant="warning"
      title="It's dangerous to go alone!"
      buttons={[
        {
          label: 'Done',
          onClick: () => alert('click'),
        },
      ]}
    >
      Take this 🗡️
    </Modal>
  ),
}

export const Error = {
  render: () => (
    <Modal
      id="error-dangerous-alone"
      variant="error"
      title="It's dangerous to go alone!"
      buttons={[
        {
          label: 'Done',
          onClick: () => alert('click'),
        },
      ]}
    >
      Take this 🗡️
    </Modal>
  ),
}

export const DeleteOrDiscard = {
  render: () => (
    <Modal
      id="discard-dangerous-alone"
      variant="discard"
      title="The far horizon was always steamy and indistinct"
      buttons={[
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
      ]}
    >
      But I could see that great jungles of unknown tree-ferns, calamites,
      lepidodendra, and sigillaria lay outside the city, their fantastic
      frondage waving mockingly in the shifting vapours. Now and then there
      would be suggestions of motion in the sky, but these my early visions
      never resolved.
    </Modal>
  ),
}

export const LargeModal = () => (
  <Modal
    title="Large Modal"
    onClose={() => alert('Close')}
    buttons={[
      { label: 'Close', variant: 'neutral', onClick: () => alert('Close') },
      { label: 'Save' },
    ]}
  >
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
  </Modal>
)

export const ScrollableModal = () => (
  <Modal
    title="Scrollable Modal Title"
    onClose={() => console.log('close')}
    scrollable
    buttons={[
      {
        label: 'Close',
        variant: 'neutral',
        onClick: () => console.log('close'),
      },
    ]}
  >
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
  </Modal>
)

const OpenAndCloseModalComponent = () => {
  const [isOpen, setIsOpen] = React.useState(false)
  const closeModal = () => setIsOpen(false)
  return (
    <>
      <Button label="Open Modal" onClick={() => setIsOpen(true)} />
      {isOpen && (
        <ModalDialog details onClose={closeModal}>
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
      )}
      <LoremIpsum lorems={10} />
    </>
  )
}

export const OpenAndCloseModal = {
  render: () => {
    return <OpenAndCloseModalComponent />
  },
}

export const FormModal = () => (
  <form
    onSubmit={(e) => {
      e.preventDefault()
      const formData = new FormData(e.currentTarget)
      alert(`Form submitted:  ${JSON.stringify(Object.fromEntries(formData))}`)
    }}
  >
    <Modal
      title="Form Modal"
      onClose={() => alert('Close')}
      buttons={[
        {
          label: 'Close',
          type: 'button',
          variant: 'neutral',
          onClick: () => alert('Close'),
        },
        { label: 'Save', type: 'submit' },
      ]}
    >
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
    </Modal>
  </form>
)
