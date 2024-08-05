import React from 'react'

import { Modal } from '../atoms/Modal'
import { DetailItem } from '@/atoms/DetailItem'
import { Collapsible } from '@/atoms/Collapsible'
import { Card } from '@/atoms/Card'

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

export const Details = {
  render: () => (
    <Modal
      id="details-dangerous-alone"
      variant="details"
      title="Game details"
      buttons={[
        {
          label: 'Done',
          onClick: () => alert('click'),
        },
      ]}
    >
      <DetailItem title="Title">Final Fantasy VIII</DetailItem>
      <DetailItem title="Release date">11/02/1999</DetailItem>
      <DetailItem title="Publisher">
        <a href="#">Squaresoft</a>
      </DetailItem>
      <Collapsible open title="Special Features">
        <p>RPG genre</p>
        <p>1 player</p>
      </Collapsible>
      <Collapsible noHorizontalPadding open title="Other related games">
        <Card>
          <p>Final Fantasy IX</p>
          <p>Final Fantasy X</p>
        </Card>
      </Collapsible>
      <DetailItem style={{ marginTop: '10px' }} align="right" title="Price">
        59,95 €
      </DetailItem>
    </Modal>
  ),
}
