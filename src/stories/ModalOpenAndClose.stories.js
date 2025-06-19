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
import modalMeta from './Modal.stories'

const meta = {
  ...modalMeta,
  title: 'Design System/Atoms/Modal',
}

export default meta

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

export const OpenAndCloseModal = {
  render: () => {
    return <OpenAndCloseModalComponent />
  },
}

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
          <Divider
            title="19/01/2025 - My gaming diary"
            variant="primary"
            href="link.com"
          />
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

export const FormModal = {
  render: () => {
    return <OpenAndCloseFormModal />
  },
}
