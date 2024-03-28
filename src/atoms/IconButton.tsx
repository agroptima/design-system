import NextLink from 'next/link'
import './IconButton.scss'
import { Icon, IconType } from './Icon'

export type Variant = 'primary'

export interface BaseIconButtonProps {
  icon: IconType
  variant?: Variant
  disabled?: boolean
  accessibilityLabel: string
}

type HtmlButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>

type AnchorProps = React.AnchorHTMLAttributes<HTMLAnchorElement>

export type IconButtonProps =
  | (HtmlButtonProps & BaseIconButtonProps)
  | (AnchorProps & BaseIconButtonProps)

const hasHref = (props: HtmlButtonProps | AnchorProps): props is AnchorProps =>
  'href' in props

export function IconButton({
  accessibilityLabel,
  icon,
  disabled,
  variant = 'primary',
  ...props
}: IconButtonProps) {
  const cssClasses = ['icon-button', variant].join(' ')

  if (hasHref(props)) {
    return (
      <NextLink
        href={props.href || ''}
        className={cssClasses}
        aria-label={accessibilityLabel}
        {...props}
      >
        <Icon name={icon} />
      </NextLink>
    )
  }

  return (
    <button
      className={cssClasses}
      disabled={disabled}
      aria-label={accessibilityLabel}
      {...props}
    >
      <Icon name={icon} />
    </button>
  )
}
