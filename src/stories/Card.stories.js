import { IconButton } from '../atoms/IconButton'
import { Card } from '../atoms/Card'
import { CardHeader } from '../atoms/CardHeader'
import { CardContent } from '../atoms/CardContent'
import { CardFooter } from '../atoms/CardFooter'
import { Button } from '../atoms/Button'

const figmaPrimaryDesign = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/DN2ova21vWqCRvPspBXgI1/Design-System?type=design&node-id=2236-754&mode=dev',
  },
}

const meta = {
  title: 'Design System/Atoms/Card',
  component: Card,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      description: 'Component variant used',
    },
    isBold: {
      description: 'Is component title shown with bold style?',
    },
    title: {
      description: 'Title text',
    },
    isDisabled: {
      description: 'Is component disabled?',
    },
  },
  parameters: figmaPrimaryDesign,
}

export default meta

export const ProductCard = {
  render: () => (
    <div style={{width: '98%'}}>
      <Card variant="primary">
        <CardHeader
          isBold
          title="Metal Gear Solid 5: Ground Zeroes + The Phantom Pain"
        />
        <CardContent>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              color: '#727272FF',
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
      </Card>
    </div>
  ),
}

export const ProductCardsGroup = {
  render: () => (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        width: '100%',
        gap: '1.5rem',
      }}
    >
      <Card variant="primary">
        <CardHeader
          isBold
          title="Metal Gear Solid 5: Ground Zeroes + The Phantom Pain"
        />
        <CardContent>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              color: '#727272FF',
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
      </Card>

      <Card variant="primary">
        <CardHeader isBold title="Tekken 8" />
        <CardContent>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              color: '#727272FF',
              fontSize: '0.875rem',
              fontWeight: '400',
            }}
          >
            <span>PlayStation 5</span>
            <div>
              <span
                style={{
                  color: '#444',
                  fontSize: '1rem',
                  fontWeight: '700',
                }}
              >
                79,99€&nbsp;
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
      </Card>

      <Card variant="primary">
        <CardHeader isBold title="The Witcher 3" />
        <CardContent>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              color: '#727272FF',
              fontSize: '0.875rem',
              fontWeight: '400',
            }}
          >
            <span>Nintendo Switch</span>
            <div>
              <span
                style={{
                  color: '#444',
                  fontSize: '1rem',
                  fontWeight: '700',
                }}
              >
                19,99€&nbsp;
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
      </Card>

      <Card variant="primary">
        <CardHeader isBold title="Super Mario RPG" />
        <CardContent>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              color: '#727272FF',
              fontSize: '0.875rem',
              fontWeight: '400',
            }}
          >
            <span>Nintendo Switch</span>
            <div>
              <span
                style={{
                  color: '#444',
                  fontSize: '1rem',
                  fontWeight: '700',
                }}
              >
                49,99€&nbsp;
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
      </Card>

      <Card variant="primary">
        <CardHeader isBold title="Stray" />
        <CardContent>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              color: '#727272FF',
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
                15,99€&nbsp;
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
      </Card>

      <Card variant="primary">
        <CardHeader isBold title="The Medium" />
        <CardContent>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              color: '#727272FF',
              fontSize: '0.875rem',
              fontWeight: '400',
            }}
          >
            <span>PlayStation 5</span>
            <div>
              <span
                style={{
                  color: '#444',
                  fontSize: '1rem',
                  fontWeight: '700',
                }}
              >
                45,99€&nbsp;
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
      </Card>

      <Card variant="primary">
        <CardHeader isBold title="The Legend of Zelda: Tears of the Kingdom" />
        <CardContent>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              color: '#727272FF',
              fontSize: '0.875rem',
              fontWeight: '400',
            }}
          >
            <span>Nintendo Switch</span>
            <div>
              <span
                style={{
                  color: '#444',
                  fontSize: '1rem',
                  fontWeight: '700',
                }}
              >
                45,99€&nbsp;
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
      </Card>
    </div>
  ),
}

export const Primary = {
  render: () => (
    <div style={{width: '98%'}}>
      <Card variant="primary">
        <CardHeader title="Tekken 8">
          <IconButton
            icon="Edit"
            accessibilityLabel="Edit game"
            href="link.com"
          />
          <IconButton
            icon="Export"
            accessibilityLabel="Export game"
            href="link.com"
          />
          <IconButton
            icon="Delete"
            accessibilityLabel="Delete game"
            href="link.com"
          />
        </CardHeader>
        <CardContent>
          <p>TEKKEN 8 will feature exciting new gameplay focused on “Aggressive” tactics. Retaining TEKKEN's unique fighting game identity, the game will provide both players and spectators with the series' most thrilling experience yet with visceral screen-jarring attacks and environments that are both dynamic and destructible.</p>
        </CardContent>
        <CardFooter>
          <Button variant="primary-outlined" label="Add to wishlist" />
        </CardFooter>
      </Card>
    </div>
  ),
}

export const Disabled = {
  render: () => (
    <div style={{width: '98%'}}>
      <Card isDisabled={true} variant="primary">
        <CardHeader title="Tekken 8">
          <IconButton disabled icon="Delete" accessibilityLabel="Delete game" />
        </CardHeader>
        <CardContent>
          <p>TEKKEN 8 will feature exciting new gameplay focused on “Aggressive” tactics. Retaining TEKKEN's unique fighting game identity, the game will provide both players and spectators with the series' most thrilling experience yet with visceral screen-jarring attacks and environments that are both dynamic and destructible.</p>
        </CardContent>
        <CardFooter>
          <Button variant="primary-outlined" disabled label="Add to wishlist" />
        </CardFooter>
      </Card>
    </div>
  ),
}
