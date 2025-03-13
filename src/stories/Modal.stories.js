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
  parameters: {
    docs: {
      description: {
        component:
          "<h2>Usage guidelines</h2><p>Modal component is used when requiring users to interact with the application, but without jumping to a new page and interrupting the user's workflow. It creates a new floating layer over the current page to get user feedback or display information.</p><ul><li>Require a response from the user</li><li>Notify the user of any related information</li><li>Confirm a user decision</li><li>It's opened/closed through `isOpen` prop. If we don't want it to be part of the DOM, we can also add a conditional render on the frontend project.</li><li>Natively, focus is set on the first nested focusable element and explicitly indicated by default by the browser</li><li>When nesting a Form inside Modal component, remember to add `type='button'` to all Cancel buttons to not to be considered as submitable</li></ul>",
      },
    },
    figmaPrimaryDesign,
  },
  tags: ['autodocs'],
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
      description: 'Array of button to be shown on the footer',
    },
    scrollable: {
      description: 'If the body modal should be scrollable',
    },
    onClose: {
      description: 'Function to be called when the modal is closed',
    },
  },
}

export default meta

const OpenAndCloseInfo = () => {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <>
      <Modal
        id="info-dangerous-alone"
        isOpen={isOpen}
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
      <Button label="Open Modal" onClick={() => setIsOpen(true)} />
    </>
  )
}

export const Info = {
  render: () => {
    return <OpenAndCloseInfo />
  },
}

const OpenAndCloseSuccess = () => {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <>
      <Modal
        id="success-dangerous-alone"
        isOpen={isOpen}
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
      <Button label="Open Modal" onClick={() => setIsOpen(true)} />
    </>
  )
}

export const Success = {
  render: () => {
    return <OpenAndCloseSuccess />
  },
}

const OpenAndCloseWarning = () => {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <>
      <Modal
        id="warning-dangerous-alone"
        isOpen={isOpen}
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
      <Button label="Open Modal" onClick={() => setIsOpen(true)} />
    </>
  )
}

export const Warning = {
  render: () => {
    return <OpenAndCloseWarning />
  },
}

const OpenAndCloseError = () => {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <>
      <Modal
        id="error-dangerous-alone"
        isOpen={isOpen}
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
      <Button label="Open Modal" onClick={() => setIsOpen(true)} />
    </>
  )
}

export const Error = {
  render: () => {
    return <OpenAndCloseError />
  },
}

const OpenAndCloseDeleteOrDiscard = () => {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <>
      <Modal
        id="discard-dangerous-alone"
        isOpen={isOpen}
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
      <Button label="Open Modal" onClick={() => setIsOpen(true)} />
    </>
  )
}

export const DeleteOrDiscard = {
  render: () => {
    return <OpenAndCloseDeleteOrDiscard />
  },
}

const OpenAndCloseLargeModal = () => {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <>
      <Modal
        title="Large Modal"
        isOpen={isOpen}
        onClose={() => alert('Close')}
        buttons={[
          {
            label: 'Close',
            type: 'button',
            variant: 'neutral',
            onClick: () => alert('Close'),
          },
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
      <Button label="Open Modal" onClick={() => setIsOpen(true)} />
    </>
  )
}

export const LargeModal = {
  render: () => {
    return <OpenAndCloseLargeModal />
  },
}

const OpenAndCloseScrollableModal = () => {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <>
      <Modal
        title="Scrollable Modal Title"
        isOpen={isOpen}
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
      <Button label="Open Modal" onClick={() => setIsOpen(true)} />
    </>
  )
}

export const ScrollableModal = {
  render: () => {
    return <OpenAndCloseScrollableModal />
  },
}

const OpenAndCloseModalComponent = () => {
  const [isOpen, setIsOpen] = React.useState(false)
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
      <Button label="Open Modal" onClick={() => setIsOpen(true)} />
    </>
  )
}

export const OpenAndCloseModal = {
  render: () => {
    return <OpenAndCloseModalComponent />
  },
}

const OpenAndCloseFormModal = () => {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        alert(
          `Form submitted:  ${JSON.stringify(Object.fromEntries(formData))}`,
        )
      }}
    >
      <Modal
        isOpen={isOpen}
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

      <Button
        label="Open Modal"
        type="button"
        onClick={() => setIsOpen(true)}
      />
    </form>
  )
}

export const FormModal = {
  render: () => {
    return <OpenAndCloseFormModal />
  },
}
