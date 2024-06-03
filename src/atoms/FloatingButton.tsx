import NextLink from 'next/link'
import './FloatingButton.scss'
import { Icon, IconType } from './Icon'
import { classNames } from '../utils/classNames'

export type Variant = 'primary'

export interface BaseFloatingButtonProps {
  icon: IconType
  variant?: Variant
  disabled?: boolean
  accessibilityLabel: string
}

type HtmlButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>

type AnchorProps = React.AnchorHTMLAttributes<HTMLAnchorElement>

export type FloatingButtonProps =
  | (HtmlButtonProps & BaseFloatingButtonProps)
  | (AnchorProps & BaseFloatingButtonProps)

const hasHref = (props: HtmlButtonProps | AnchorProps): props is AnchorProps =>
  'href' in props

export function FloatingButton({
  accessibilityLabel,
  icon,
  disabled,
  variant = 'primary',
  ...props
}: FloatingButtonProps) {
  const cssClasses = classNames('floating-button', variant, props.className)

  if (hasHref(props)) {
    return (
      <NextLink
        href={props.href || ''}
        aria-label={accessibilityLabel}
        {...props}
        className={cssClasses}
      >
        <Icon name={icon} />
      </NextLink>
    )
  }

  return (
    <button
      disabled={disabled}
      aria-label={accessibilityLabel}
      {...props}
      className={cssClasses}
    >
      <Icon name={icon} />
    </button>
  )
}
