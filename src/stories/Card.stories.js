import { IconButton } from '@/atoms/IconButton'
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
    <Card variant="primary">
      <CardHeader isBold title="Metal Gear Solid 5: Ground Zeroes + The Phantom Pain" />
      <CardContent>
        <div style={{ display: 'flex', flexDirection: 'column', color: '#9B9B9B', fontSize: '0.875rem', fontWeight: '400'}}>
          <span>PlayStation 4</span>
          <div>
            <span style={{color: '#444', fontSize: '1rem', fontWeight: '700'}}>9,95€</span>
            <span style={{color:'#444', fontSize: '1rem', fontWeight: '400'}}> / unit</span>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="primary-outlined" label="Buy" />
      </CardFooter>
    </Card>
  ),
}

export const Primary = {
  render: () => (
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
  ),
}

export const Disabled = {
  render: () => (
    <Card isDisabled={true} variant="primary">
      <CardHeader title="Tekken 8">
        <IconButton
          disabled
          icon="Delete"
          accessibilityLabel="Delete game"
        />
      </CardHeader>
      <CardContent>
        <p>TEKKEN 8 will feature exciting new gameplay focused on “Aggressive” tactics. Retaining TEKKEN's unique fighting game identity, the game will provide both players and spectators with the series' most thrilling experience yet with visceral screen-jarring attacks and environments that are both dynamic and destructible.</p>
      </CardContent>
      <CardFooter>
        <Button variant="primary-outlined" disabled label="Add to wishlist" />
      </CardFooter>
    </Card>
  ),
}

