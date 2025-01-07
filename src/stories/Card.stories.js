import { IconButton } from '../atoms/Button'
import { Button } from '../atoms/Button'
import { Card, CardContent, CardFooter, CardHeader } from '../atoms/Card'

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
    visible: {
      description: 'Is component visible?',
      control: 'boolean',
    },
    variant: {
      description: 'Component variant used',
    },
    isActive: {
      description: 'Is component active?',
      control: 'boolean',
    },
    error: {
      description: 'Has component an error?',
      control: 'boolean',
    },
    isBold: {
      description: 'Is component title shown with bold style?',
      control: 'boolean',
    },
    title: {
      description: 'Title text',
      control: 'text',
    },
    isDisabled: {
      description: 'Is component disabled?',
      control: 'text',
    },
    href: {
      description: 'Link to redirect when clicking on the card',
      control: 'text',
    },
  },
  parameters: figmaPrimaryDesign,
}

export default meta

export const ProductCard = {
  render: () => (
    <div style={{ display: 'flex' }}>
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
    <div style={{ display: 'flex', width: '700px', gap: '20px' }}>
      <Card variant="primary">
        <CardHeader
          isBold
          title="TEKKEN 8 will feature exciting new gameplay focused on “Aggressive”
            tactics. Retaining TEKKEN's unique fighting game identity, the game
            will provide both players and spectators with the series' most
            thrilling experience yet with visceral screen-jarring attacks and
            environments that are both dynamic and destructible."
        >
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
          <p>
            TEKKEN 8 will feature exciting new gameplay focused on “Aggressive”
            tactics. Retaining TEKKEN&apos;s unique fighting game identity, the
            game will provide both players and spectators with the series&apos;
            most thrilling experience yet with visceral screen-jarring attacks
            and environments that are both dynamic and destructible.
          </p>
        </CardContent>
        <CardFooter>
          <Button variant="primary-outlined" label="Add to wishlist" />
        </CardFooter>
      </Card>
      <Card variant="primary">
        <CardHeader isBold title="Metal Gear Solid 5" />
        <CardContent>
          <p>
            Metal Gear Solid 5: Ground Zeroes + The Phantom Pain is a stealth
          </p>
        </CardContent>
      </Card>
    </div>
  ),
}

export const Disabled = {
  render: () => (
    <div style={{ display: 'flex' }}>
      <Card isDisabled variant="primary">
        <CardHeader isBold title="Tekken 8">
          <IconButton disabled icon="Delete" accessibilityLabel="Delete game" />
        </CardHeader>
        <CardContent>
          <p>
            TEKKEN 8 will feature exciting new gameplay focused on “Aggressive”
            tactics. Retaining TEKKEN&apos;s unique fighting game identity, the
            game will provide both players and spectators with the series&apos;
            most thrilling experience yet with visceral screen-jarring attacks
            and environments that are both dynamic and destructible.
          </p>
        </CardContent>
        <CardFooter>
          <Button variant="primary-outlined" disabled label="Add to wishlist" />
        </CardFooter>
      </Card>
    </div>
  ),
}

export const Active = {
  render: () => (
    <div style={{ display: 'flex' }}>
      <Card isActive>
        <CardHeader title="Fallout 3">
          <IconButton icon="Delete" accessibilityLabel="Delete game" />
        </CardHeader>
      </Card>
    </div>
  ),
}

export const WithLink = {
  render: () => (
    <div style={{ display: 'flex' }}>
      <Card href="some-url">
        <CardHeader title="Fallout 3" isBold />
        <CardContent>
          <p>
            Fallout 3 is a post-apocalyptic action role-playing open world video
            game developed by Bethesda Game Studios and published by Bethesda
            Softworks.
          </p>
        </CardContent>
      </Card>
    </div>
  ),
}
