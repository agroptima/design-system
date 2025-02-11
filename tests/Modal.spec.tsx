import { render, screen } from '@testing-library/react'
import React from 'react'
import { Modal } from '../src/atoms/Modal/Modal'

describe('Modal', () => {
  const variants = ['info', 'success', 'warning', 'error']
  it.each(variants)(
    'renders the %s variant with title and the expected icon and button',
    (variant) => {
      const title = `${variant} modal`
      const content = `${variant} modal content`
      const { getByRole, getByText } = render(
        <Modal
          id={`${variant}-modal`}
          title={title}
          buttons={[
            {
              label: 'Done',
            },
          ]}
        >
          {content}
        </Modal>,
      )
      expect(getByRole('img')).toHaveClass('info')
      expect(getByText(title)).toBeInTheDocument()
      expect(getByText(content)).toBeInTheDocument()
      expect(getByRole('button')).toHaveTextContent('Done')
      expect(getByRole('button')).toHaveClass('primary')
    },
  )

  it('renders the Delete/Discard variant with title and the expected icon and buttons', () => {
    const title = 'Delete modal'
    const content = 'Delete modal content'
    const { getByRole, getByText } = render(
      <Modal
        id="discard-modal"
        title={title}
        variant="discard"
        buttons={[
          {
            label: 'Cancel',
            variant: 'neutral',
          },
          {
            label: 'Delete',
            variant: 'error',
          },
        ]}
      >
        {content}
      </Modal>,
    )
    expect(getByRole('img')).toHaveClass('discard')
    expect(getByText(title)).toBeInTheDocument()
    expect(getByText(content)).toBeInTheDocument()
    expect(screen.getAllByRole('button')[0]).toHaveTextContent('Cancel')
    expect(screen.getAllByRole('button')[0]).toHaveClass('neutral')
    expect(screen.getAllByRole('button')[1]).toHaveTextContent('Delete')
    expect(screen.getAllByRole('button')[1]).toHaveClass('error')
  })
})
