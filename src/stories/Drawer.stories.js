import React from 'react'

import { Drawer } from '../atoms/Drawer'
import { CheckableTagGroup, CheckableTag } from '../atoms/CheckableTag'
import { Collapsible } from '@/atoms/Collapsible'

const figmaPrimaryDesign = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/DN2ova21vWqCRvPspBXgI1/Design-System?type=design&node-id=1992-142&mode=dev',
  },
}

const meta = {
  title: 'Design System/Atoms/Drawer',
  component: Drawer,
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

export const Filters = {
  render: () => (
    <Drawer
      id="videogames-filters"
      title="Filters"
      buttons={[
        {
          label: 'Clear',
          variant: 'primary-outlined',
          onClick: () => alert('click'),
        },
        {
          label: 'Apply',
          onClick: () => alert('click'),
        },
      ]}
    >
      <Collapsible noHorizontalPadding open title="Genres">
        <CheckableTagGroup>
          <CheckableTag
            variant="primary"
            label="RPG"
            aria-label="RPG games"
            onSelect={() => {}}
            onChange={() => {}}
            isChecked={false}
          />
          <CheckableTag
            variant="primary"
            label="Sports"
            aria-label="Sport games"
            onSelect={() => {}}
            onChange={() => {}}
            isChecked={false}
          />
          <CheckableTag
            variant="primary"
            label="Party"
            aria-label="Party games"
            onSelect={() => {}}
            onChange={() => {}}
            isChecked={false}
            isDisabled={true}
          />
          <CheckableTag
            variant="primary"
            label="Survival horror"
            aria-label="Survival horror games"
            onSelect={() => {}}
            onChange={() => {}}
            isChecked={true}
          />
          <CheckableTag
            variant="primary"
            label="Action"
            aria-label="Action games"
            onSelect={() => {}}
            onChange={() => {}}
            isChecked={false}
          />
          <CheckableTag
            variant="primary"
            label="Platform"
            aria-label="Platform games"
            onSelect={() => {}}
            onChange={() => {}}
            isChecked={false}
          />
          <CheckableTag
            variant="primary"
            label="Graphic adventure"
            aria-label="Graphic adventure games"
            onSelect={() => {}}
            onChange={() => {}}
            isChecked={false}
          />
          <CheckableTag
            variant="primary"
            label="FPS"
            aria-label="First Person Shooter games"
            onSelect={() => {}}
            onChange={() => {}}
            isChecked={false}
          />
        </CheckableTagGroup>
      </Collapsible>
    </Drawer>
  ),
}
