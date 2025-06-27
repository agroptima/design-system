import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import { Card, CardHeader } from '../src/atoms/Card'
import { Modal, type Variant } from '../src/atoms/Modal'

describe('Modal', () => {
  beforeAll(() => {
    HTMLDialogElement.prototype.showModal = function () {
      this.setAttribute('open', '')
    }
    HTMLDialogElement.prototype.close = function () {
      this.removeAttribute('open')
    }
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

  it('renders the Delete/Discard variant with title and the expected icon and buttons', async () => {
    const title = 'Delete modal'
    render(
      <Modal
        isOpen={true}
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
        <ul role="listbox">
          <li role="option" aria-selected={false} tabIndex={0}>
            <Card>
              <CardHeader title="Item 1" />
            </Card>
          </li>
          <li role="option" aria-selected={false} tabIndex={0}>
            <Card>
              <CardHeader title="Item 2" />
            </Card>
          </li>
          <li role="option" aria-selected={false} tabIndex={0}>
            <Card>
              <CardHeader title="Item 3" />
            </Card>
          </li>
        </ul>
      </Modal>,
    )

    expect(screen.getByRole('img', { hidden: true })).toHaveClass('warning')
    expect(screen.getByText(title)).toBeInTheDocument()
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
    expect(screen.getByRole('option', { name: 'Item 3' })).toBeInTheDocument()
  })
  it('is content accessible when open modal', async () => {
    const user = userEvent.setup()
    const ModalWithOpenButton = () => {
      const [isOpen, setIsOpen] = React.useState(false)

      return (
        <>
          <button onClick={() => setIsOpen(true)}>Open Modal</button>
          <Modal
            id="any-modal"
            isOpen={isOpen}
            title="Any modal"
            buttons={[
              {
                label: 'Ok',
                onClick: () => setIsOpen(false),
              },
            ]}
          >
            <ul role="listbox">
              <li role="option" aria-selected={false} tabIndex={0}>
                <Card>
                  <CardHeader title="Item 1" />
                </Card>
              </li>
              <li role="option" aria-selected={false} tabIndex={0}>
                <Card>
                  <CardHeader title="Item 2" />
                </Card>
              </li>
              <li role="option" aria-selected={false} tabIndex={0}>
                <Card>
                  <CardHeader title="Item 3" />
                </Card>
              </li>
            </ul>
          </Modal>
        </>
      )
    }
    render(<ModalWithOpenButton />)

    await user.click(screen.getByRole('button', { name: 'Open Modal' }))

    expect(screen.queryAllByRole('option')).toHaveLength(3)
    expect(screen.getByRole('option', { name: 'Item 3' })).toBeInTheDocument()
  })
})
