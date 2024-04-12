import React from 'react'

import { Modal } from '../atoms/Modal'

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
    showModal: {
      description: 'Boolean to control the component visibility state',
    },
  },
  parameters: figmaPrimaryDesign,
}

export default meta

export const Info = {
  render: () => 
    <Modal 
      id='info-dangerous-alone'
      variant='info'
      title= "It's dangerous to go alone!"
      buttons= {[{
        label: 'Done',
        onClick: () => alert('click'),
      }]}
    >
        Take this 🗡️
    </Modal>
}

export const Success = {
  render: () => 
    <Modal 
      id='success-dangerous-alone'
      variant='success'
      title= "It's dangerous to go alone!"
      buttons= {[{
        label: 'Done',
        onClick: () => alert('click'),
      }]}
    >
        Take this 🗡️
    </Modal>
}

export const Warning = {
  render: () => 
    <Modal 
      id='warning-dangerous-alone'
      variant='warning'
      title= "It's dangerous to go alone!"
      buttons= {[{
        label: 'Done',
        onClick: () => alert('click'),
      }]}
    >
        Take this 🗡️
    </Modal>
}

export const Error = {
  render: () => 
    <Modal 
      id='error-dangerous-alone'
      variant='error'
      title= "It's dangerous to go alone!"
      buttons= {[{
        label: 'Done',
        onClick: () => alert('click'),
      }]}
    >
        Take this 🗡️
    </Modal>
}

export const DeleteOrDiscard = {
  render: () => 
    <Modal 
      id='discard-dangerous-alone'
      variant='discard'
      title= "It's dangerous to go alone!"
      buttons= {[{
        label: 'Cancel',
        variant: 'neutral',
        onClick: () => alert('click'),
      },
      {
        label: 'Delete',
        variant: 'error',
        onClick: () => alert('click'),
      }]}
    >
        Take this 🗡️
    </Modal>
}


