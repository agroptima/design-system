import { render } from '@testing-library/react'
import React from 'react'
import { CheckableTag, CheckableTagGroup } from '../src/atoms/CheckableTag'
import { Collapsible } from '../src/atoms/Collapsible'
import { Drawer } from '../src/atoms/Drawer'

describe('Drawer', () => {
  it('renders with expected title, content and buttons', () => {
    const { getByLabelText, getByText, getAllByRole } = render(
      <Drawer
        id="videogames-filters"
        title="Filters"
        onClose={jest.fn()}
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
          </CheckableTagGroup>
        </Collapsible>
      </Drawer>,
    )
    expect(getByText('Filters')).toBeInTheDocument()
    expect(getByText('RPG')).toBeInTheDocument()
    expect(getByLabelText('Close')).toBeInTheDocument()
    expect(getAllByRole('button')[0]).toHaveClass('icon-button primary')
    expect(getAllByRole('button')[1]).toHaveTextContent('Clear')
    expect(getAllByRole('button')[1]).toHaveClass('primary-outlined')
    expect(getAllByRole('button')[2]).toHaveTextContent('Apply')
    expect(getAllByRole('button')[2]).toHaveClass('primary')
  })
})
