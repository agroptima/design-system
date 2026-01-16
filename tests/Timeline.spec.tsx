import { render } from '@testing-library/react'
import React from 'react'
import { Milestone, Timeline } from '../src/atoms/Timeline'
import { LoadMoreMilestonesButton } from '../src/atoms/Timeline/LoadMoreMilestonesButton'

describe('Timeline', () => {
  it('renders with expected content and buttons', () => {
    const { getByText, getAllByRole } = render(
      <>
        <LoadMoreMilestonesButton
          onClick={() => jest.fn()}
          variant="primary"
          title="View previous"
          leftIcon="AngleUp"
        />
        <Timeline>
          <Milestone
            title="1985"
            description="Nintendo
      NES launches with breakout hits like Super
      Mario Bros.
      Sega launches its Master System."
          />
          <Milestone
            isSelected
            title="1986"
            description="Legend of Zelda comes out, spawning a long series of popular games."
          />
        </Timeline>
        <LoadMoreMilestonesButton
          onClick={() => jest.fn()}
          variant="primary"
          title="View next"
          leftIcon="AngleDown"
        />
      </>,
    )
    expect(getByText('1985')).toBeInTheDocument()
    expect(getByText(/Nintendo NES launches with/i)).toBeInTheDocument()
    expect(getByText('1986')).toBeInTheDocument()
    expect(getByText(/Legend of Zelda comes out/i)).toBeInTheDocument()
    expect(getAllByRole('listitem')[0]).toHaveClass('milestone-item')
    expect(getAllByRole('listitem')[1]).toHaveClass('milestone-item selected')
    expect(getAllByRole('button')[0]).toBeInTheDocument()
    expect(getAllByRole('button')[1]).toBeInTheDocument()
    expect(getAllByRole('button')[0]).toHaveClass(
      'load-more-milestones-button primary',
    )
    expect(getAllByRole('button')[1]).toHaveClass(
      'load-more-milestones-button primary',
    )
  })
})
