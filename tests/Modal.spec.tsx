import { render, screen } from '@testing-library/react'
import React from 'react'
import { Modal, type Variant } from '../src/atoms/Modal'

describe('Modal', () => {
  beforeAll(() => {
    HTMLDialogElement.prototype.show = jest.fn()
    HTMLDialogElement.prototype.showModal = jest.fn()
    HTMLDialogElement.prototype.close = jest.fn()
  })

  const variants = ['info', 'success', 'warning', 'error']
  it.each(variants)(
    'renders the %s variant with title and the expected icon and button',
    (variant) => {
      const title = `${variant} modal`
      const content = `${variant} modal content`
      const { getByRole, getByText } = render(
        <Modal
          variant={variant as Variant}
          id={`${variant}-modal`}
          title={title}
          isOpen={true}
          buttons={[
            {
              label: 'Done',
            },
          ]}
        >
          {content}
        </Modal>,
      )
      expect(getByRole('img', { hidden: true })).toHaveClass(variant)
      expect(getByText(title)).toBeInTheDocument()
      expect(getByText(content)).toBeInTheDocument()
      expect(getByRole('button', { hidden: true })).toHaveTextContent('Done')
      expect(getByRole('button', { hidden: true })).toHaveClass('primary')
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
        isOpen={true}
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
    expect(getByRole('img', { hidden: true })).toHaveClass('warning')
    expect(getByText(title)).toBeInTheDocument()
    expect(getByText(content)).toBeInTheDocument()
    expect(
      screen.getAllByRole('button', { hidden: true })[0],
    ).toHaveTextContent('Cancel')
    expect(screen.getAllByRole('button', { hidden: true })[0]).toHaveClass(
      'neutral',
    )
    expect(
      screen.getAllByRole('button', { hidden: true })[1],
    ).toHaveTextContent('Delete')
    expect(screen.getAllByRole('button', { hidden: true })[1]).toHaveClass(
      'error',
    )
  })
})
