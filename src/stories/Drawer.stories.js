import React from 'react'
import { CheckableTag, CheckableTagGroup } from '../atoms/CheckableTag'
import { Collapsible } from '../atoms/Collapsible/Collapsible'
import { DateRangePicker } from '../atoms/DatePicker/DateRangePicker'
import { Drawer } from '../atoms/Drawer'

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
      description: 'Array of buttons to be shown on the footer',
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          '<h2>Usage guidelines</h2><p>A Drawer is a panel that is typically overlaid on top of a page and slides in from the side. It contains a set of information or actions. Since the user can interact with the Drawer without leaving the current page, tasks can be achieved more efficiently within the same context.</p>',
      },
    },
    figmaPrimaryDesign,
  },
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
      <Collapsible noHorizontalPadding open title="Date">
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <DateRangePicker
            defaultValue={{ from: '2024-01-02', to: '2024-01-12' }}
            onSelect={(date) => console.log('date: ', date)}
            lng="en"
          />
        </div>
      </Collapsible>
    </Drawer>
  ),
}
