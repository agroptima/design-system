import { render } from '@testing-library/react'
import React from 'react'
import { Icon } from '../src/atoms/Icon'

describe('Icon', () => {
  describe('Non-decorative icons (semantic)', () => {
    it('renders with role="img" and aria-label by default', () => {
      const { getByRole } = render(<Icon name="AngleLeft" className="info" />)

      expect(getByRole('img')).toHaveClass('icon info')
      expect(getByRole('img')).toHaveAttribute('aria-label', 'AngleLeft')
    })

    it('renders with custom accessibilityLabel', () => {
      const { getByRole } = render(
        <Icon name="AngleLeft" className="info" accessibilityLabel="Go back" />,
      )

      expect(getByRole('img')).toHaveClass('icon info')
      expect(getByRole('img')).toHaveAttribute('aria-label', 'Go back')
    })

    it('has a rotating animation for Loading icon', () => {
      const { getByRole } = render(<Icon name="Loading" className="info" />)

      expect(getByRole('img')).toHaveClass('icon info rotate')
      expect(getByRole('img')).toHaveAttribute('aria-label', 'Loading')
    })
  })

  describe('Decorative icons', () => {
    it('renders with aria-hidden="true" when decorative', () => {
      const { container, queryByRole } = render(
        <Icon name="AngleLeft" className="info" decorative />,
      )

      expect(queryByRole('img')).not.toBeInTheDocument()
      expect(
        container.querySelector('[aria-hidden="true"]'),
      ).toBeInTheDocument()
      expect(container.querySelector('[aria-hidden="true"]')).toHaveClass(
        'icon info',
      )
    })

    it('ignores accessibilityLabel when decorative', () => {
      const { container, queryByRole } = render(
        <Icon
          name="AngleLeft"
          accessibilityLabel="This will be ignored"
          decorative
        />,
      )

      expect(queryByRole('img')).not.toBeInTheDocument()
      expect(
        container.querySelector('[aria-hidden="true"]'),
      ).toBeInTheDocument()
    })

    it('applies rotate class for Loading icon even when decorative', () => {
      const { container } = render(
        <Icon name="Loading" className="info" decorative />,
      )

      const decorativeIcon = container.querySelector('[aria-hidden="true"]')
      expect(decorativeIcon).toHaveClass('icon info rotate')
    })
  })

  describe('Visibility control', () => {
    it('does not render when visible is false', () => {
      const { container } = render(<Icon name="AngleLeft" visible={false} />)

      expect(container.firstChild).toBeNull()
    })

    it('renders when visible is true (default)', () => {
      const { getByRole } = render(<Icon name="AngleLeft" />)

      expect(getByRole('img')).toBeInTheDocument()
    })
  })

  describe('Size variants', () => {
    it('renders with different size classes', () => {
      const { rerender, getByRole } = render(<Icon name="AngleLeft" size="3" />)
      expect(getByRole('img')).toHaveClass('icon size-3')

      rerender(<Icon name="AngleLeft" size="7" />)
      expect(getByRole('img')).toHaveClass('icon size-7')
    })

    it('uses size-5 by default', () => {
      const { getByRole } = render(<Icon name="AngleLeft" />)
      expect(getByRole('img')).toHaveClass('icon size-5')
    })
  })
})
