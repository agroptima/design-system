import React from 'react'
import {
  Ellipsis,
  Pagination,
  PaginationArrow,
  PaginationNumber,
} from '../atoms/Pagination'

const figmaPrimaryDesign = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/design/DN2ova21vWqCRvPspBXgI1/Design-System?node-id=2699-4057&m=dev',
  },
}

const meta = {
  title: 'Design System/Atoms/Pagination',
  component: Pagination,
  tags: ['autodocs'],
  argTypes: {
    size: {
      description: 'Pagination size (small, medium)',
    },
    variant: {
      description: 'Component variant used',
    },
    href: {
      description: 'Link to the page',
    },
    variant: {
      description: 'Component variant used',
    },
    selected: {
      description: 'Is PageNumber the current page?',
    },
    accessibilityLabel: {
      description: 'Label for accessibility purposes',
    },
    label: {
      description: 'PageNumber label',
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          '<h2>Usage guidelines</h2>' +
          '<p>Pagination component organizes and divides large amounts of content on separate pages and gives the user control over how much content they want to view on each page.</p>',
      },
    },
    figmaPrimaryDesign,
  },
}

export default meta

export const BasicPagination = {
  render: () => (
    <Pagination>
      <PaginationArrow
        icon="AngleLeft"
        href="https://google.com"
        accessibilityLabel="Previous page"
        variant="primary"
        disabled
      />

      <PaginationNumber
        label="1"
        href="https://google.com"
        accessibilityLabel="Go to page 1"
        variant="primary"
        selected
      />

      <PaginationNumber
        label="2"
        href="https://google.com"
        accessibilityLabel="Go to page 2"
        variant="primary"
      />

      <PaginationArrow
        icon="AngleRight"
        href="https://google.com"
        accessibilityLabel="Next page"
        variant="primary"
      />
    </Pagination>
  ),
}

export const MiniPagination = {
  render: () => (
    <Pagination size="small">
      <PaginationArrow
        icon="AngleLeft"
        href="https://google.com"
        accessibilityLabel="Previous page"
        variant="primary"
        disabled
      />

      <PaginationNumber
        label="1"
        href="https://google.com"
        accessibilityLabel="Go to page 1"
        variant="primary"
      />

      <PaginationNumber
        label="2"
        href="https://google.com"
        accessibilityLabel="Go to page 2"
        variant="primary"
      />

      <PaginationNumber
        label="3"
        href="https://google.com"
        accessibilityLabel="Go to page 3"
        variant="primary"
        selected
      />

      <PaginationNumber
        label="4"
        href="https://google.com"
        accessibilityLabel="Go to page 4"
        variant="primary"
      />

      <PaginationNumber
        label="5"
        href="https://google.com"
        accessibilityLabel="Go to page 5"
        variant="primary"
      />

      <PaginationArrow
        icon="AngleRight"
        href="https://google.com"
        accessibilityLabel="Next page"
        variant="primary"
      />
    </Pagination>
  ),
}

export const AdvancedPagination = {
  render: () => (
    <Pagination>
      <PaginationArrow
        icon="AngleLeft"
        href="https://google.com"
        accessibilityLabel="Previous page"
        variant="primary"
        disabled
      />

      <PaginationNumber
        label="1"
        href="https://google.com"
        accessibilityLabel="Go to page 1"
        variant="primary"
      />

      <Ellipsis />

      <PaginationNumber
        label="4"
        href="https://google.com"
        accessibilityLabel="Go to page 4"
        variant="primary"
      />
      <PaginationNumber
        label="5"
        href="https://google.com"
        accessibilityLabel="Go to page 5"
        variant="primary"
      />
      <PaginationNumber
        label="6"
        href="https://google.com"
        accessibilityLabel="Go to page 6"
        variant="primary"
        selected
      />
      <PaginationNumber
        label="7"
        href="https://google.com"
        accessibilityLabel="Go to page 7"
        variant="primary"
      />
      <PaginationNumber
        label="8"
        href="https://google.com"
        accessibilityLabel="Go to page 8"
        variant="primary"
      />

      <Ellipsis />

      <PaginationNumber
        label="50"
        href="https://google.com"
        accessibilityLabel="Go to page 50"
        variant="primary"
      />

      <PaginationArrow
        icon="AngleRight"
        href="https://google.com"
        accessibilityLabel="Next page"
        variant="primary"
      />
    </Pagination>
  ),
}
