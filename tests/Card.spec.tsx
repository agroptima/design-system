import { render } from '@testing-library/react'
import React from 'react'
import { Button } from '../src/atoms/Button'
import { Card, CardContent, CardFooter, CardHeader } from '../src/atoms/Card'

describe('Product card', () => {
  it('renders the expected structure and data', () => {
    const { getByText, container } = render(
      <Card>
        <CardHeader
          isBold
          title="Metal Gear Solid 5: Ground Zeroes + The Phantom Pain"
        />
        <CardContent>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              color: '#9B9B9B',
              fontSize: '0.875rem',
              fontWeight: '400',
            }}
          >
            <span>PlayStation 4</span>
            <div>
              <span
                style={{
                  color: '#444',
                  fontSize: '1rem',
                  fontWeight: '700',
                }}
              >
                6,99€&nbsp;
              </span>
              <span
                style={{
                  color: '#444',
                  fontSize: '1rem',
                  fontWeight: '400',
                }}
              >
                / unit
              </span>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button variant="primary-outlined" label="Buy" />
        </CardFooter>
      </Card>,
    )

    expect(container.getElementsByClassName('card').length).toBe(1)
    expect(container.getElementsByClassName('primary').length).toBe(1)
    expect(container.getElementsByClassName('card-header').length).toBe(1)
    expect(container.getElementsByClassName('card-content').length).toBe(1)
    expect(container.getElementsByClassName('card-footer').length).toBe(1)

    expect(getByText(/Metal Gear Solid 5/i)).toBeInTheDocument()
    expect(getByText(/PlayStation/i)).toBeInTheDocument()
    expect(getByText(/6,99€/i)).toBeInTheDocument()
    expect(getByText(/Buy/i)).toBeInTheDocument()
  })
})
